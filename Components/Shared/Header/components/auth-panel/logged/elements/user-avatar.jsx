import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Image from 'Components/Shared/UI/Image';
import MySJMenu from 'Components/Dumb/MySJMenu';
import Popover from "@material-ui/core/Popover";
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';
import {
    GLOBAL_CONSTANTS,
} from 'utils/constants';
import useOnClickOutside from 'hooks/use-onClick-outside';
import {baseSelector} from 'store/reselect';
import {useSelector} from 'react-redux';

const UserAvatar = (props) => {
    const baseState = useSelector(baseSelector());
    const deviceParams = baseState.deviceParams;

    const {deviceType} = deviceParams;
    const menuRef = useRef();
    const [openMenu, setOpenMenu] = useState(false);
    useOnClickOutside(menuRef, () => {
        if (openMenu && deviceType === 'mobile') {
            toggleMenu(null, false)
        }
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const classesDropDown = useDropDownPopoverStyles({
        margin: '10px 0 0 0px'
    });

    const toggleMenu = useCallback((event, val) => {
        if (deviceType === 'mobile') {
            setOpenMenu(val);
        } else {
            setAnchorEl(event.currentTarget)
        }
    }, [anchorEl, openMenu, deviceType])

    useEffect(() => {
        const isSSR = typeof window !== "undefined";
        if (isSSR && deviceType === 'mobile') {
            document.body.style.paddingRight = openMenu ? GLOBAL_CONSTANTS.bodyPaddingRight : '0';
            document.body.style.overflow = openMenu ? 'hidden' : 'initial';
        }
    }, [openMenu, deviceType]);

    return (
        <div className={`avatar-wrapper ${openMenu ? 'menu-opened' : ''}`}>
            <Image src={props.src} defaultSrc="/images/avatar.png" onClick={(event) => toggleMenu(event, true)}/>
            {deviceType === 'mobile' ? <div className="user-menu-mobile">
                <Image src={props.src} defaultSrc="/images/avatar.png" onClick={(event) => toggleMenu(event, false)}/>
                <MySJMenu dialog={true} handleClick={(e) => toggleMenu(e, false)} refBind={menuRef}/>
            </div>: <Popover
                classes={classesDropDown}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                PaperProps={{
                    style: {
                        width: '210px',
                        borderRadius: '3px',
                    }
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MySJMenu dialog={true} handleClick={() => setAnchorEl(null)}/>
            </Popover>}
        </div>
    )
}
UserAvatar.propTypes = {
    src: PropTypes.string,
}
export default React.memo(UserAvatar);