import {createUseStyles} from 'react-jss';
import {SubTitleInsideMainContent, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'pictures-container': {
        padding: '20px 0 10px',
        '& > h4': {
            ...TitleInsideMainContent(),
        },
        '& > p': {
            ...SubTitleInsideMainContent({
                marginBottom: '0'
            }),
        },
    }
})