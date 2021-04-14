import {createUseStyles} from 'react-jss'
import variables from 'static/styles/jss/abstracts/variables';

export default createUseStyles({
    'phone--block': {
        position: 'relative',
        '& .phone-mask--block': {
            fontFamily: 'Arial',
            boxSizing: 'border-box',
            width: '100%',
            position: 'relative',
            borderRadius: variables.$input.$radius,
            zIndex: 2,
            display: 'flex',
            transitionProperty: 'margin-bottom, box-shadow',
            backgroundColor: props => props.backgroundColor,
            border: props => props.border,
            lineHeight: 'inherit',
            paddingLeft: '50px !important',
            '&:hover': {
                ...variables.$input.$hover,
            },
            '&:focus': {
                ...variables.$input.$focus,
            },
            '&::-webkit-input-placeholder': {
                color: variables.$input.$placeholderColor
            },
            '&:read-only': {
                backgroundColor: variables.$input.$readOnly,
                pointerEvents: 'none',
                color: variables.$input.$readOnlyColor + ' !important'
            },
            '&.input-md': {
                padding: variables.$input.$md.$padding,
                fontSize: variables.$input.$md.$fontSize + 'px',
            },
            '&.input-sm': {
                fontSize: variables.$input.$sm.$fontSize + 'px',
                padding: variables.$input.$sm.$padding,
            },
            '&.input-xsm': {
                padding: variables.$input.$xsm.$padding,
                fontSize: variables.$input.$xsm.$fontSize + 'px',
            },
        },
        '& .arrow-icon': {
            width: '30px',
            position: 'absolute',
            right: '0',
            height: '30px',
            bottom: '0',
            top: '0',
            margin: 'auto',
            zIndex: '22',
            cursor: 'pointer',
        }
    }
})