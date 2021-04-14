import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'filters_header-title': {
        borderRadius: props => props.radius,
        backgroundColor: variables.$filters.$headerBG,
        display: 'flex',
        alignItems: 'center',
        padding: '13px 10px',
        justifyContent: 'space-between',
        cursor: 'pointer',
        ...MediaQuery.down({
            borderLeft: '3px solid transparent',
            backgroundColor: variables.$darkOpacity50,
            borderTop: '1px solid ' + variables.$filters.$headerBG,
        }).sm,
        '& > h5': {
            color: '#FFFFFF',
            fontSize: '13px',
            fontWeight: 'bold',
            margin: '0',
            transition: '.4s',
            position: 'relative',
            width: 'calc(100% - 40px)',
            '& > p': {
                width: '100%',
                marginTop: '3px',
                position: 'absolute',
                fontSize: '11px',
                color: '#C3CBD5',
                margin: '0',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            ...MediaQuery.down({
                '&.with-mobile-data': {
                    paddingBottom: '10px',
                },
            }).sm,
            ...MediaQuery.up({
                '& > p': {
                    display: 'none'
                }
            }).sm,
        },
        '& > span.icon_header': {
            color: '#C3CBD5',
            fontWeight: 900,
            fontSize: '14px',
            cursor: 'pointer',
        },
        '& > span.toggle-body-icon': {
            color: '#C3CBD5',
            fontWeight: 900,
            fontSize: '14px',
            transform: 'rotate(0deg)',
            transformOrigin: 'center',
            transition: '.4s',
            '-webkit-perspective': '1000',
            '-webkit-backface-visibility': 'hidden',
        },
        '&.has-data_header:not(.body-opened-header)': {
            ...MediaQuery.down({
                borderLeft: '3px solid #B0F2F1',
            }).sm,
        },
        '&.body-opened-header': {
            '& > h5': {
                '&.with-mobile-data': {
                    paddingBottom: '0px',
                },
                '& > p': {
                    display: 'none',
                }
            },
            '& > span.toggle-body-icon': {
                transform: 'rotate(-180deg)',
            }
        }
    }
})