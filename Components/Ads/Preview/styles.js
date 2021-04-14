import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery, Shadow, SubTitleInsideMainContent, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'advertisement-preview': {
        '& p': {
            ...SubTitleInsideMainContent(),
        },
        '& .content-with-shadow': {
            borderRadius: '4px',
            minHeight: '100%',
            marginBottom: '25px',
            padding: '20px',
            backgroundColor: variables.$blue_30,
            '& h4': {
                ...TitleInsideMainContent(),
            },
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        },
        '& .advert-info-container': {
            '& > div': {
                borderBottom: '1px solid #16448B',
                marginBottom: '10px',
                '&:last-child': {
                    borderBottom: '0'
                },
                '& p': {
                    display: 'flex',
                    '& > span': {
                        '&:first-child': {
                            minWidth: '120px',
                            color: variables.$helperTextColor,
                        },
                        '&:last-child': {
                            '&.badge-label_in-view': {
                                backgroundColor: '#154287',
                                padding: '2px 5px',
                                borderRadius: '3px',
                                marginRight: '8px',
                            },
                        },
                    }
                }
            }
        }
    },
    'users-wrapper': {
        width: '50%',
        marginLeft: '10px',
        marginBottom: '25px',
        ...MediaQuery.down({
            marginBottom: '0px',
        }).sm,
        '& p': {
            color: variables.$helperTextColor,
            '& a': {
                marginLeft: '7px',
                color: '#fff',
                textDecoration: 'underline !important',
            },
            '& span': {
                marginRight: '7px',
            }
        },
    },
    'image-wrapper': {
        width: '50%',
        marginBottom: '25px',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    },
    'image-users-container': {
        display: 'flex',
        ...MediaQuery.down({
            flexDirection: 'column',
            '& > div': {
                width: '100%',
                marginLeft: '0px',
            }
        }).sm,
    },
    'advertisers-list': {
        padding: '0',
        '& li': {
            cursor: 'pointer',
            padding: '7px 0',
            position: 'relative',
            paddingRight: '15px',
            display: 'flex',
            alignItems: 'center',
            color: variables.$helperTextColor,
            borderTop: '1px solid #16448B',
            '&:last-child': {
                borderBottom: '1px solid #16448B',
            },
            '& > span': {
                fontSize: '13px',
                marginLeft: '10px'
            },
            '& span[class^=icon-]': {
                position: 'absolute',
                right: '5px',
                fontSize: '13px'
            }
        }
    }
})