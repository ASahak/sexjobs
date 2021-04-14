import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';

export default createUseStyles({
    'payment-methods-container': {
        marginTop: '30px',
    },
    'methods-list-wrapper': {
        backgroundColor: '#fff',
        '& ul': {
            listStyleType: 'none',
            padding: '1px 15px',
            '& li': {
                fontSize: '14px',
                cursor: 'pointer',
                padding: '20px 0',
                borderBottom: '1px solid #ccc',
                '&:last-child': {
                    borderBottom: 'none',
                },
                '& img': {
                    margin: '0 10px',
                    maxWidth: '40px'
                },
                '&.methods-list-item--disable': {
                    cursor: 'inherit',
                    color: variables.$iconColor,
                    paddingLeft: '60px',
                    position: 'relative',
                    '& span': {
                        position: 'absolute',
                        left: '0',
                        margin: '0 10px',
                        width: '40px',
                        display: 'inline-block',
                        fontSize: '24px',
                    }
                }
            }
        },
    },
})