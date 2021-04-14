 import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';
import Link from 'next/link';
 import NotificationsData from 'dummyData/Notifications';
import dynamic from 'next/dynamic';
const NotificationList = dynamic(() => import('Components/Notifications/List').then(_ => _.default), {ssr: false});

const Notifications = (props) => {
    const _count = props.data.length > 9 ? '9+' : props.data.length;
    const classesDropDown = useDropDownPopoverStyles({
        margin: '20px 0 0 42px',
        triangle: 'block',
        triangleRight: '42px',
        overflow: 'initial',
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div className="notifications-wrapper" data-icon-active={open}>
            <span className="icon-Notification" onClick={(event) => setAnchorEl(event.currentTarget)}></span>
            { _count ? <span className="count--block">{_count}</span> : ''}
            <Popover
                classes={classesDropDown}
                id={id}
                open={open}
                anchorEl={anchorEl}
                PaperProps={{
                    className: 'custom-notification-popover',
                    style: {
                        width: '300px'
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
                <NotificationList data={NotificationsData.slice(0, 4)} viaPopUp={true}/>
                <Link href={'/'} prefetch={false}>
                    <a className="see-all-notifications_popover">Alle notificaties bekijken</a>
                </Link>
            </Popover>
        </div>
    )
}

Notifications.defaultProps = {
    data: [],
}
Notifications.propTypes = {
    data: PropTypes.array,
}
export default React.memo(Notifications);