import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery, Shadow} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    // Profile Page
    'profile-page': {
        ...MediaQuery.up({
            backgroundColor: variables.$blue_30,
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        }).sm,
        marginBottom: '25px',
        padding: '2vw',
    },
    // Verification Page
    'verification-page': {
        ...MediaQuery.up({
            backgroundColor: variables.$blue_30,
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        }).sm,
        marginBottom: '25px',
        padding: '3vw 2vw',
        '& .section-one_id-v': {
            marginBottom: '30px',
            '& > p': {
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px',
                fontSize: '13px',
            },
        },
        '& .section-two_id-v': {
            marginBottom: '30px',
            '& > h4': {
                color: 'rgb(255, 255, 255)',
                marginTop: '36px',
                marginBottom: '16px',
                fontWeight: 'bold',
                fontSize: '20px',
            },
            '& > p': {
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px',
                fontSize: '13px',
            },
            '& > ul': {
                listStyleType: 'none',
                padding: '0',
                '& > li': {
                    position: 'relative',
                    paddingLeft: '20px',
                    color: '#fff',
                    fontSize: '13px',
                    '&::before': {
                        content: '""',
                        top: '3px',
                        left: '4px',
                        width: '6px',
                        height: '12px',
                        border: 'solid white',
                        borderWidth: '0 2px 2px 0',
                        '-webkit-transform': 'rotate(45deg)',
                        '-ms-transform': 'rotate(45deg)',
                        transform: 'rotate(45deg)',
                        position: 'absolute',
                        zIndex: '2',
                    },
                }
            },
        },
        '& .section-three_id-v': {},
        '& .section-four_id-v': {
            '& > h5': {
                color: 'rgb(255, 255, 255)',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '0px',
                paddingBottom: '7px',
            },
            '& .birth-of-date_id-v': {
                display: 'flex'
            }
        },
        '& .section-five_id-v': {
            marginBottom: '30px',
            '& > h5': {
                color: 'rgb(255, 255, 255)',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '0px',
                paddingBottom: '7px',
            },
            '& .birth-of-date_id-v': {
                display: 'flex'
            }
        },
        '& .section-six_id-v, & .section-seven_id-v, & .section-eight_id-v': {
            '& > h4': {
                color: 'rgb(255, 255, 255)',
                marginTop: '36px',
                marginBottom: '16px',
                fontWeight: 'bold',
                fontSize: '20px',
            },
            '& > p': {
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px',
                fontSize: '13px',
            },
        },
    },
    // Verified Via Email
    'verified-page': {
        '& > p': {
            color: 'rgb(255, 255, 255)',
            marginBottom: '16px',
            fontSize: '13px',
        },
        '& > h5': {
            color: 'rgb(255, 255, 255)',
            marginTop: '26px',
            marginBottom: '36px',
            fontWeight: 'bold',
            fontSize: '16px',
        },
    },
    // Forgot Password Page
    'forgot-pass_page': {
        ...MediaQuery.up({
            backgroundColor: variables.$blue_30,
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        }).sm,
        marginTop: '25px',
        marginBottom: '25px',
        '& > div': {
            padding: '40px 5vw',
            ...MediaQuery.down({
                padding: '40px 0px',
            }).sm,
        },
        '& .forgot-pass_form': {
            '& > h3': {
                color: 'rgb(255, 255, 255)',
                marginBottom: '26px',
                fontWeight: 'bold',
                fontSize: '25px',
            },
            '& > p': {
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px',
                fontSize: '13px',
            },
            '& > h5': {
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px',
                fontWeight: 'bold',
                fontSize: '16px',
            },
            '& .not-received': {
                '& > a': {
                    marginLeft: '7px',
                    color: '#99c7e2',
                }
            },
        }
    },
    // Login Page
    'login-page': {
        ...MediaQuery.up({
            backgroundColor: variables.$blue_30,
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        }).sm,
        marginTop: '25px',
        marginBottom: '25px',
        '& > div': {
            padding: '40px 5vw',
            ...MediaQuery.down({
                padding: '40px 0px',
            }).sm,
        },
    },
    // Register Page
    'register-page': {
        ...MediaQuery.up({
            backgroundColor: variables.$blue_30,
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        }).sm,
        marginTop: '25px',
        marginBottom: '25px',
        '& > div': {
            padding: '40px 5vw',
            ...MediaQuery.down({
                padding: '40px 0px',
            }).sm,
            '& .congratulates-container': {
                '& > h5': {
                    color: 'rgb(255, 255, 255)',
                    marginBottom: '16px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                },
                '& .issues': {
                    '& b': {
                        color: 'rgb(255, 255, 255)',
                        fontSize: '13px',
                    }
                },
                '& p': {
                    color: 'rgb(255, 255, 255)',
                    fontSize: '13px',
                    '& a': {
                        fontWeight: 900,
                        marginLeft: '7px',
                        textDecoration: 'underline !important',
                        cursor: 'pointer',
                    }
                }
            }
        },
    },
    // My SexJobs Page
    'links-container-of-sex-jobs': {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '-5px',
        marginRight: '-5px',
        '& .link-item': {
            margin: '5px',
            backgroundColor: variables.$blue_30,
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: 'calc(25% - 10px)',
            height: '200px',
            color: '#fff',
            fontWeight: 600,
            transition: '.4s',
            ...MediaQuery.between({
                width: 'calc(33.33333% - 10px)',
                height: '180px',
            }).sm_lg,
            ...MediaQuery.down({
                width: 'calc(50% - 10px)',
                height: '200px',
            }).sm,
            ...MediaQuery.down({
                height: '150px',
                fontSize: '12px',
            }).xss,
            '&:hover': {
                ...Shadow('0px 0px 8px 5px rgb(0 0 0 / 15%)'),
            },
            '& span': {
                color: variables.$iconColor,
                fontSize: '28px',
                marginBottom: '10px',
            }
        }
    },
})