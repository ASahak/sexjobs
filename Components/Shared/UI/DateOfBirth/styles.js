import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'date-of-birth-container': {
        width: '100%',
        '& .like-filed-label': {
            color: 'rgb(255, 255, 255)',
            marginBottom: '0px',
            paddingBottom: '7px',
            fontWeight: 'bold',
            fontSize: '13px',
        },
        '& .wrapper-fields': {
            display: 'flex',
        }
    },
})