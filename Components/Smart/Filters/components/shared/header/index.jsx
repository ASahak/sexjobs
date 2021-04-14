import React from 'react';
import UseStyles from './styles';
import PropTypes from 'prop-types';

const Header = (props) => {
    const styles = UseStyles({
        radius: props.isOpen ? '0' : '0 0 2px 2px',
    }, {link: true});

    return (
        <div className={`${styles['filters_header-title']} ${props.isOpen ? 'body-opened-header' : ''} ${props.mobileHighlight.data ? 'has-data_header' : ''}`} onClick={() => props.toggleBody(!props.isOpen)}>
            <h5 className={props.mobileHighlight.data ? 'with-mobile-data' : ''}>
                {props.title}
                {props.mobileHighlight.data ? <p>{props.mobileHighlight.data}</p> : ''}
            </h5>
            {props.isStatic ? props.children : <span className="toggle-body-icon lnr lnr-chevron-down"></span>}
        </div>
    )
}
Header.defaultProps = {
    isStatic: false,
    toggleBody: () => void(0),
    mobileHighlight: {
        data: null,
    }
};
Header.propTypes = {
    title: PropTypes.string,
    mobileHighlight: PropTypes.object,
    toggleBody: PropTypes.func,
    isOpen: PropTypes.bool,
    isStatic: PropTypes.bool,
};

export default React.memo(Header);