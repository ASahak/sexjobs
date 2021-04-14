import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'make-profile-container': {
        '& form': {
            '& > p': {
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px',
                fontSize: '13px',
            },
            '& > h5': {
                color: 'rgb(255, 255, 255)',
                marginTop: '26px',
                marginBottom: '16px',
                fontWeight: 'bold',
                fontSize: '16px',
            },
            '& .bottom-actions': {
                display: 'flex'
            },
            '& .birth-date-wrapper': {
                display: 'flex'
            },
        }
    }
})