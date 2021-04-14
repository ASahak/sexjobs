import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';

export default createUseStyles({
    'extend-slide-btns': {
        position: 'absolute',
        transform: 'translateY(-50%)',
        top: '50%',
        background: variables.$barColor,
        padding: '7px',
        fontSize: '17px',
        fontWeight: '900',
        color: '#fff',
        cursor: 'pointer',
        transition: '.4s',
        '@media (hover: hover)': {
            opacity: 0,
            visibility: 'hidden',
        },
        '&[disabled]': {
            background: 'rgb(17 36 69)',
            color: 'rgb(84 109 151)',
            cursor: 'default',
        }
    },
    'slider-container': {
        position: 'relative',
        overflow: 'hidden',
        '& > .sj-slider_prev-btn': {
            zIndex: 22,
            '@media (hover: hover)': {
                left: '-7px',
            },
            '@media (hover: none)': {
                left: '5px',
            },
            extend: 'extend-slide-btns',
        },
        '& > .sj-slider_next-btn': {
            zIndex: 22,
            '@media (hover: hover)': {
                right: '-7px',
            },
            '@media (hover: none)': {
                right: '5px',
            },
            extend: 'extend-slide-btns',
        },
        '&:hover': {
            '& > span.sj-slider_next-btn': {
                right: '5px',
            },
            '& > span.sj-slider_prev-btn': {
                left: '5px',
            },
            '& > span[class*=\"sj-slider_\"]': {
                opacity: 1,
                visibility: 'visible',
            },
        },
        '& .slider_badge_row': {
            width: '100%',
            height: '200px',
            display: 'flex',
            flexWrap: 'nowrap',
            transition: '.4s',
            transform: props => props.translateX,
            '& > img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                flexShrink: '0',
            }
        }
    }
})