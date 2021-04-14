import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Button, Avatar} from 'Components/Shared/UI';
import InfiniteScroll from 'react-infinite-scroller';
import {formatDistanceStrict} from 'date-fns';
import Popover from '@material-ui/core/Popover';
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';

const NotificationItem = ({isSeen, image, label, notification_text, btns, date, isDialogPopUp}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const classesDropDown = useDropDownPopoverStyles({
        margin: '15px 0 0 24px',
        triangle: 'block',
        overflow: 'initial',
        triangleRight: '22px',
    });

    return (
        <div className={`notification-item__block ${!isSeen ? 'notification-item__block--need-seen' : ''}`}>
            <div className="notification-img__block">
                <Avatar
                    avatarSrc={image}
                    radius={'50%'}
                    name={label}
                    width={36}
                    height={36}/>
            </div>
            <div className="notification-details__block">
                <p>
                    {notification_text}
                    {/*<Link href={'/'} prefetch={false}>todo*/}
                    {/*    <a>Potverdikkie lekker hoor dat neuken.</a>*/}
                    {/*</Link>*/}
                    <span className="date-notification">
                        <i className="icon-Time"></i>
                        {formatDistanceStrict(
                            new Date(date),
                            new Date(),
                            {
                                includeSeconds: true,
                            },
                        )} ago
                    </span>
                </p>
                {btns.length ? <div className="notification-btns__block">
                    {btns.indexOf('decline') > -1 ? <Button
                        icon={{className: 'icon-Block', direction: 'left'}}
                        margin={[0, 10, 0, 0]}
                        width={100}
                        size={'xs'}
                        text="Decline"
                        typeButton={!isDialogPopUp ? 'alt' : 'white-bg'}
                    /> : ''}
                    {btns.indexOf('cta') > -1 ? <Button
                        width={100}
                        size={'xs'}
                        text="CTA"
                        typeButton={!isDialogPopUp ? 'alt' : 'white-bg'}
                    /> : ''}
                    {btns.indexOf('accept') > -1 ? <Button
                        icon={{className: 'icon-checkmark', direction: 'left'}}
                        width={100}
                        size={'xs'}
                        text="Accept"
                        typeButton="primary"
                    /> : ''}
                </div> : ''}
            </div>
            {!isDialogPopUp ? <>
                <span className="icon-Overflow-menu" onClick={(evt) => setAnchorEl(evt.currentTarget)}></span>
                <Popover
                    classes={classesDropDown}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    PaperProps={{
                        className: 'popover-container notification-popover__block',
                        style: {
                            width: '150px'
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
                    <p>Mark as read</p>
                    <p>Delete</p>
                </Popover>
            </> : ''}
        </div>
    )
}

const offset = 10;
const List = (props) => {
    const styles = UseStyles({}, {link: true});

    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = (page) => {
        const data = props.data.slice(page * offset - offset, page * offset)
        if(data.length) {
            setTimeout(() => {
                setList(prevState => ([...prevState, ...data]))
            }, 2000)
        } else {
            setHasMore(false)
        }
    }

    useEffect(() => {
        if (props.viaPopUp) {
            setList(props.data);
        }
    }, [props.viaPopUp])

    return (
        <div className={`${styles['notification-container']} ${props.viaPopUp ? styles['notification-dialog-container'] : ''}`}>
            {props.viaPopUp ? list.map(not => <NotificationItem
                    key={not.id}
                    isDialogPopUp={props.viaPopUp}
                    {...not}
                />) : <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<div id="loader-infinite" key={0}>
                    <img src="/images/loading.gif" alt=""/>
                    LOADING
                </div>}
            >
                {list.map(not => <NotificationItem
                    isDialogPopUp={props.viaPopUp}
                    key={not.id}
                    {...not}
                />)}
            </InfiniteScroll>}
        </div>
    )
}
List.defaultTypes = {
    viaPopUp: false,
}
List.propTypes = {
    viaPopUp: PropTypes.bool,
    data: PropTypes.array.isRequired,
};
export default List;