import {createUseStyles} from 'react-jss';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'account-view_container': {
        '& .account-vw_avatar': {
            width: '200px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            border: '1px solid #5F799A',
            borderRadius: '4px',
            ...MediaQuery.down({
                width: '100%',
                maxHeight: '250px',
                height: 'auto',
            }).sm,
            '& > img': {
                maxWidth: '100%',
            }
        },
        '& .account-form_fields': {
            '& div[class^=\"transparent-input-wrap\"] input': {
                color: '#F4F7FA'
            }
        }
    }
})