import {createUseStyles} from 'react-jss';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'place-an-ad': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 0',
        borderTop: '2px solid #0F3271',
        borderBottom: '2px solid #0F3271',
        marginBottom: '16px',
        '& > div': {
            display: 'flex',
            alignItems: 'center',
        },
        ...MediaQuery.down({
            border: 'none',
            '& > div': {
                display: 'none',
            },
        }).sm,
        '& .place-an-ad_btn': {
            ...MediaQuery.down({
                width: '100% !important',
            }).sm,
        },
    }
})