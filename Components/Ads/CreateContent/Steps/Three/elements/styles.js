import {createUseStyles} from 'react-jss';
import {MediaQuery, TitleInsideMainContent, SubTitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';
import variables from 'static/styles/jss/abstracts/variables';
import {FlexInputsWrapper, MainContent, AddListIconAddExtend} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    'switch-container-like-collapse_extend': {
        marginTop: '40px',
        '& h4': {
            ...TitleInsideMainContent(),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& p': {
                margin: '0',
            }
        },
        '& > p': {
            ...SubTitleInsideMainContent(),
        },
    },
    'pricing-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& > h4': {
            marginBottom: '0',
        },
        '& > p': {
            ...SubTitleInsideMainContent(),
        },
        '& .pricing-section': {
            '& > ul': {
                listStyleType: 'none',
                padding: '0',
                '& > li': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                    '& .icon-action_pricing': {
                        color: variables.$helperTextColor,
                        marginLeft: '10px',
                        cursor: 'pointer',
                    }
                }
            },
        }
    },
    'website-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& h4': {
            '& p': {
                margin: '0',
                '& > span': {
                    fontSize: '13px',
                }
            }
        },
        '& .website-section': {
            ...AddListIconAddExtend,
        },
    },

    'type-of-location-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& > h4': {
            marginBottom: '0',
        },
        '& > p': {
            ...SubTitleInsideMainContent(),
        },
        '& .type-of-location-section': {
            '& > ul': {
                listStyleType: 'none',
                padding: '0',
            },
        }
    },
    'possibilities-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& > h4': {
            marginBottom: '0',
        },
        '& > p': {
            ...SubTitleInsideMainContent(),
        },
        '& .possibilities-section': {
            '& > ul': {
                listStyleType: 'none',
                padding: '0',
            },
        }
    },
    'event-type-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& > p': {
            ...SubTitleInsideMainContent(),
        },
        '& .event-type-section': {
            '& > ul': {
                listStyleType: 'none',
                padding: '0',
            }
        }
    },
    'type-of-work-wrapper': {
        extend: 'switch-container-like-collapse_extend',
    },
    'type-of-employment-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& > ul': {
            listStyleType: 'none',
            padding: '0',
        }
    },
    'working-hours-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& > ul': {
            listStyleType: 'none',
            padding: '0',
        }
    },
    'salary-indication-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& .salary-indication-section': {
            '& > div': {
                display: 'flex',
            }
        }
    },
    'availability-wrapper': {
        extend: 'switch-container-like-collapse_extend',
        '& .availability-section': {
            '& > ul': {
                listStyleType: 'none',
                padding: '0',
                '& > li': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '& .time-from-until-wrapper': {
                        display: 'flex',
                    }
                }
            }
        }
    },
})