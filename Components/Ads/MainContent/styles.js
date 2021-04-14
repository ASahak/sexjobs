import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'promotion-ads-page': {},
    'mobile-bottom-actions-wrapper': {
        position: 'fixed',
        bottom: '-30px',
        background: '#fff',
        zIndex: '99',
        left: '0',
        width: '100%',
        padding: '10px',
        transition: '.4s',
        opacity: '0',
        '&.show-bottom_fixed-overlay': {
            opacity: '1',
            bottom: '0',
        },
        '& .top-panel-mb_fixed': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .actions-collapse': {
                width: 'calc(100% - 60px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                '& > p': {
                    marginBottom: 0,
                    textAlign: 'right',
                    color: '#4986D6',
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    paddingRight: '25px',
                    position: 'relative',
                    '& > span': {
                        color: '#c5c5c5',
                        fontSize: '12px',
                        margin: '5px',
                        transition: '.4s',
                        position: 'absolute',
                        top: '-2px',
                    }
                },
                '&.overflow-list-open': {
                    '& > p': {
                        '& > span': {
                            transform: 'rotate(180deg)',
                        }
                    }
                }
            },
            '& .checkbox-all_btn': {
                cursor: 'pointer',
                '& > p': {
                    display: 'flex',
                    alignItems: 'center',
                    color: '#5D5D5D',
                    marginBottom: '10px',
                    '& .icon-Check-alt': {
                        width: '25px',
                        height: '25px',
                        border: '2px solid #3378D1',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '10px',
                        '&::before': {
                            display: 'none',
                        },
                        '&.half-selected_fixed': {
                            '&::before': {
                                display: 'block',
                                width: '70%',
                                height: '70%',
                                background: '#3378D1',
                                borderRadius: '50%',
                                content: '""',
                            }
                        },
                        '&.all-selected_fixed': {
                            background: '#3378D1',
                            '&::before': {
                                color: '#fff',
                                display: 'block',
                            }
                        }
                    },
                },
                '& > a': {
                    color: '#4986D6',
                    fontSize: '13px',
                    display: 'block',
                }
            }
        },
        '& .actions-fixed_overflow': {
            padding: '0px 20px 0 0',
            margin: '0',
            listStyleType: 'none',
            '& > li': {
                textAlign: 'right',
                cursor: 'pointer',
                color: '#4986D6',
                '& > a': {
                    color: '#4986D6',
                    fontSize: '13px',
                    fontWeight: '600',
                }
            }
        }
    },
})