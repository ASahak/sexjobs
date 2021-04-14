import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';

export default createUseStyles({
    'inline-notification-container': {
        padding: '6px 10px',
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '16px',
        '&.notification-info': {
            border: '3px solid ' + variables.$bgInfo,
            backgroundColor: variables.$bgInfo50,
            '& .notification-label-content': {
                '& > h5, & > p': {
                    color: '#1b519c !important',
                },
            }
        },
        '&.notification-warning': {
            border: '3px solid ' + variables.$bgWarning,
            backgroundColor: variables.$bgWarning50,
            '& .notification-label-content': {
                '& > h5, & > p': {
                    color: '#575656 !important',
                },
            },
        },
        '&.notification-error': {
            border: '3px solid ' + variables.$bgError,
            backgroundColor: variables.$bgError50,
            '& .notification-label-content': {
                '& > h5, & > p': {
                    color: '#4a4a4a !important',
                },
            },
        },
        '&.notification-success': {
            border: '3px solid ' + variables.$bgSuccess,
            backgroundColor: variables.$bgSuccess50,
            '& .notification-label-content': {
                '& > h5, & > p': {
                    color: '#4a4a4a !important',
                },
            },
        },
        '& .notification-label-content': {
            paddingLeft: '16px',
            paddingTop: '8px',
            '& > h5': {
                color: '#fff',
                fontSize: '14px',
                fontWeight: 'bold',
                marginTop: '0'
            },
            '& > p': {
                marginTop: '10px',
                marginBottom: '5px',
                color: '#fff',
                fontSize: '14px',
            }
        }
    }
})