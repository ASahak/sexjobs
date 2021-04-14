import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Image, SimpleDialog} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import UseStyles from './styles';

const MyAdsImages = (props) => {
    const styles = UseStyles({}, {link: true});
    const [addedItems, setAddedItems] = useState({});

    const addToList = useCallback((index, id) => {
        if (props.alreadyUploaded.indexOf(id) > -1) return;
        const _addedItems = {...addedItems};
        if (_addedItems.hasOwnProperty(index)) {
            Object.keys(_addedItems).forEach(e => {
                if (_addedItems[e].count > 1 && _addedItems[e].count > _addedItems[index].count) _addedItems[e] = {count: _addedItems[e].count - 1, id: _addedItems[e].id }
            })
            delete _addedItems[index];
        } else _addedItems[index] = {count: Object.keys(_addedItems).length + 1, id }
        setAddedItems(_addedItems)
    }, [props.data, addedItems, props.alreadyUploaded])

    useEffect(() => {
        if (props.open) setAddedItems({})
    }, [props.open])

    useEffect(() => {
        if (props.open) {
            const _addedItems = {};
            let _count = 0;
            props.alreadyUploaded.forEach((id) => {
                const elemIndex = Object.keys(props.data).findIndex(_id => _id === id);
                if (elemIndex > -1) {
                    _count++;
                    _addedItems[elemIndex] = {id}
                }
            })
            for (let i = 0; i < _count; i++) {
                Object.values(_addedItems)[i].count = i + 1;
            }
            setAddedItems(_addedItems)
        }
    }, [props.alreadyUploaded, props.data, props.open])

    return (
        <SimpleDialog
            onClose={props.closeDialog}
            open={props.open}
            title="Previously used pictures"
        >
            <div className={styles['ads-dialog-wrapper']}>
                <p>Select a maximum of {GLOBAL_CONSTANTS.adsImagesMaxCount} pictures</p>
                <div className={styles['my-ads-images-list']}>
                    {Object.keys(props.data).map((id, index) => <div
                        className={`${addedItems[index] ? 'added-image' : ''} ${props.alreadyUploaded.indexOf(id) > -1 ? 'already-uploaded' : ''}`}
                        key={id}
                        onClick={() => addToList(index, id)}
                        data-index={addedItems[index]?.count || ''}>
                        <Image src={props.data[id].imgURL} defaultSrc="/images/notFound.png"/>
                    </div>)}
                </div>
                <Button
                    disabled={!Object.keys(addedItems).length}
                    onClick={() => props.emitSelected(Object.values(addedItems).map(e => e.id))}
                    typeButton="primary"
                    width={250}
                    mobileFullWidth={true}
                    text={'Select'}
                    direction={'center'}
                    margin={[16, 0, 16]}
                />
            </div>
        </SimpleDialog>
    )
}
MyAdsImages.defaultProps = {
    alreadyUploaded: [],
}
MyAdsImages.propTypes = {
    alreadyUploaded: PropTypes.array,
    data: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    emitSelected: PropTypes.func.isRequired,
}
export default React.memo(MyAdsImages);