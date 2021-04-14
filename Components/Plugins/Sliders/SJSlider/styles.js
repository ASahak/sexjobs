import {createUseStyles} from 'react-jss';
import {MediaQuery, Shadow} from 'static/styles/jss/abstracts/mixins';
import variables from 'static/styles/jss/abstracts/variables';

export default createUseStyles({
    'extend-slide-btns': {
        position: 'absolute',
        fontSize: '20px',
        fontWeight: '900',
        color: '#fff',
        cursor: 'pointer',
        top: '0',
        bottom: '0',
        margin: 'auto',
        height: '20px',
        width: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
            zIndex: '222',
            position: 'absolute',
            fontSize: '14px',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            transformOrigin: 'center',
            width: '30px',
            height: '30px',
            backgroundColor: variables.$darkOpacity50,
            ...Shadow('0 2px 4px 0 rgb(0 0 0 / 30%)'),
            borderRadius: '50%',
        },
        '&[disabled]': {
            display: 'none',
        }
    },
    'sj_slider-container': {
        position: 'relative',
        padding: props => props.containerPadding,
        '& > .sj-slider_prev-btn': {
            zIndex: 22,
            left: '-7px',
            extend: 'extend-slide-btns',
            ...MediaQuery.down({

            }).sm,
        },
        '& > .sj-slider_next-btn': {
            zIndex: 22,
            right: '-7px',
            extend: 'extend-slide-btns',
            ...MediaQuery.down({
            }).sm,
        },
        '& .sj-slider-row': {
            overflow: 'hidden',
            '& > div': {
                display: 'flex',
                flexWrap: 'nowrap',
                transition: props => props.transition,
                transform: props => props.translateX,
            },
            '& .sj-slider-slide': {
                width: props => props.elementsWidth,
                padding: '0',
                marginRight: props => props.marginRight,
                flexShrink: '0',
            }
        }
    }
}, {link: false})