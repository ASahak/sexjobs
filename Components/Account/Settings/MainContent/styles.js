import {createUseStyles} from 'react-jss';
import {MediaQuery, Shadow, TitleInsideMainContent, SubTitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';
import variables from 'static/styles/jss/abstracts/variables';
import {MainContent} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    'main-content-settings': {
        ...MainContent,
        '& > div': {
            marginBottom: '30px',
            '&:last-child': {
                marginBottom: '10px',
            },
            '& .main-btn-of-content': {
                ...MediaQuery.down({
                    width: '100% !important'
                }).sm,
            }
        },
        '& p': {
            ...SubTitleInsideMainContent(),
        },
        '& h4': {
            ...TitleInsideMainContent(),
        },
        '& .title-content': {
            '&.title-and-edit': {
                display: 'flex',
                justifyContent: 'space-between',
                '& > label': {
                    cursor: 'pointer',
                    color: variables.$helperTextColor,
                    fontSize: '14px',
                    fontWeight: '400',
                    '& > span': {
                        marginLeft: '10px',
                    }
                },
            }
        },
        '& .sub_title-content': {
            ...SubTitleInsideMainContent({
                fontWeight: 600,
            }),
        },
        '& .paragraph-content': {
            ...SubTitleInsideMainContent(),
        },
    }
});