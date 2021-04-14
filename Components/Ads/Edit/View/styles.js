import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';

export default createUseStyles({
    'main-edit-container': {
        '& > div': {
            marginBottom: '16px',
        }
    },
    'collapse-header': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        background: variables.$barColor,
        alignItems: 'center',
        color: '#fff',
        fontWeight: '600',
        cursor: 'pointer',
        '& > p': {
            margin: '0',
        }
    },
})