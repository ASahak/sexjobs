import {createUseStyles} from 'react-jss';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'main-suggested-wrapper': {
        marginBottom: '6px',
        '& .simple-bar_title': {
            paddingRight: '70px !important',
            ...MediaQuery.down({
                paddingRight: '50px !important',
            }).sm,
        }
    },
    'suggested-container': {
        minHeight: '375px',
    }
})