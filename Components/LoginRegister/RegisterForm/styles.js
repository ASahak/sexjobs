import {createUseStyles} from 'react-jss';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';
import {CheckedIconBefore} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    'register-form': {
        '& > .form-fields': {
            '& .custom-toast-inline': {
                marginTop: '-15px',
            },
            '& .register-checkbox': {
                alignItems: 'flex-start',
                '& .input-element-wrapper': {
                    paddingTop: '4px',
                }
            },
        },
        '& .account-mandatory-points': {
            marginBottom: '20px',
            '& > h5': {
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
            },
            '& > .mandatory-wrapper': {
                display: 'flex',
                ...MediaQuery.down({
                    flexDirection: 'column',
                }).xss,
                '& > div': {
                    width: '50%',
                    paddingRight: '10px',
                    ...MediaQuery.down({
                        width: '100%',
                    }).xss,
                    '& > p': {
                        position: 'relative',
                        color: 'rgb(255, 255, 255)',
                        fontSize: '13px',
                        ...MediaQuery.up({
                            height: '40px',
                            overflow: 'hidden',
                        }).xss,
                        marginBottom: '10px',
                        paddingLeft: '30px',
                        ...CheckedIconBefore,
                    },
                },
            },
        },
    },
})