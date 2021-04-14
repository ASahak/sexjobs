import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';

const ProgressTracker = (props) => {
    const [activeTab, setActiveTab] = useState(props.activeTab);
    const [tabWidth, setTabWidth] = useState(null);

    const styles = UseStyles({
        pointer: props.clickable ? 'pointer' : 'default',
        maxWidth: tabWidth,
        marginTopMobile: props.mobileToTop ? '-16px' : '0',
    }, {link: true});


    const changeActiveTab = useCallback((key) => {
        setActiveTab(key);
        props.changeEmit(key);
    }, [props.changeEmit]);

    useEffect(() => {
        setActiveTab(props.activeTab)
    }, [props.activeTab])

    useEffect(() => {
        setTabWidth(100 / props.steps.length);
    }, [props.steps]);

    return (
        <div className={styles['progress-tracker-container']} key={props.activeTab}>
            {props.steps.map((el, index) => <div
                key={el.key}
                className={`tracker-step ${el.key === activeTab ? 'active-tracker-tab' : ''}`}
                onClick={() => props.clickable && changeActiveTab(el.key)}>
                <span className="step-index">{index + 1}</span>
                <span className="step-title">{el.title}</span>
            </div>)}
        </div>
    )
}
ProgressTracker.defaultProps = {
    steps: [],
    activeTab: 0,
    changeEmit: () => void(0),
    clickable: false,
}
ProgressTracker.propTypes = {
    clickable: PropTypes.bool,
    mobileToTop: PropTypes.bool,
    activeTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    changeEmit: PropTypes.func,
    steps: PropTypes.array,
};
export default React.memo(ProgressTracker);