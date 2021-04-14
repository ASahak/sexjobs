import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'main-wrapper_pop-category': {
        '& .simple-bar_title': {
            paddingRight: '70px !important',
            ...MediaQuery.down({
                paddingRight: '50px !important',
            }).sm,
        }
    },
    'popular-categories-container': {
        minHeight: '305px',
        ...MediaQuery.up({
            backgroundColor: variables.$barColor,
        }).sm,
        '& > a': {
            marginBottom: '16px',
            ...MediaQuery.down({
                display: 'flex',
                padding: '10px',
                alignItems: 'center',
                backgroundColor: variables.$barColor,
                '& .bottom-data': {
                    width: '60%',
                    '& h4, & p': {
                        textAlign: 'left',
                        justifyContent: 'flex-start',
                        whiteSpace: 'initial'
                    }
                },
                '& .image-wrapper': {
                    height: '110px',
                    width: '40%',
                },
            }).sm,
        }
    }
})