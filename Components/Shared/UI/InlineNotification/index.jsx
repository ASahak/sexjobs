import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {UI} from 'utils/constants';

const InlineNotification = (props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={`${styles['inline-notification-container']} ${'notification-' + props.type} custom-toast-inline`}>
            {props.type !== 'default' ? <img src={`/images/${props.type}.png`} /> : ''}
            <div className="notification-label-content">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

InlineNotification.defaultTypes = {
    closeIcon: false,
    type: 'default',
    title: '',
    description: '',
}
InlineNotification.propTypes = {
    closeIcon: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOf([...UI.toastTypes]),
}
export default React.memo(InlineNotification);