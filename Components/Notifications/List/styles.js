import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    '@global': {
        '.notification-popover__block': {
            '& p': {
                marginBottom: '10px',
                fontSize: '14px',
                cursor: 'pointer',
                '&:last-child': {
                    marginBottom: '0px',
                }
            }
        }
    },
    'notification-container': {
        '& .notification-item__block': {
            padding: '14px 25px 14px 10px',
            ...MediaQuery.up({
                padding: '14px 95px 14px 10px',
            }).sm,
            display: 'flex',
            borderTop: '1px solid ' + variables.$barColor,
            position: 'relative',
            '&:last-child': {
                borderBottom: '1px solid ' + variables.$barColor,
            },
            '& .icon-Overflow-menu': {
                position: 'absolute',
                right: '6px',
                color: variables.$iconColor,
                cursor: 'pointer',
            },
            '& .notification-img__block': {
                width: '50px',
            },
            '& .notification-details__block': {
                flex: 1,
                '& > p': {
                    fontSize: '13px',
                    color: variables.$helperTextColor,
                    marginBottom: '12px',
                    '& > a': {
                        paddingLeft: '7px',
                        wordBreak: 'break-all',
                    },
                    '& .date-notification': {
                        whiteSpace: 'nowrap',
                        fontSize: '11px',
                        color: variables.$borderGrey,
                        ...MediaQuery.up({
                            position: 'absolute',
                            right: '0',
                            top: '40px',
                        }).sm,
                        '& i': {
                            margin: '0 3px 0 5px',
                        }
                    },
                },
                '& .notification-btns__block': {
                    display: 'flex',
                }
            },
            '&.notification-item__block--need-seen': {
                '& .notification-img__block': {
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        backgroundColor: variables.$baseRed,
                        borderRadius: '50%',
                        left: '36px',
                        top: '10px',
                    }
                },
                '& .notification-details__block': {
                    '& > p': {
                        fontWeight: '600',
                        color: '#fff',
                        '& .date-notification': {
                            color: '#fff',
                        }
                    }
                }
            }
        },
    },
    'notification-dialog-container': {
        '& .notification-item__block': {
            padding: '14px 25px 14px 10px',
            borderTop: '1px solid ' + variables.$helperTextColor,
            '&:first-child': {
                borderTop: 'none',
            },
            '&:last-child': {
                borderBottom: '1px solid ' + variables.$helperTextColor,
            },
            '& .notification-details__block': {
                '& > p': {
                    color: '#5D5D5D',
                    '& .date-notification': {
                        position: 'relative',
                        right: 'initial',
                        top: 'initial',
                    }
                }
            },
            '&.notification-item__block--need-seen': {
                '& .notification-img__block': {
                    '&::after': {
                        left: 'initial',
                        background: variables.$button.$primary.$bg,
                        borderRadius: '50%',
                        top: '0',
                        bottom: '0',
                        margin: 'auto',
                        right: '10px',
                    }
                },
                '& .notification-details__block': {
                    '& > p': {
                        color: '#5D5D5D !important',
                        '& .date-notification': {
                            color: variables.$borderGrey
                        }
                    }
                }
            }
        },
    },
})