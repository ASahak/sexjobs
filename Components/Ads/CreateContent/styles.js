import {createUseStyles} from 'react-jss';
import {MediaQuery, TitleInsideMainContent, SubTitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';
import variables from 'static/styles/jss/abstracts/variables';
import {FlexInputsWrapper, MainContent, AddListIconAddExtend} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    'main-create_content': {
        ...MainContent,
        '& .mobile-step-name': {
            '& h4': {
                ...TitleInsideMainContent(),
                borderBottom: '2px solid #fff',
                padding: '10px 0',
                ...MediaQuery.up({
                    display: 'none',
                }).sm,
            }
        },
        '& .no-person-profile_container': {
            '& .flex-inputs': {
                marginTop: '25px',
                ...FlexInputsWrapper,
            },
            '& .attention-wrap': {
                margin: '30px 0 20px',
                '& > p': {
                    marginBottom: '0',
                    fontSize: '13px',
                    color: '#fff',
                },
            },
            '& a': {
                fontSize: '13px',
                color: '#fff !important',
                cursor: 'pointer',
                textDecoration: 'underline !important',
            },
        },
        '& .title-and-edit': {
            display: 'flex',
            justifyContent: 'space-between',
            '& > h4': {
                ...TitleInsideMainContent(),
            },
            '& > label': {
                cursor: 'pointer',
                color: variables.$helperTextColor,
                fontSize: '14px',
                '& > span': {
                    marginLeft: '10px'
                }
            },
        },
        '& .go-to-edit-actions_ad': {
            paddingTop: '30px',
            '& .audience-wrap': {
                '& > p': {
                    ...SubTitleInsideMainContent({
                        marginBottom: '20px',
                    }),
                },
                '& > h4': {
                    ...TitleInsideMainContent(),
                },
                '& .tags-component_ad': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > div': {
                        minWidth: '150px',
                    }
                }
            },
            '& .switcher-line': {
                paddingBottom: '20px',
                '& p': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#fff',
                    fontWeight: '600',
                },
                '& .invitation-container': {
                    '& > p': {
                        fontWeight: '400',
                        fontSize: '14px'
                    },
                    '& .co-advertiser-wrap': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        '& > span': {
                            marginTop: '25px',
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#fff',
                            fontSize: '18px',
                            backgroundColor: variables.$primaryColor,
                        }
                    },
                    '& .email-list-and-comment': {
                        '& > ul': {
                            listStyleType: 'none',
                            padding: '0',
                            marginTop: '10px',
                            '& li': {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                color: '#fff',
                                padding: '16px 0',
                                borderTop: '2px solid ' + variables.$borderGrey,
                                fontSize: '13px',
                                '&:last-child': {
                                    borderBottom: '2px solid ' + variables.$borderGrey,
                                },
                                '& > span': {
                                    cursor: 'pointer',
                                    fontWeight: '900',
                                    color: variables.$borderGrey,
                                }
                            },
                        }
                    }
                },
            }
        },
        // Suppose
        '& .suppose-no-profile': {
            '& .secondary-title': {
                marginTop: '30px',
            },
        },
        // Personal
        '& .personal-ad-section': {
            '& .profile-container': {
                marginTop: 0,
            },
        },
        // Company
        '& .company-ad-section': {
            '& .profile-container': {
                marginTop: '25px',
            },
            '& .select-profile_container': {
                '& > h4': {
                    ...TitleInsideMainContent(),
                },
                '& .select-options_with-plus': {
                    ...AddListIconAddExtend,
                }
            },
        },
        // Two
        '& .category-content': {
            '& > form': {},
            '& .category-select': {
                position: 'relative',
                '& .price-label': {
                    position: 'absolute',
                    fontWeight: '600',
                    marginBottom: '0',
                    paddingBottom: '7px',
                    fontSize: '13px',
                    color: 'rgb(255, 255, 255)',
                    right: '0',
                }
            },
            '& .labels-container': {
                '& .label-description': {
                    '& > h4': {
                        fontWeight: '600',
                        marginBottom: '0',
                        paddingBottom: '7px',
                        fontSize: '13px',
                        color: 'rgb(255, 255, 255)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        '& > span': {
                            color: '#a6b2c1',
                            fontWeight: '400',
                            fontSize: '12px',
                        }
                    },
                    '& > p': {
                        marginBottom: '0',
                        fontSize: '13px',
                        color: '#fff',
                    },
                    '& .category-tabs': {
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '20px',
                    },
                }
            }
        },
        // Three
        '& .advertisement-content': {
            '& h4': {
                ...TitleInsideMainContent(),
            },
            '& > div': {

            },
            '& .contact-info-wrap': {
                marginTop: '30px',
                '& > h4': {
                    ...TitleInsideMainContent(),
                    display: 'flex',
                    '& > span': {
                        display: 'inline-flex',
                        width: '20px',
                        height: '20px',
                        backgroundColor: variables.$helperTextColor,
                        color: variables.$blue_30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '11px',
                        borderRadius: '50%',
                        marginLeft: '10px',
                    },
                },
                '& > p': {
                    ...SubTitleInsideMainContent(),
                },
                '& > ul': {
                    listStyleType: 'none',
                    padding: '0',
                },
            },
            '& .date-and-starting-time': {
                display: 'flex',
                alignItems: 'flex-end',
            },
        },
        // Four
        '& .photos-content': {
            '& h4': {
                ...TitleInsideMainContent(),
            },
            '& > p': {
                ...SubTitleInsideMainContent(),
            },
            '& .drop-area': {
                ...MediaQuery.down({
                    width: 'calc(50% - 5px)'
                }).sm,
            },
        },
        // Five
        '& .promotion-content': {},
    }
})