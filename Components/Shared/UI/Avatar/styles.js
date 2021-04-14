import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'avatar-wrapper': {
        overflow: 'hidden',
        borderRadius: props => props.radius,
        width: props => props.wrapperWidth,
        height: props => props.wrapperHeight,
        '& img': {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
        },
        '& .like-avatar': {
            fontSize: '15px',
            fontWeight: '600',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: props => props.avatarBG,
            color: props => props.avatarColor,
        },
    }
})