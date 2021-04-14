import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'crop-container': {
        height: '400px',
        width: '400px',
        position: 'relative',
    },
    'rotate-wrapper': {
        '& > div': {
            marginBottom: '10px',
            '& > span': {
                margin: '0 5px',
                cursor: 'pointer',
                '&:first-child': {
                    marginLeft: 0
                }
            }
        },
        '& > p': {
            marginBottom: '10px',
            fontSize: '13px'
        }
    },
})