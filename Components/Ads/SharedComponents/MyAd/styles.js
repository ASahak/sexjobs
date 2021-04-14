import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';
import {StickerBadgeSilver} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    '@global': {
        '.actions-dropdown-ad': {
            padding: '0 10px',
            '& a': {
                color: '#000',
                display: 'block',
                fontSize: '14px',
                cursor: 'pointer',
                margin: '5px 0'
            }
        }
    },
    'extend_details-p': {
        color: '#e2dede',
        fontSize: '13px',
        marginBottom: '0',
        width: '70px',
    },
    'ad-container_with-checkbox': {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginBottom: '16px',
        '& .checkbox-wrapper-for_DT': {
            ...MediaQuery.down({
                display: 'none !important',
            }).sm,
        },
        '& .mobile-checkbox_ad': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '4px',
            zIndex: '22',
            cursor: 'pointer',
            border: '2px solid transparent',
            '& .icon-Check-alt': {
                width: '25px',
                height: '25px',
                border: '2px solid #fff',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
                '&::before': {
                    display: 'none',
                }
            },
            '&.selected-mobile_ad': {
                border: '2px solid #fff',
                '& .icon-Check-alt': {
                    background: '#fff',
                    '&::before': {
                        display: 'block',
                    }
                }
            },
        }
    },
    'ad-container_ad': {
        width: '100%',
        backgroundColor: variables.$contentBlueColor,
        borderRadius: '4px',
        padding: '10px',
    },
    'confirm-cancel-dialog_ad': {
        '& > p': {
            fontSize: '14px',
            color: '#5D5D5D',
            marginBottom: '10px',
        }
    },
    'ad-top_panel': {
        display: 'flex',
        paddingTop: '35px',
        position: 'relative',
        ...MediaQuery.down({
            flexDirection: 'column',
            alignItems: 'flex-start',
        }).xs,
        '& .position-top_ad': {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
            top: '0',
            '& > p': {
                margin: '0 5px 10px',
                color: '#C3CBD5',
                fontSize: '13px',
                '&:first-child': {
                    '&::after': {
                        content: '"|"',
                        marginLeft: '10px',
                    }
                },
                '&:last-child': {
                    '& > span.status-badge_ad': {
                        width: '7px',
                        height: '7px',
                        display: 'inline-block',
                        borderRadius: '50%',
                        marginLeft: '5px',
                    }
                }
            },
        },
        '& > .actions-wrapper_ad': {
            width: '35%',
            ...MediaQuery.down({
                width: '100%',
            }).xs,
        },
        '& .left-side_ad': {
            width: '65%',
            paddingRight: '10px',
            ...MediaQuery.down({
                paddingRight: '0px',
                width: '100%',
            }).xs,
            '& .details-container_ad': {
                '& > p': {
                    color: '#C3CBD5',
                    fontSize: '13px',
                    cursor: 'pointer',
                    position: 'relative',
                    display: 'inline-block',
                    paddingRight: '20px',
                    '& > span': {
                        fontSize: '11px',
                        marginLeft: '5px',
                        transition: '.4s',
                        position: 'absolute',
                        top: '4px',
                        '&.show-details_ad': {
                            transform: 'rotate(180deg)',
                        }
                    }
                },
                '& .date-details_ad': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '7px',
                    '& > p': {
                        extend: 'extend_details-p',
                    },
                    '& > span': {
                        color: '#e2dede',
                        fontSize: '13px',
                    },
                },
                '& .viewed-details_ad': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '7px',
                    '& > p': {
                        extend: 'extend_details-p',
                    },
                    '& > span': {
                        color: '#e2dede',
                        fontSize: '13px',
                    },
                },
                '& .position-details_ad': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '7px',
                    '& > p': {
                        extend: 'extend_details-p',
                    },
                    '& > span': {
                        color: '#e2dede',
                        fontSize: '13px',
                    },
                },
                '& .status-details_ad': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '7px',
                    '& > p': {
                        extend: 'extend_details-p',
                    },
                    '& > div': {
                        color: '#e2dede',
                        fontSize: '13px',
                        '& > span': {
                            width: '7px',
                            height: '7px',
                            display: 'inline-block',
                            borderRadius: '50%',
                            marginRight: '5px',
                        }
                    }
                },
                '& .labels-details_ad': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '7px',
                    '& > p': {
                        extend: 'extend_details-p',
                    },
                    '& > div': {
                        '& > span': {
                            backgroundColor: '#0A2955',
                            color: '#e2dede',
                            margin: '0 3px',
                            fontSize: '12px',
                            padding: '4px 7px',
                            borderRadius: '4px',
                        }
                    }
                },
                '& .advertisers_ad': {
                    display: 'flex',
                    '& > span': {
                        extend: 'extend_details-p',
                    },
                    '& > ul': {
                        listStyleType: 'none',
                        margin: '0',
                        padding: '0',
                        '& > li': {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                            '& > .advertiser-details_ad': {
                                paddingLeft: '10px',
                                '& > p': {
                                    color: '#C3CBD5',
                                    marginBottom: '0',
                                    fontSize: '11px',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                },
                                '& > h4': {
                                    color: 'rgb(255, 255, 255)',
                                    marginBottom: '2px',
                                    fontWeight: 'bold',
                                    fontSize: '13px',
                                }
                            }
                        }
                    },
                },
            },
            '& > .image-wrapper_ad': {
                display: 'flex',
                alignItems: 'center',
                '& .title-wrapper_ad': {
                    paddingLeft: '16px',
                    wordBreak: 'break-word',
                    '& > h4': {
                        color: 'rgb(255, 255, 255)',
                        marginBottom: '2px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                    },
                    '& > p': {
                        color: '#C3CBD5',
                        fontSize: '14px',
                    },
                },
                '& > .image-parent_ad': {
                    display: 'inline-block',
                    borderRadius: '5px',
                    marginBottom: '16px',
                    '& > img': {
                        borderRadius: '5px',
                        maxWidth: '150px',
                        maxHeight: '150px',
                        objectFit: 'cover',
                        '&.default-avatar': {
                            border: '1px solid #819BBD',
                            width: '150px',
                            height: '150px',
                            padding: '40px',
                            objectFit: 'cover',
                        },
                    }
                },
                ...MediaQuery.between({
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    '& .title-wrapper_ad': {
                        paddingLeft: '0px'
                    }
                }).md_lg,
                ...MediaQuery.down({
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    '& .title-wrapper_ad': {
                        paddingLeft: '0px'
                    }
                }).xss,
            },
        }
    },
    'ad-active-ads_panel': {
        '& .active-ads_container': {
            '& .panel-header_active-ads': {
                backgroundColor: '#103477',
                padding: '5px 10px',
                color: '#fff',
                fontSize: '13px',
                cursor: 'pointer',
                position: 'relative',
                width: 'calc(100% + 20px)',
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
                marginLeft: '-10px',
                marginBottom: '-10px',
                '& > span': {
                    fontSize: '11px',
                    marginLeft: '7px',
                    position: 'absolute',
                    top: '9px',
                    transition: '.4s',
                },
                '&.show-more_ads': {
                    borderRadius: '0',
                    '& > span': {
                        transform: 'rotate(180deg)',
                    }
                }
            },
            '& .active-ads-list': {
                paddingTop: '30px',
                '& > div': {
                    '& > h4': {
                        color: 'rgb(255, 255, 255)',
                        marginBottom: '12px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        position: 'relative',
                        paddingRight: '30px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        '& > .icon-Edit': {
                            position: 'absolute',
                            right: '5px',
                            top: '2px',
                            cursor: 'pointer',
                            color: '#C3CBD5',
                        },
                        '& > p': {
                            margin: '5px 0 5px 5px',
                            '& .sticker-badge': {
                                ...StickerBadgeSilver,
                            }
                        }
                    },
                    '& > ul': {
                        paddingLeft: '20px',
                        borderBottom: '2px solid #0A2955',
                        marginBottom: '17px',
                        paddingBottom: '10px',
                        '& > li': {
                            color: '#C3CBD5',
                            fontSize: '13px',
                            margin: '7px 0',
                            position: 'relative',
                            paddingRight: '30px',
                            '& > span': {
                                position: 'absolute',
                                right: '5px',
                                top: '2px',
                                cursor: 'pointer',
                            }
                        },
                    },
                    '&:last-child': {
                        '& > ul': {
                            marginBottom: '0',
                            paddingBottom: '0',
                            borderBottom: '0',
                        }
                    },
                },
            },
        },
    },
})