import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery, Shadow} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    '@global': {
        '.chat-menu-popover': {
            marginTop: '13px',
            marginLeft: '10px',
            '& .overflow-menu': {
                display: 'flex',
                flexDirection: 'column',
                '& > p': {
                    padding: '8px 10px',
                    fontSize: '13px',
                    color: '#020202',
                    cursor: 'pointer',
                    lineHeight: '13px',
                    margin: '0',
                    '&:first-child': {
                        marginTop: '5px',
                    },
                    '&:last-child': {
                        marginBottom: '5px',
                    },
                }
            }
        },
        '.overflow-menu-popover': {
            marginTop: '13px',
            marginLeft: '10px',
            padding: '10px',
            '& ul': {
                padding: '0',
                listStyleType: 'none',
                margin: '0',
            },
            '& .overflow-menu': {
                display: 'flex',
                flexDirection: 'column',
                '& .filters-popover_ads': {
                    padding: '10px',
                    '& > p': {
                        fontWeight: '600',
                        marginBottom: '8px',
                        fontSize: '14px',
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
                    }
                },
                '& > span': {
                    padding: '8px 10px',
                    fontSize: '13px',
                    color: '#020202',
                    cursor: 'pointer',
                    lineHeight: '13px',
                    fontFamily: 'inherit !important',
                    '& > a': {
                        color: '#020202',
                    },
                    '&:first-child': {
                        marginTop: '5px',
                    },
                    '&:last-child': {
                        marginBottom: '5px',
                    },
                    '&::before': {
                        display: 'none',
                    },
                    '& > figure': {
                        display: 'block',
                        marginBottom: '0',
                    },
                }
            }
        }
    },
    'main-bar': {
        position: 'relative',
        border: '1px solid #003271',
        backgroundColor: variables.$barColor,
        padding: props => props.paddingWrapper,
        height: '60px',
        marginBottom: '15px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&.with-mobile-shadow': {
            ...MediaQuery.down({
                ...Shadow('0 2px 4px 0 rgba(0,0,0,0.5)'),
            }).sm,
        },
        '&.like-dialog-sj-bar': {
            '& .save-btn': {
                textTransform: 'uppercase',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: 'bold',
            }
        },
        '& .search-wrap': {
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            display: 'none',
            '&.search-wrap_open': {
                display: 'flex',
                position: 'absolute',
                left: '0',
                width: '100%',
                padding: '0 30px',
                background: variables.$barColor,
                zIndex: '2222',
                ...MediaQuery.down({
                    padding: '0 16px',
                }).sm,
            },
            '& > span': {
                fontSize: '22px',
                cursor: 'pointer',
            },
            '& form': {
                flex: '1',
                paddingLeft: '16px',
            }
        },
        '&.not-overflow-bar': {
            '& .main-bar_title': {
                flex: '1',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                maxWidth: '100% !important',
            }
        },
        '&.completable-sj-bar': {
            '& .main-bar_title': {
                maxWidth: props => props.titleMinusWidth
            }
        },
        '& .right-options-bar': {
            '& .options-container': {
                display: 'flex',
                alignItems: 'center',
                '& > span': {
                    color: '#fff',
                    fontSize: props => props.fontSize,
                    '& > figure': {
                        display: 'none',
                        marginBottom: '0',
                    },
                    '&::before': {
                        position: 'relative',
                        zIndex: '222',
                    },
                    '&.active-icon': {
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            width: 'calc(100% + 16px)',
                            height: 'calc(100% + 16px)',
                            background: '#0B0E2A',
                            zIndex: '1',
                            borderRadius: '50%',
                        }
                    },
                    display: 'block',
                    cursor: 'pointer',
                    margin: '0',
                    marginLeft: props => props.iconMargin,
                    '&:first-child': {
                        margin: '0'
                    },
                }
            }
        },
        '& .main-bar_title': {
            // maxWidth: 'calc(100% - 140px)',
            display: 'flex',
            alignItems: 'center',
            '& .personal-wrapper': {
                alignItems: 'center',
                display: 'flex',
                width: 'calc(100% - 30px)',
                '& .image-wrapper': {
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    '& img': {
                        width: '100%',
                        objectFit: 'cover',
                        height: '100%',
                    }
                },
                '& .user-data-wrapper': {
                    marginLeft: '17px',
                    width: 'calc(100% - 53px)',
                    '& p': {
                        margin: '0',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        '&:first-child': {
                            '& > b': {},
                            '& > span': {
                                '&::before': {
                                    content: '"|"',
                                    margin: '0 8px',
                                    top: '-1px',
                                    position: 'relative',
                                }
                            }
                        },
                        '&:last-child': {
                            '& > span': {},
                            '& > span.yellow-title': {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                flex: '1',
                                display: 'block',
                                marginLeft: '8px',
                                color: '#FFF200',
                            }
                        },
                    }
                }
            },
            '& > span': {
                fontSize: '22px',
                cursor: 'pointer',
                marginRight: '16px',
                '&.icon-Close': {
                    fontWeight: '900',
                }
            },
            '& > h4': {
                color: '#fff',
                fontSize: '16px',
                fontWeight: 'bold',
                margin: '0',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }
        },
        '&.no-options': {
            '& .main-bar_title': {
                maxWidth: '100%',
            }
        },
    }
})