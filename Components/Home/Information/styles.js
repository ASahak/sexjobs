import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'information-wrapper': {
        padding: '25px 0',
        '& .info-item': {
            '& > h4': {
                color: '#fff',
                fontSize: '18px',
                '& > span': {
                    marginRight: '10px',
                    fontSize: '16px'
                },
            },
            '& > p': {
                color: '#c3cbd5',
                fontSize: '14px',
                wordBreak: 'break-word',
                '& > a': {
                    color: '#fff',
                    margin: '0 5px',
                }
            }
        }
    }
})