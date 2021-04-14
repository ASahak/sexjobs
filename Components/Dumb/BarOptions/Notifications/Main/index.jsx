import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';

const MainOptions = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeIcon, setActiveIcon] = useState(null);

    const classesDropDown = useDropDownPopoverStyles({});
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        !anchorEl && setActiveIcon(null)
    }, [anchorEl])

    return (
        <div className="options-container">
            <span className="icon-Settings" data-icon-active={activeIcon === 'settings'} onClick={() => props.goToSettings()}></span>
            <span className="icon-Overflow-menu" onClick={(evt) => setAnchorEl(evt.currentTarget)}></span>
            <Popover
                id={id}
                classes={classesDropDown}
                open={open}
                anchorEl={anchorEl}
                PaperProps={{
                    className: 'popover-container',
                    style: {
                        width: '190px'
                    }
                }}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className="notifications-bar-options-popup__block">
                    <p>Some Option</p>
                </div>
            </Popover>
        </div>
    )
}

MainOptions.propTypes = {
    goToSettings: PropTypes.func.isRequired,
}
export default React.memo(MainOptions)