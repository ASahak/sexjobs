import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {SubTitleInsideMainContent, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';
import {MainContent} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    'update-plan-container': {
        ...MainContent,
    },
    'switcher-collapse': {
        display: 'flex',
    },
    'switcher-line': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '3px',
        '& > p': {
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '0',
        }
    },
    'switchers-wrapper': {
        '& > div': {
            borderBottom: '1px solid ' + variables.$darkBlueBorder,
            '&:last-child': {
                borderBottom: 'none',
            }
        },
    },
    'update-plan-section': {
        marginTop: '20px',
        '& > h4': {
            ...TitleInsideMainContent(),
        },
        '& > p': {
            ...SubTitleInsideMainContent(),
        },
    },
})