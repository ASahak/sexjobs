import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'upgrade-list-container': {
        marginTop: '20px',
        '& h4': {
            ...TitleInsideMainContent(),
        },
        '& .credit-wrapper': {
            backgroundColor: variables.$blue_30,
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
            marginBottom: '20px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            '& .left-side_crd': {
                padding: '20px',
                width: 'calc(100% - 60px)',
                '& h4': {
                    marginBottom: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& span': {
                        fontSize: '14px',
                    }
                },
                '& p': {
                    color: variables.$helperTextColor,
                    fontSize: '14px',
                    margin: '0',
                }
            },
            '& .right-side_crd': {
                padding: '20px',
                borderLeft: '1px solid ' + variables.$barColor,
                display: 'flex',
                alignItems: 'center',
                '& button': {
                    height: '40px',
                    width: '40px',
                    '& .icon-Add': {
                        fontSize: '20px',
                        margin: '0',
                    }
                }
            },
        }
    },
})