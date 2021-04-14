import {createUseStyles} from 'react-jss'
import variables from 'static/styles/jss/abstracts/variables';

export default createUseStyles({
    'bottom-wrap': {
        lineHeight: '14px',
        position: 'absolute',
        bottom: '0px',
        fontSize: '11px',
        color: variables.$helperTextColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        '& .helper-text': {
            margin: '0px'
        },
    },
    'error-line': {
        fontFamily: 'Arial',
        position: 'absolute',
        left: '0',
        bottom: '0px',
        display: 'inline-block',
        transition: 'all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fontSize: '11px',
        lineHeight: '14px',
        color: variables.$danger,
        width: '100%',
    },
})