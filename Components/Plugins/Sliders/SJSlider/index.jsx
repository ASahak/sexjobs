import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {baseSelector} from 'store/reselect';
import {useSelector} from 'react-redux';

let autoPlayDir = 'next';
const Slider = (props) => {
    const baseState = useSelector(baseSelector());
    const deviceParams = baseState.deviceParams;

    const [autoPlayIntervalID, setAutoPlayIntervalID] = useState(null);
    const [touchMovePosition, setTouchMovePosition] = useState(null);
    const [rowTranslateX, setRowTranslateX] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [touchDirection, setTouchDirection] = useState({
        start: null,
        dir: null,
    });
    let [slideIndex, setSlideIndex] = useState(0);
    const [disableBtns, setDisableBtns] = useState({
        prev: true,
        next: false,
    });

    const {deviceSize, deviceWidth} = deviceParams;

    const styles = UseStyles({
        transition: touchMovePosition !== null ? '0s' : '.4s',
        containerPadding: props.containerPadding,
        marginRight: props.itemMargin,
        elementsWidth: itemWidth,
        translateX: `translateX(-${rowTranslateX}px)`,
    }, {link: true});

    const sliderContainerRef = useRef();

    const onInterval = () => {
        if (props.autoPlay) {
            if (autoPlayIntervalID) {
                setAutoPlayIntervalID(null);
                clearInterval(autoPlayIntervalID);
            }
            setAutoPlayIntervalID(setInterval(() => {
                slideTo('autoplay');
            }, props.interval));
        }
    }

    const slideTo = useCallback((dir) => {
        if (dir === 'autoplay') {
            autoPlayDir = autoPlayDir === 'next' && slideIndex < props.children.length - props.column[deviceSize] ? 'next'
                : slideIndex === 0 ? 'next' : 'prev';
        } else {
            if (autoPlayIntervalID) {
                setAutoPlayIntervalID(null);
                clearInterval(autoPlayIntervalID);
            }
        }
        if ((dir === 'autoplay' ? autoPlayDir : dir) === 'next') {
            if ((slideIndex + props.column[deviceSize] - 1) === props.children.length - 1) {
                onInterval();
            }
            const index = slideIndex === props.children.length - props.column[deviceSize] ? props.children.length - props.column[deviceSize] : ++slideIndex;
            setSlideIndex(index);
            autoPlayDir = 'next';
        } else {
            if (slideIndex === 0) {
                onInterval();
            }
            setSlideIndex(slideIndex <= 0 ? 0 : --slideIndex)
            autoPlayDir = 'prev';
        }
    }, [props.children, props.column, deviceSize, slideIndex, autoPlayIntervalID, autoPlayDir])

    const touchEnd = (evt) => {
        setTouchMovePosition(null);
        if (evt.target && evt.target.hasAttribute('disable-touch-events')) return;
        setTouchDirection({
            start: touchDirection.start,
            dir: evt.changedTouches[0].clientX + 5 < touchDirection.start ? 'next' : evt.changedTouches[0].clientX > touchDirection.start + 5 ? 'prev' : null,
        })
    }
    const touchMove = (evt) => {
        const touchMoveTranslate = touchMovePosition + touchDirection.start - evt.targetTouches[0].clientX;
        setRowTranslateX(touchMoveTranslate < 0 ? 0 : maxWidth > touchMoveTranslate ? touchMoveTranslate : maxWidth);
    }

    const touchStart = (evt) => {
        setTouchMovePosition(rowTranslateX);
        if (evt.target && evt.target.hasAttribute('disable-touch-events')) return;
        if (autoPlayIntervalID) {
            setAutoPlayIntervalID(null);
            clearInterval(autoPlayIntervalID);
        }
        setTouchDirection({
            start: evt.targetTouches[0].clientX,
            dir: null,
        })
    }

    useEffect(() => {
        if (touchDirection.dir) {
            slideTo(touchDirection.dir);
        }
    }, [touchDirection]);

    useEffect(() => {
        onInterval();
    }, [props.autoPlay, slideIndex, deviceWidth])

    useEffect(() => {
        setSlideIndex(0);
    }, [deviceSize])

    useEffect(() => {
        const containerWidth = sliderContainerRef.current?.getBoundingClientRect().width;
        const widthItem = (containerWidth - (props.itemMargin * (props.column[deviceSize] - 1))) /
            (props.column[deviceSize] + (props.mobileHalfPart && props.mobileHalfPart > deviceWidth ? 0.5 : 0))
        setItemWidth(widthItem)
    }, [sliderContainerRef, props.column, deviceSize, props.itemMargin, props.mobileHalfPart])

    useEffect(() => {
        const widthItem = (itemWidth + (props.itemMargin / props.column[deviceSize]) * props.column[deviceSize]);
        const isHalfPartWidth = props.children.length - 1 === (slideIndex + props.column[deviceSize] - 1) &&
        props.mobileHalfPart && props.mobileHalfPart > deviceWidth ? (widthItem - props.itemMargin) / 2 : 0;

        setRowTranslateX(slideIndex * widthItem - isHalfPartWidth);
        setMaxWidth((props.children.length - props.column[deviceSize]) * widthItem - isHalfPartWidth)
        setDisableBtns({
            prev: slideIndex === 0,
            next: slideIndex === props.children.length - props.column[deviceSize],
        })
    }, [slideIndex, props.children, deviceSize, deviceWidth, itemWidth, props.itemMargin])

    useEffect(() => {
        if (sliderContainerRef.current) {
            const wrapper = sliderContainerRef.current.querySelector(':scope > div');
            Array.from(wrapper.children, (child) => {
                if (!child.classList.contains('sj-slider-slide')) {
                    child.classList.add('sj-slider-slide')
                }
            })
        }
    }, [props.column, props.children, sliderContainerRef, deviceSize])

    useEffect(() => {
        return () => {
            if (autoPlayIntervalID) {
                setAutoPlayIntervalID(null);
                clearInterval(autoPlayIntervalID);
            }
        }
    }, [])

    return (
        <div className={styles['sj_slider-container']}>
            {props.nextPrevBtns && (!props.mobileHalfPart || props.mobileHalfPart <= deviceWidth) ? <>
                    <span className="lnr lnr-chevron-left sj-slider_prev-btn" disabled={disableBtns.prev} onClick={() => slideTo('prev')}></span>
                    <span className="lnr lnr-chevron-right sj-slider_next-btn" disabled={disableBtns.next} onClick={() => slideTo('next')}></span>
                </> : ''
            }
            <div className="sj-slider-row" ref={sliderContainerRef}>
                <div
                    onTouchEnd={(e) => touchEnd(e)}
                    onTouchMove={(e) => touchMove(e)}
                    onTouchStart={(e) => touchStart(e)}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
Slider.defaultProps = {
    autoPlay: false,
    interval: 3000,
    column: {
        xss: 1,
        xs: 2,
        sm: 3,
        md: 4,
        lg: 5,
        xl: 6,
    },
    nextPrevBtns: true,
    itemMargin: 10,
    containerPadding: '0px',
};
Slider.propTypes = {
    containerPadding: PropTypes.string,
    autoPlay: PropTypes.bool,
    mobileHalfPart: PropTypes.number,
    interval: PropTypes.number,
    itemMargin: PropTypes.number,
    column: PropTypes.shape({
        xss: PropTypes.number,
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
    }).isRequired,
    nextPrevBtns: PropTypes.bool,
}
export default React.memo(Slider);
