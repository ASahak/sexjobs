import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'main-wrapper-sj-menu': {
        '& .sj-menu_title': {
            border: '1px solid #003271',
            backgroundColor: '#003271',
            marginBottom: '15px',
            '& > h3': {
                fontSize: '20px',
                fontWeight: 'bold',
                margin: '0px',
                color: '#fff',
                padding: '18px 10px 18px 30px',
            },
        },
        '& .sj-main-list': {
            marginBottom: '15px',
            ...Shadow('0 2px 4px 0 rgba(0,0,0,0.2)'),
            '& > h4': {
                display: 'none',
            },
            '& > ul': {
                margin: '0px',
                listStyleType: 'none',
                padding: '0 0 5px 0',
                backgroundColor: variables.$contentBlueColor,
                '& > li': {
                    '& > a.active-link-menu': {
                        backgroundColor: variables.$iconActiveBG,
                        color: '#B0F2F1',
                        '& > span': {
                            color: '#B0F2F1'
                        }
                    },
                    '& > a': {
                        padding: '11px 10px 11px 15px',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '15px',
                        transition: '.4s',
                        '& > span': {
                            color: variables.$helperTextColor,
                            fontSize: '20px',
                            marginRight: '10px',
                        },
                        '&:not(.active-link-menu)': {
                            '&:hover': {
                                color: '#fff',
                                textShadow: '.5px 0px 0px #fff, 0px 0px 0px #fff, 0px 0px 0px #fff',
                                letterSpacing: '0.2px',
                            }
                        },
                    },
                }
            },
            '&.side-bar-dialog': {
                width: '210px',
                borderRadius: '3px',
                marginBottom: '0px',
                ...Shadow('none'),
                '& > h4': {
                    display: 'block',
                    color: '#020202',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    background: '#fff',
                    margin: '0',
                    padding: '20px 10px 20px 20px',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    borderBottom: '2px solid #C5C5C5',
                },
                '& > ul': {
                    backgroundColor: '#fff',
                    '& > li': {
                        '&.active-link-menu': {
                            '& > a': {
                                backgroundColor: variables.$primaryColor,
                                color: '#fff',
                                '& > span': {
                                    color: '#fff'
                                }
                            },
                        },
                        '& > a': {
                            padding: '11px 10px 11px 20px',
                            color: '#000',
                            '&:not(.active-link-menu)': {
                                '&:hover': {
                                    color: '#000',
                                    textShadow: '.5px 0px 0px #000, 0px 0px 0px #000, 0px 0px 0px #000',
                                    letterSpacing: '0.2px',
                                }
                            },
                        },
                    }
                }
            },
        }
    }
})