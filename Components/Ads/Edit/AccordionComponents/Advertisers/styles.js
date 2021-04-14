import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'advertiser-container': {
        backgroundColor: variables.$blue_30,
        ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        padding: '10px',
        marginTop: '12px',
    },
    'advertiser-header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        fontWeight: '600',
        cursor: 'pointer',
        '& > div': {
            display: 'flex',
            alignItems: 'center',
        },
        '& p': {
            margin: '0 0 0 10px',
            fontSize: '13px',
        },
        '& span[class^=\"icon-Accordion\"]': {
            fontSize: '11px',
        }
    },
    'advertiser-body': {
        borderTop: '1px solid ' + variables.$darkBlueBorder,
        paddingTop: '10px',
        marginTop: '10px',
        position: 'relative',
        '& .icon-Edit': {
            position: 'absolute',
            right: '5px',
            top: '17px',
            fontSize: '14px',
            color: '#fff',
            cursor: 'pointer',
        },
        '& ul': {
            padding: '0',
            listStyleType: 'none',
            margin: '0',
            '& > li': {
                display: 'flex',
                fontSize: '14px',
                color: '#fff',
                margin: '5px 0',
                '& > span:first-child': {
                    display: 'inline-block',
                    width: '120px',
                },
                '& > span:last-child': {

                }
            }
        },
    },
})