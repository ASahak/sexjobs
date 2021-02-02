import {createUseStyles} from 'react-jss'
import variables from 'static/styles/jss/variables';
import {MediaQuery} from 'static/styles/jss/mixins';

export default createUseStyles({
    '@global': {
        'header': {
            ...MediaQuery.up({
                position: 'fixed',
            }).md,
            top: '0',
            position: 'absolute',
            transition: '0.3s',
            zIndex: '999',
            left: '0',
            width: '100%',
            padding: '17px 0',
            background: 'linear-gradient(180deg, #0558A8 0%, #003F8F 100%)',
            borderBottom: `2px solid ${variables.$baseRed}`,
            '& .row': {
                alignItems: 'center',
            }
        }
    },
    'logo-wrapper': {
        '& img': {
            maxWidth: '170px',
        }
    },
})