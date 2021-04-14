import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'filters_body-container': {
        borderRadius: '0 0 2px 2px',
        backgroundColor: variables.$filters.$bodyBG,
        padding: '0 10px',
        ...MediaQuery.down({
            padding: '0 16px',
            backgroundColor: variables.$darkOpacity50,
        }).sm,
        '& > div > div': {
            padding: '16px 0',
        }
    }
})