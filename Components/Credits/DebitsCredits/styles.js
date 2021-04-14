import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow, TitleInsideMainContent, SubTitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'credits-list-container': {
        '& .year-title': {
            display: 'block',
            backgroundColor: variables.$barColor,
            padding: '7px 15px',
            color: '#fff',
            fontWeight: '600',
            margin: '0 auto 15px',
            width: '70px',
            textAlign: 'center',
            borderRadius: '5px',
        },
        '& .credits-item-container': {
            '& .credits-date-wrapper': {
                ...SubTitleInsideMainContent({
                    fontSize: '14px',
                }),
                paddingBottom: '5px',
                borderBottom: '2px solid #DFE4EF',
            },
            '& .main-list-item': {
                padding: '10px 20px',
                backgroundColor: variables.$blue_30,
                ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
                margin: '16px 0 20px',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '& .list-title-side': {
                    width: 'calc(100% - 60px)',
                    '& > div': {
                        padding: '10px 0',
                        borderBottom: '1px solid ' + variables.$barColor,
                        '&:last-child': {
                            borderBottom: 'none'
                        }
                    },
                    '& p': {
                        ...SubTitleInsideMainContent({
                            marginBottom: '0px'
                        }),
                    },
                    '& h4': {
                        ...TitleInsideMainContent({
                            marginBottom: '5px'
                        }),
                    },
                },
                '& .list-count-stocks-side': {
                    '& > span': {
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#fff',
                        borderRadius: '5px',
                        '&.negative': {
                            border: '2px solid #fff',
                        },
                        '&.positive': {
                            background: variables.$button.$cta.$bg,
                        },
                    }
                },
            }
        },
    },
})