import React from 'react';

const Messages = () => {
    return (
        <div className="messages-wrapper">
            <span className="icon-Message-_-Mail"></span>
            <span className="count--block">{5}</span>
        </div>
    )
}
export default React.memo(Messages);