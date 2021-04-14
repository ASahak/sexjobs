import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Image} from 'Components/Shared/UI';

const Avatar = (props) => {
    const styles = UseStyles({
        avatarBG: props.avatarBG,
        avatarColor: props.avatarColor,
        radius: props.radius,
        wrapperWidth: props.width,
        wrapperHeight: props.height,
    }, {link: true});

    const likeAvatar = useCallback((title) => {
        const firstLetter = title.charAt(0).toUpperCase();
        return (
            <span className="like-avatar">{firstLetter}</span>
        )
    }, []);

    return (<div className={`${styles['avatar-wrapper']} ${props.className}`}>
            {props.avatarSrc ? <Image src={props.avatarSrc} defaultSrc={props.defaultSrc}/> : likeAvatar(props.name || '')}
        </div>
    )
}
Avatar.defaultProps = {
    radius: '50%',
    avatarBG: '#0B0E2A',
    avatarColor: '#fff',
}
Avatar.propTypes = {
    avatarSrc: PropTypes.string.isRequired,
    defaultSrc: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    height: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    avatarBG: PropTypes.string,
    avatarColor: PropTypes.string,
}
export default React.memo(Avatar);

