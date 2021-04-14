import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow, SubTitleInsideMainContent, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';
import {FlexInputsWrapper} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    // Ad Costs Styles
    'panel-section_title': {
        padding: '10px 16px',
        borderBottom: '2px solid ' + variables.$barColor,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > h4, & .like-title-of_section label': {
            ...TitleInsideMainContent(),
            marginBottom: '0',
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
    'panel-section_body': {
        padding: '16px',
        '& .title-content_for-flex-inputs': {
            ...TitleInsideMainContent({
                fontSize: '13px',
                marginBottom: '7px',
            }),
        },
        '& p': {
            ...SubTitleInsideMainContent({
                color: variables.$helperTextColor,
            }),
        },
        '& .sticker-wrapper_pro': {
            position: 'relative',
            '& > span': {
                position: 'absolute',
                right: '0',
                top: '-2px',
                fontSize: '12px',
                padding: '1px 5px',
                display: 'block',
                backgroundColor: '#000',
                color: 'yellow',
                borderRadius: '4px',
                textTransform: 'uppercase'
            }
        }
    },
    'total_footer': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 0 5px',
        borderTop: '1px solid ' + variables.$barColor,
        '& > h4, & > span': {
            ...TitleInsideMainContent({
                marginBottom: '0',
            }),
        },
    },
    'panel-section': {
        marginTop: '16px',
        backgroundColor: variables.$blue_30,
        ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        '&.checked-section': {
            ...Shadow('0px 0px 1px 1px ' + variables.$input.$checkbox.$onDarkBG),
        }
    },
})