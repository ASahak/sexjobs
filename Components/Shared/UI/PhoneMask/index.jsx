import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import InputMask from 'react-input-mask';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {COUNTRY_CODES} from 'utils/constants';

const defaultCode = COUNTRY_CODES.find(e => e.key === 'nl');
const Phone = (props) => {
    const styles = UseStyles({
        border:  'none',
    }, {link: true});
    const [value, setValue] = useState();
    const [country, setCountry] = useState(defaultCode || {});
    console.log(country);

    return (
        <div className={styles['phone--block']}>
            <InputMask
                className={`phone-mask--block input-${props.size}`}
                value={value}
                mask={country.phoneCode}
                // onChange={inputMaskChange}
                disabled={false}
                onFocus={() => console.log(1)}
                maskChar=""
            />
            <svg className="arrow-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 10l5 5 5-5z"></path>
            </svg>
        </div>
    )
}
        // {/*    {() => <TextField*/}
        // {/*        InputProps={{*/}
        // {/*            // disabled:props.disabled,*/}
        // {/*            // startAdornment: (*/}
        // {/*            //     <InputAdornment position="start">*/}
        // {/*            //         <span className="icon-clock"></span>*/}
        // {/*            //     </InputAdornment>*/}
        // {/*            // ),*/}
        // {/*            // endAdornment: (props.slideByArrows ? <InputAdornment position="end">*/}
        // {/*            //     {arrows}*/}
        // {/*            // </InputAdornment> : null),*/}
        // {/*        }} variant="filled" focused={false} placeholder={props.placeholder}/>}*/}
        // {/*</InputMask>*/}
Phone.defaultProps = {
    size: 'md',
    likeMaterialInput: false,
};
Phone.propTypes = {
    size: PropTypes.string,
    likeMaterialInput: PropTypes.bool,
}
export default React.memo(Phone);
