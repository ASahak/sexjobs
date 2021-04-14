import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    Input
} from 'Components/Shared/UI';
import {
    filtersSelector,
    getSelectedFiltersType,
} from 'store/reselect';
import {setSelectedFilter} from 'store/actions';
import {useRouter} from 'next/router';
import {generateRouterReplace} from 'utils/handlers';
import {useSelector, useDispatch} from 'react-redux';

let _query;
const Pictures = (props) => {
    const dispatch = useDispatch();

    const filtersState = useSelector(filtersSelector());
    const pictures = filtersState.pictures || {
        is: 0,
        withOut: 0,
    };
    const getSelectedPictures = useSelector(getSelectedFiltersType({
        filterType: 'with_picture',
        default: null,
    }));
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const bodyRef = useRef();

    const filterByPicture = (val) => {
        router.query = _query;
        generateRouterReplace(router, {
            with_picture: val,
        })
    }

    const generatePicturesSubTitle = useCallback(() => {
        return +getSelectedPictures ? 'Yes' : 'No'
    }, [getSelectedPictures]);

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        dispatch(setSelectedFilter({filterType: 'with_picture', value: router.query.with_picture || null}))
    }, [router.query.with_picture])

    return (
        <div className="pictures-container">
            <Header title="Pictures" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                ...(getSelectedPictures && {data: generatePicturesSubTitle()}),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: router.query.with_picture,
                open,
                pictures: getSelectedPictures
            }}>
                <div className="pictures_body" ref={bodyRef} key={getSelectedPictures}>
                    <div>
                        <Input
                            events={['change']}
                            onChange={() => filterByPicture('1')}
                            className="checkbox-wrapper"
                            width={"calc(100% - 40px)"}
                            type="radio"
                            name="with-picture"
                            attr={{...(getSelectedPictures === '1' && {checked: true})}}
                            label={{title: "Yes", color: '#fff', forId: 'with-picture_yes'}}
                        />
                        <span>({pictures.is})</span>
                    </div>
                    <div>
                        <Input
                            events={['change']}
                            onChange={() => filterByPicture('0')}
                            className="checkbox-wrapper"
                            width={"calc(100% - 40px)"}
                            name="with-picture"
                            type="radio"
                            attr={{...(getSelectedPictures === '0' && {checked: true})}}
                            label={{title: "No", color: '#fff', forId: 'with-picture_no'}}
                        />
                        <span>({pictures.withOut})</span>
                    </div>

                </div>
            </Body>
        </div>
    )
}
Pictures.defaultProps = {};
Pictures.propTypes = {};
export default React.memo(Pictures);