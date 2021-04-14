import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';

const MySJSimpleTitleBar = (props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['simple-bar-container']} style={{...props.style}}>{props.children}</div>
    )
}
MySJSimpleTitleBar.defaultProps = {
    style: {},
}
MySJSimpleTitleBar.propTypes = {
    style: PropTypes.object,
}
export default React.memo(MySJSimpleTitleBar);