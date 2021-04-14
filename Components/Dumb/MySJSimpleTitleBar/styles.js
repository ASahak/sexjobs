import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'extend_title-style': {
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    'simple-bar-container': {
        border: '1px solid #003271',
        backgroundColor: variables.$barColor,
        height: '48px',
        marginBottom: '16px',
        '& .simple-bar_title': {
            height: '100%',
            padding: '0 30px',
            display: 'flex',
            alignItems: 'center',
            ...MediaQuery.down({
                padding: '0 16px',
            }).sm,
            '& .back-to_icon': {
                marginRight: '10px',
                color: '#fff',
                fontSize: '18px',
                cursor: 'pointer',
            },
            '& > a': {
                extend: 'extend_title-style',
            },
            '& > div': {
                display: 'flex',
                margin: '0',
                fontSize: '16px',
                alignItems: 'center',
                '& > a': {
                    extend: 'extend_title-style',
                },
                '& > p': {
                    color: '#fff',
                    marginBottom: 0,
                    fontSize: '14px',
                    '& > span': {
                        marginRight: '10px'
                    },
                    '&::before': {
                        content: '"|"',
                        position: 'relative',
                        top: '-1px',
                        margin: '0 10px'
                    }
                }
            },
            '& > h4': {
                extend: 'extend_title-style',
            }
        }
    }
})
