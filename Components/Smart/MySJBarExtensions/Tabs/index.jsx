import React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from 'Components/Plugins';

const _Tabs = (props) => {

    return (
        <>
            <Tabs {...props} />
        </>
    )
}
_Tabs.defaultProps = {
    activeTab: 0,
    tabs: [],
    changeEmit: () => void(0),
};
_Tabs.propTypes = {
    mobileToTop: PropTypes.bool,
    activeTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    changeEmit: PropTypes.func,
    tabs: PropTypes.array,
};
export default React.memo(_Tabs);