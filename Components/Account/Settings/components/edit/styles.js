import {createUseStyles} from 'react-jss';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'deleted-account-container': {},
    'delete-account-container': {
        '& .actions-delete': {
            display: 'flex',
            flexWrap: 'wrap',
        }
    },
    'change-password-container': {},
    'forgot-password-container': {},
    'forgot-password_btn': {
        color: '#fff',
        fontSize: '13px',
        cursor: 'pointer',
        marginTop: '20px',
        textDecoration: 'underline !important',
        display: 'block',
        '&:hover': {
            color: '#fff',
        },
        ...MediaQuery.down({
            textAlign: 'center',
        }).sm,
    },
})