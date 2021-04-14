import React, {useState, useEffect} from 'react';
import useImage from "hooks/use-image";
import PropTypes from 'prop-types';

const Image = ({ src, alt = "", defaultSrc, onClick }) => {
    const { loaded, error } = useImage({ src: src || defaultSrc });
    const [srcAvatar, setSrcAvatar] = useState(null);
    const [srcDefault, setSrcDefault] = useState(false);
    useEffect(() => {
        if (loaded) {
            if (!src) setSrcDefault(true);
            setSrcAvatar(src || defaultSrc);
        }
        if (error) {
            setSrcAvatar('/images/notFound.png')
        }
    }, [loaded, src, error]);

    return (
        <img
            loading="lazy"
            onClick={(e) => onClick(e)}
            className={`${(!loaded && !error) ? 'till-loading' : ''} ${error ? 'not-found': ''} ${srcDefault ? 'default-avatar' : ''}`}
            src={srcAvatar || '/images/loading.gif'} alt={alt || 'dynamic-image-hok'} />
    )
};
Image.defaultProps = {
    onClick: () => void(0),
}
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    defaultSrc: PropTypes.string,
    onClick: PropTypes.func,
};
export default React.memo(Image);
