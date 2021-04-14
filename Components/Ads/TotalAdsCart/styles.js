import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'cart-items-container': {
        border: '1px solid rgb(0, 50, 113)',
        position: 'relative',
        backgroundColor: variables.$barColor,
        padding: '10px',
    },
    'btn-action_crt': {
        display: 'flex',
        ...MediaQuery.between({
            flexDirection: 'column',
        }).sm_md,
        '& > button': {
            width: '50%',
            ...MediaQuery.up({
                fontSize: '11px !important',
            }).lg,
        }
    },
    'list_wrap-crt': {
        '& > .list_wrap-crt__item': {
            padding: '10px 0',
            '& > p': {
                marginBottom: '5px',
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                '&:first-child': {
                    marginBottom: '0',
                    '& b': {
                        color: '#fff',
                        '& .icon-bin': {
                            marginLeft: '5px',
                            fontSize: '16px',
                            cursor: 'pointer',
                        },
                    }
                },
                '&:last-child': {
                    color: '#B4B4B4',
                },
            }
        }
    },
    'title_wrap-crt': {
        display: 'flex',
        alignItems: 'flex-end',
        borderBottom: '3px solid #fff',
        marginBottom: '15px',
        padding: '5px 0',
        '& .icon-Shopping-Cart': {
            color: '#fff',
            marginBottom: '10px',
            position: 'relative',
            fontSize: '22px',
            '& > i': {
                position: 'absolute',
                top: '-9px',
                right: '-11px',
                fontSize: '11px',
                width: '15px',
                height: '15px',
                background: 'red',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        },
        '& .title_wrap-crt__right': {
            paddingLeft: '20px',
            '& > p': {
                color: '#fff',
                fontSize: '14px',
                marginBottom: '5px',
                fontWeight: '600',
            }
        }
    }
})