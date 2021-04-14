import React, {useCallback, useState} from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Popover from "@material-ui/core/Popover";
const Image = dynamic(() => import('Components/Shared/UI/Image').then(_ => _.default), {ssr: false});
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';

const Chat = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classesDropDown = useDropDownPopoverStyles({});
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const goToPreviousPage = useCallback(() => {
        // todo
    }, [])

    return (
        <>
            <div className="main-bar_title">
                <span className="icon-arrow-left2" onClick={() => goToPreviousPage()}></span>
                <div className="personal-wrapper">
                    <div className="image-wrapper">
                        <Image src="/images/avatar.png"/>
                    </div>
                    <div className="user-data-wrapper">
                        <p>
                            <b>Gio</b>
                            <span>Vrouw, 34</span>
                        </p>
                        <p>
                            <span>Over</span>
                            <span className="yellow-title">Leuke Nederlandsee… meid 28… ontvangt!</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="right-options-bar">
                <div className="options-container">
                    <span className="icon-Overflow-menu" onClick={(event) => setAnchorEl(event.currentTarget)}></span>
                    <Popover
                        id={id}
                        classes={classesDropDown}
                        open={open}
                        anchorEl={anchorEl}
                        PaperProps={{
                            className: 'chat-menu-popover',
                            style: {
                                width: '130px'
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
                        <div className="overflow-menu">
                            <p>Start Chat</p>
                            <p>Leave</p>
                        </div>
                    </Popover>
                </div>
            </div>
        </>
    )
}
Chat.propTypes = {};
export default React.memo(Chat);