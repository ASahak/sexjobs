import {createUseStyles} from 'react-jss';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'after-count_extend': {
        content: 'attr(data-index)',
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: '#fff',
        width: '20px',
        height: '20px',
        background: '#0f3271',
        borderRadius: '50%',
        textAlign: 'center',
        fontSize: '13px',
    },
    'img-dashed_extend': {
        border: '2px dashed rgb(158, 166, 177)',
        padding: '5px',
        position: 'relative',
        borderRadius: '10px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '.4s',
        '&:hover': {
            border: '2px solid #fff',
            '& .icon-edit-account': {
                visibility: 'visible',
                opacity: '1'
            }
        }
    },
    'edit-bin_extend': {
        visibility: 'hidden',
        transition: '.2s',
        opacity: '0',
        position: 'absolute',
        bottom: '5px',
        right: '7px',
        marginBottom: '0',
        '& > span': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            width: '25px',
            height: '25px',
            fontSize: '11px',
            backgroundColor: '#3C75BB',
            borderRadius: '50%',
            margin: '0 5px',
            cursor: 'pointer',
        }
    },
    'uploaded-list': {

    },
    'cover-photo': {
        extend: 'img-dashed_extend',
        width: '280px',
        height: '220px',
        ...MediaQuery.down({
            width: '100%',
        }).sm,
        '&::after': {
            extend: 'after-count_extend',
        },
        '& > img': {
            maxWidth: '100%',
            maxHeight: '100%',
        },
        '& .cover-photo': {
            position: 'absolute',
            bottom: '5px',
            fontSize: '11px',
            color: '#fff',
            padding: '5px 16px',
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '15px',
        },
        '& > .icon-edit-account': {
            extend: 'edit-bin_extend'
        },
    },
    'photo-items-wrap': {
        display: 'flex',
        flexWrap: 'wrap',
    },
    'photo-item': {
        extend: 'img-dashed_extend',
        width: '135px',
        height: '110px',
        marginRight: '10px',
        ...MediaQuery.down({
            width: 'calc(50% - 5px)',
            '&:nth-child(even)': {
                marginRight: '0',
            }
        }).sm,
        '&::after': {
            extend: 'after-count_extend',
        },
        '& > img': {
            maxWidth: '100%',
            maxHeight: '100%',
        },
        '& > .icon-edit-account': {
            extend: 'edit-bin_extend'
        },
    },
})