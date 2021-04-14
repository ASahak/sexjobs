import React from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PropTypes from "prop-types";
import {
    Avatar,
} from 'Components/Shared/UI';

const ListItem = React.forwardRef((props, ref) => {
    const isItemObject = props.itemField.constructor === Object;
    const title = isItemObject ? props.itemField.title : props.itemField;

    return (
        <>
            {(props.withAvatar || props.withIcon) ? <ListItemIcon>
                {props.withAvatar ?
                    <Avatar
                        avatarBG={props.avatarBG}
                        avatarColor={props.avatarColor}
                        width={25}
                        height={25}
                        avatarSrc={props.itemField.imgPath}
                        name={props.itemField.title}
                    />
                    : <span className={`icon icon-${props.itemField.icon}`}></span>}
            </ListItemIcon> : null}
            <ListItemText primary={title} />
        </>
    )
});

ListItem.defaultProps = {
    withAvatar: false,
    withIcon: false,
    itemField: {},
}
ListItem.propTypes = {
    itemField: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
    ]),
    withAvatar: PropTypes.bool,
    withIcon: PropTypes.bool,
    avatarBG: PropTypes.string,
    avatarColor: PropTypes.string,
};

export default ListItem;