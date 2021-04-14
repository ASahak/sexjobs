import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {baseSelector} from 'store/reselect';
import {useSelector} from 'react-redux';

const minElementWidth = 120;
const Tabs = (props) => {
    const baseState = useSelector(baseSelector());
    const deviceParams = baseState.deviceParams;

    const [firstRender, setFirstRender] = useState(true);
    const [activeTab, setActiveTab] = useState(props.activeTab);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [rowTranslateX, setRowTranslateX] = useState(0);
    const [tabWidth, setTabWidth] = useState(minElementWidth);
    const styles = UseStyles({
        rowTranslateX,
        transition: firstRender ? '0s' : '.3s',
        minWidth: minElementWidth,
        underlineWidth: tabWidth,
        underlineLeft: `${selectedTabIndex * tabWidth}px`,
        marginTopMobile: props.mobileToTop ? '-16px' : '0',
    }, {link: true});

    const tabContainerRef = useRef();

    const changeActiveTab = useCallback((key) => {
        setActiveTab(key);
        props.changeEmit(key);
    }, [props.changeEmit])

    useEffect(() => {
        if (props.activeTab !== activeTab) {
            setActiveTab(props.activeTab);
        }
    }, [props.activeTab])

    useEffect(() => {
        if (tabContainerRef.current && props.tabs.length) {
            const width = tabContainerRef.current.getBoundingClientRect().width;
            const everyElementWidth = width / props.tabs.length;
            setTabWidth(everyElementWidth < minElementWidth ? minElementWidth : everyElementWidth);
            if (firstRender){
                setTimeout(() => {
                    setFirstRender(false);
                }, 0);
            }
        }
    }, [tabContainerRef, props.tabs, firstRender, deviceParams]);

    useEffect(() => {
        const isInt = typeof activeTab === 'number';
        const currentIndex = isInt ? activeTab : props.tabs.findIndex(e => e.key === activeTab);
        if (currentIndex > -1) {
            if (tabContainerRef.current && tabWidth) {
                const padding = 30;
                const containerWidth = tabContainerRef.current.getBoundingClientRect().width;
                const untilElementWidth = (currentIndex + 1) * tabWidth;
                if (rowTranslateX < 0 && containerWidth > tabWidth * (props.tabs.length) - Math.abs(rowTranslateX)) {
                    const left = rowTranslateX + (containerWidth - (tabWidth * (props.tabs.length) - Math.abs(rowTranslateX)))
                    setRowTranslateX(left > 0 ? 0 : left);
                } else if (untilElementWidth - Math.abs(rowTranslateX) + padding > containerWidth) {
                    const forNextElement = (currentIndex < props.tabs.length - 1) ? padding : 0;
                    setRowTranslateX(containerWidth - (untilElementWidth + forNextElement))
                } else if (rowTranslateX < 0 && rowTranslateX < -(currentIndex * tabWidth - padding)) {
                    const forPrevElement = (currentIndex > 0) ? padding : 0;
                    setRowTranslateX(rowTranslateX + (Math.abs(rowTranslateX) - currentIndex * tabWidth) + forPrevElement)
                }
                setSelectedTabIndex(currentIndex);
            }
        }
    }, [activeTab, props.tabs, tabContainerRef, tabWidth, rowTranslateX]);

    return (
        <div className={`${styles['tabs-container']} with-mobile-shadow`} ref={tabContainerRef}>
            <div className="tab-row">
                {props.tabs.map((el, index) => <div
                    className={(activeTab === el.key || activeTab === index) ? 'active-tab' : ''}
                    key={el.key}
                    onClick={() => changeActiveTab(el.key)}>
                    <span>{el.title}</span>
                </div>)}
            </div>
        </div>
    )
}
Tabs.defaultProps = {
    activeTab: 0,
    tabs: [],
    changeEmit: () => void(0),
};
Tabs.propTypes = {
    mobileToTop: PropTypes.bool,
    activeTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    changeEmit: PropTypes.func,
    tabs: PropTypes.array,
};
export default React.memo(Tabs);