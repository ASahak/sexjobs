import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {SubTitleInsideMainContent, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'ad-details-list': {
        borderBottom: '2px solid ' + variables.$helperTextColor,
    },
    'ad-details-panel': {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '10px',
        '& > div:last-child': {
            marginLeft: '10px',
        },
        '& h4': {
            ...TitleInsideMainContent({
                marginBottom: '0',
            }),
        },
        '& p': {
            ...SubTitleInsideMainContent({
                marginBottom: '0',
            }),
        },
    },
})