import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'balance-container': {
        '& h4': {
            ...TitleInsideMainContent(),
        }
    },
    'balance-wrapper': {
        padding: '20px',
        backgroundColor: variables.$blue_30,
        ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        borderRadius: '5px',
        '& > div': {
            paddingTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& h3': {
                ...TitleInsideMainContent({
                    fontSize: '24px',
                    marginBottom: '0',
                    marginLeft: '20px',
                }),
            },
            '& .icon-Credits': {
                color: variables.$iconColor,
                fontSize: '24px',
            }
        }
    },
})