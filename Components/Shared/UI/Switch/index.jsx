import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import {useSwitchStyles} from '../makeStylesUI';

const CustomSwitch = (props) => {
    const classesSwitch = useSwitchStyles({});

    return (
        <Switch
            {...props}
            classes={classesSwitch}
        />
    )
}
export default React.memo(CustomSwitch);