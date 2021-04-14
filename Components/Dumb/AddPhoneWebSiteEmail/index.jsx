import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Input, Select, SimpleDialog} from 'Components/Shared/UI';
import {
    VALIDATORS,
} from 'utils/constants';

const AddPhone = (props) => {
    const styles  = UseStyles({}, {link: true});
    const [toggleDialog, setToggleDialog] = useState(false);
    const [inputErrors, setInputErrors] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState(props.selectedItem);
    const [selectList, setSelectList] = useState([...props.defaultList.map(e => ({title: e, value: e}))]);


    const isThereAreAnError = useCallback((value) => {
        setInputValue(value)
    }, []);

    useEffect(() => {
        if (props.type === 'email') {
            setInputErrors(selectList.findIndex(e => e.value === inputValue) > -1 ? 'There is an item such value' :
                inputValue && !VALIDATORS.EMAIL_PATTERN.test(inputValue) ? 'Please write your email address in format: yourname@example.com' : '')
        } else if (props.type === 'website') {
            setInputErrors(selectList.findIndex(e => e.value === inputValue) > -1 ? 'There is an item such value' :
                inputValue && !VALIDATORS.WEBSITE_PATTERN.test(inputValue) ? 'Please write your website address in format: www.example.com' : '')
        } else {
            setInputErrors(selectList.findIndex(e => e.value === inputValue) > -1 ? 'There is an item such value' : '')
        }
    }, [inputValue, props.type])

    return (
        <>
            <div className={styles['add_pwe-container']}>
                <div className="input-field-wrapper">
                    <Select
                        onChange={v => setSelectedItem(v.target.value)}
                        margin={[0, 0, 16, 0]}
                        value={selectedItem}
                        options={selectList}
                        placeholder={props.placeholder}
                        size={'md'}
                        label={{title: props.inputLabel, color: '#fff'}}
                        helperText={props.helperText}
                        fullWidth={true}
                        rules={{}}
                    />
                    {props.infoRightTop ? <p>{props.infoRightTop}</p> : ''}
                </div>
                <span
                    className="icon-Add"
                    onClick={() => setToggleDialog(!toggleDialog)}
                ></span>
            </div>
            <SimpleDialog
                onClose={() => {
                    setInputValue('');
                    setToggleDialog(false);
                }}
                onOk={() => {
                    setSelectList(prevState => ([...prevState, {title: inputValue, value: inputValue}]));
                    setInputValue('');
                    setToggleDialog(false);
                }}
                actions={{
                    ok: 'Save',
                    cancel: 'Cancel',
                }}
                disableOkBtn={!inputValue || !!inputErrors}
                minWidth={350}
                open={toggleDialog}
                title={props.titleDialog}>
                <Input
                    errors={inputErrors}
                    events={['keyup']}
                    onKeyup={(evt) => isThereAreAnError(evt.target.value)}
                    type={props.type === 'phone' ? 'number' : props.type === 'email' ? 'email' : 'text'}
                    fullWidth={true}
                    margin={[0, 0, 16]}
                    placeholder={props.type === 'phone' ? '+31 612345678' : props.type === 'email' ? 'yourname@example.com' : 'www.example.com'}
                    likeMaterialInput={true}
                />
            </SimpleDialog>
        </>
    )
}
AddPhone.defaultProps = {
    defaultList: [],
    selectedItem: null,
}
AddPhone.propTypes = {
    titleDialog: PropTypes.string.isRequired,
    inputLabel: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['email', 'phone', 'website']),
    defaultList: PropTypes.array,
    selectedItem: PropTypes.string,
    helperText: PropTypes.string,
    infoRightTop: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
};
export default React.memo(AddPhone);