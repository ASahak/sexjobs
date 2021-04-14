import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery, Shadow} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'tabs-container': {
        marginBottom: '16px',
        ...MediaQuery.down({
            '&.with-mobile-shadow': {
                ...Shadow('0 2px 4px 0 rgba(0,0,0,0.5)'),
            },
            marginTop: props => props.marginTopMobile,
        }).sm,
        overflow: 'hidden',
        '& .tab-row': {
            display: 'flex',
            width: 'fit-content',
            position: 'relative',
            backgroundColor: variables.$barColor,
            transition: '.3s',
            transform: props => `translateX(${props.rowTranslateX}px)`,
            '&::after': {
                transition: props => props.transition,
                content: '""',
                position: 'absolute',
                bottom: 0,
                height: '2px',
                width: props => props.underlineWidth,
                left: props => props.underlineLeft,
                background: '#B0F2F1',
            },
            '& > div': {
                minWidth: props => props.minWidth,
                width: props => props.underlineWidth,
                transition: 'background .3s',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                padding: '16px 14px',
                color: 'rgba(255, 255, 255, .6)',
                fontSize: '11px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textAlign: 'center',
                cursor: 'pointer',
                '&.active-tab': {
                    color: '#B0F2F1',
                    backgroundColor: '#072955',
                }
            }
        }
    },
})