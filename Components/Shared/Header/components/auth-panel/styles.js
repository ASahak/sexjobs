import {createUseStyles} from 'react-jss'
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';
import {IconActiveState} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    'count_extend': {
        position: 'absolute',
        top: '-9px',
        right: '-9px',
        background: variables.$baseRed,
        fontSize: '10px',
        lineHeight: '13px',
        width: '15px',
        height: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '2px',
    },
    'icons_extend': {
        display: 'inline-flex',
        marginRight: '20px',
        color: '#fff',
        position: 'relative',
        cursor: 'pointer',
        fontSize: '20px',
    },
    '@global': {
        '.language-dropdown_popover': {
            padding: 0,
            listStyleType: 'none',
            margin: 0,
            '& > li': {
                padding: '7px 10px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontSize: '13px',
                '&.active-language': {
                    backgroundColor: '#3378d1',
                    color: '#fff',
                    fontWeight: '600',
                    '& img': {
                        borderColor: '#fff'
                    }
                },
                '& img': {
                    marginRight: '10px',
                    width: '22px',
                    height: '22px',
                    objectFit: 'cover',
                    border: '2px solid #ccc',
                    borderRadius: '50%',
                }
            }
        },
        '.see-all-notifications_popover': {
            color: '#3378D1',
            fontSize: '13px',
            fontWeight: 600,
            padding: '13px',
            display: 'block',
            textAlign: 'center',
            borderTop: '1px solid ' + variables.$helperTextColor,
        },
    },
    'auth-wrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& .count--block': {
            extend: 'count_extend',
        },
        '& .avatar-wrapper': {
            '& img': {
                cursor: 'pointer',
                width: '36px',
                height: '36px',
                objectFit: 'cover',
                borderRadius: '50%',
            },
            ...MediaQuery.up({
                '& .external-binding-menu': {
                    display: 'none',
                },
                '& .user-menu-mobile': {
                    display: 'none',
                }
            }).sm,
            ...MediaQuery.down({
                '& .user-menu-mobile': {
                    position: 'fixed',
                    right: '-250px',
                    top: '0',
                    height: '100vh',
                    transition: '.4s',
                    '& > img': {
                        position: 'absolute',
                        zIndex: '2',
                        right: '10px',
                        top: '17px',
                    },
                    '& .external-binding-menu': {
                        height: '100%',
                        backgroundColor: '#fff',
                        '& .side-bar-dialog': {
                            width: '250px',
                            '& > h4': {
                                padding: '26px 10px 26px 20px',
                                borderBottom: '1px solid #003271',
                                backgroundColor: '#003271',
                                color: '#fff',
                            }
                        }
                    }
                },
                '&.menu-opened': {
                    '& .user-menu-mobile': {
                        right: '0px',
                        '&::after': {
                            position: 'fixed',
                            content: '""',
                            left: '0',
                            top: '0',
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            zIndex: '-1',
                        }
                    },
                },
            }).sm,
        },
        '& .cart-wrapper': {
            extend: 'icons_extend',
            ...MediaQuery.down({
                display: 'none',
            }).xss,
        },
        '& .messages-wrapper': {
            extend: 'icons_extend',
            ...MediaQuery.down({
                display: 'none',
            }).xss,
        },
        '& .notifications-wrapper': {
            extend: 'icons_extend',
            '&[data-icon-active]:hover, &[data-icon-active=\"true\"]': {
                ...IconActiveState,
            },
        },
        '& .user-question': {
            color: '#FFFFFF',
            fontSize: '13px',
            marginRight: '20px',
            ...MediaQuery.down({
                fontSize: '12px',
            }).sm,
            ...MediaQuery.down({
                display: 'none',
            }).xss,
        },
        '& .language-wrap': {
            margin: '0 20px 0 0',
            display: 'flex',
            '& img': {
                cursor: 'pointer',
                width: '22px',
                height: '22px',
                objectFit: 'cover',
                border: '2px solid #fff',
                borderRadius: '50%',
            },
            '&[data-icon-active]:hover, &[data-icon-active=\"true\"]': {
                ...IconActiveState,
            }
        },
        '& .user_icon': {
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            '& span': {
                fontSize: '20px',
            }
        },
        '& .ads-button': {
            marginLeft: '20px !important',
            ...MediaQuery.down({
                '&[data-appear=\"true\"]': {
                    display: 'none',
                },
            }).sm,
            ...MediaQuery.between({
                paddingLeft: '10px',
                paddingRight: '10px',
            }).md_lg,
            '& > i': {
                fontSize: '9px',
            }
        }
    },
})