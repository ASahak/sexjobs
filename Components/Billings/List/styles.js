import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow, SubTitleInsideMainContent, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'billing-list-container': {
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
        '& .billing-item-container': {
            '& .billing-date-wrapper': {
                ...SubTitleInsideMainContent({
                    fontSize: '14px',
                }),
                paddingBottom: '5px',
                borderBottom: '2px solid #DFE4EF',
            },
            '& .main-list-item': {
                padding: '20px',
                backgroundColor: variables.$blue_30,
                ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
                margin: '16px 0 20px',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '& .list-title-side': {
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
                '& .list-price-side': {
                    display: 'flex',
                    '& b': {
                        ...SubTitleInsideMainContent(),
                    },
                    '& > div': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: '10px',
                        paddingLeft: '10px',
                        borderLeft: '1px solid ' + variables.$barColor,
                        color: variables.$iconColor,
                        fontSize: '11px',
                        '& .icon-Document': {
                            fontSize: '22px',
                            marginBottom: '5px'
                        }
                    }
                },
            }
        },
    },
    '@global': {
        '.billing-popover-options': {
            fontSize: '14px',
            '& p': {
                marginBottom: '0',
                cursor: 'pointer',
                '& .icon-Download': {
                    color: variables.$iconColor,
                    fontSize: '14px',
                    padding: '3px',
                    display: 'inline-block',
                    border: '2px solid ' + variables.$iconColor,
                    borderRadius: '3px',
                    marginRight: '10px',
                }
            },
            '& .filters-billing': {
                '& h4': {
                    ...TitleInsideMainContent({
                        color: '#000'
                    }),
                },
                '& > ul': {
                    padding: '0',
                    listStyleType: 'none',
                },
                '& > a': {
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'block',
                    textAlign: 'right',
                },
                '& > p': {
                    fontWeight: '600',
                    marginBottom: '8px',
                    fontSize: '14px',
                },
            },
        }
    }
})