import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './elements/shopping-cart';
import Notifications from './elements/notifications';
import UserAvatar from './elements/user-avatar';
import Messages from './elements/messages';

const Logged = (_props) => {
    const [user, setUser] = useState({ // todo need to get from API via redux
        cartCount: 10,
        notifications: [
            {},
            {},
            {},
        ],
        avatarSrc: '',
    });

    return (
        <>
            {user.cartCount > 0 ? <ShoppingCart count={user.cartCount}/> : ''}
            <Notifications data={user.notifications}/>
            <Messages/>
            <UserAvatar src={user.avatarSrc} />
        </>
    )
}
Logged.propTypes = {};
export default React.memo(Logged);