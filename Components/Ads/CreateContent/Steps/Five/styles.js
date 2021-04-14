import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {TitleInsideMainContent, SubTitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'panel-section-wrapper': {
        '& > h4': {
            ...TitleInsideMainContent(),
        },
        '& > p': {
            ...SubTitleInsideMainContent(),
        },
    },
    'panel-section_title--paid-value': {
        '& > p': {
            color: variables.$helperTextColor,
            margin: '0',
            fontSize: '12px',
            textAlign: 'right',
            '&:first-child': {
                fontWeight: 'bold',
            }
        }
    },
})