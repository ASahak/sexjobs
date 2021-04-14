import React from 'react';
import PropTypes from 'prop-types';

const LikeDialog = (props) => {

    return (
        <>
            <div className="main-bar_title">
                <span className="icon-Close" onClick={() => props.onClose()}></span>
                <h4>{props.title}</h4>
            </div>
            <div className="right-options-bar">
                {props.saveAction ? <span className="save-btn" onClick={() => props.onSave()}>Save</span>: ''}
            </div>
        </>
    )
}

LikeDialog.defaultProps = {
    saveAction: true,
}
LikeDialog.propTypes = {
    saveAction: PropTypes.bool,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};
export default React.memo(LikeDialog);