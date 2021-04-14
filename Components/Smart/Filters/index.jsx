import React, {useCallback, useEffect, useState} from 'react';
import UseStyles from './styles';
import MySJSimpleTitleBar from 'Components/Dumb/MySJSimpleTitleBar';
import PropTypes from 'prop-types';
import SubComponents from './reorder';
import {
    Button
} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import {resetSelectedFilter} from 'store/actions';
import {baseSelector} from 'store/reselect';
import {useSelector, useDispatch} from 'react-redux';

const Filters = (props) => {
    const dispatch = useDispatch();
    const baseState = useSelector(baseSelector());
    const deviceParams = baseState.deviceParams;

    const [mobileOpen, setMobileOpen] = useState(false);
    const {deviceType} = deviceParams;
    const styles = UseStyles({}, {link: true});

    const toggleFiltersOverlay = useCallback(() => {
        setMobileOpen(!mobileOpen)
    }, [mobileOpen])

    useEffect(() => {
        const isSSR = typeof window !== "undefined";
        if (isSSR && deviceType === 'mobile') {
            document.body.style.paddingRight = mobileOpen ? GLOBAL_CONSTANTS.bodyPaddingRight : '0';
            document.body.style.overflow = mobileOpen ? 'hidden' : 'initial';
        }
    }, [mobileOpen, deviceType]);

    useEffect(() => {
        return () => {
            dispatch(resetSelectedFilter())
        }
    }, [])

    return (
        <div className={styles['main-filters-container']}>
            <MySJSimpleTitleBar>
                <div className="simple-bar_title">
                    <h4>
                        Filters
                        {deviceType === 'mobile' ? <span className="icon-Filters" onClick={() => toggleFiltersOverlay()}></span>: ''}
                    </h4>
                </div>
            </MySJSimpleTitleBar>
            <div className={`body-of-filters ${mobileOpen ? 'mobile-open_filters-wrapper' : ''}`}>
                {deviceType === 'mobile' ? <>
                    <div className="filter-mobile-title">
                        <h4>
                            Filters
                             <span className="icon-Close" onClick={() => toggleFiltersOverlay(false)}></span>
                        </h4>
                    </div>
                </>: ''}
                <div className="main-body-scrollable">
                    {props.filterTypes.map(component => SubComponents[component])}
                </div>
                {deviceType === 'mobile' ? <div className="fixed-show-result">
                    <Button
                        direction="center"
                        typeButton="primary"
                        text={'Show X Result'}
                    />
                </div> : ''}
            </div>
        </div>
    )
}

Filters.defaultProps = {
    filterTypes: [],
};
Filters.propTypes = {
    filterTypes: PropTypes.array,
};

export default React.memo(Filters);