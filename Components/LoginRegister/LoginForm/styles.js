import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'login-form': {
        '& > h5': {
            color: 'rgb(255, 255, 255)',
            marginBottom: '16px',
            fontSize: '16px',
            fontWeight: 'bold',
        },
        '& .forgot-your-pass': {
            fontSize: '14px',
            color: '#99c7e2',
            cursor: 'pointer',
        }
    },
})