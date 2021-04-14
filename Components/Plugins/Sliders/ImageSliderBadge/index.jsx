import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Image} from 'Components/Shared/UI';
import {baseSelector} from 'store/reselect';
import {useSelector} from 'react-redux';

const ImageSliderBadge = (props) => {
    const baseState = useSelector(baseSelector());
    const deviceParams = baseState.deviceParams;

    let [slideIndex, setSlideIndex] = useState(0);
    const [rowTranslateX, setRowTranslateX] = useState(0);
    const [disableBtns, setDisableBtns] = useState({
        prev: true,
        next: false,
    });

    const sliderContainerRef = useRef();
    const {deviceSize, deviceWidth} = deviceParams;

    const styles = UseStyles({
        translateX: `translateX(-${rowTranslateX}px)`,
    }, {link: true});

    const slideTo = useCallback((dir, event) => {
        event.preventDefault();
        event.stopPropagation();
        if (dir === 'next') {
            const index = slideIndex === props.src.length - 1 ? props.src.length - 1 : ++slideIndex;
            setSlideIndex(index);
        } else {
            setSlideIndex(slideIndex <= 0 ? 0 : --slideIndex)
        }
    }, [props.src, slideIndex]);

    useEffect(() => {
        const containerWidth = sliderContainerRef.current.getBoundingClientRect().width;
        setRowTranslateX(slideIndex * containerWidth);
        setDisableBtns({
            prev: slideIndex === 0,
            next: slideIndex === props.src.length - 1,
        })
    }, [slideIndex, props.src, deviceSize, deviceWidth])

    return (
        <div className={styles['slider-container']} ref={sliderContainerRef}>
            <div className="slider_badge_row">
                {props.src.map(image => <Image key={image} src={image} defaultSrc="/images/notFound.png"/>)}
            </div>
            {props.src.length > 1 ? <>
                <span
                    className="lnr lnr-chevron-left sj-slider_prev-btn"
                    disabled={disableBtns.prev}
                    disable-touch-events="true"
                    onClick={(e) => slideTo('prev', e)}></span>
                <span
                    disable-touch-events="true"
                    className="lnr lnr-chevron-right sj-slider_next-btn"
                    disabled={disableBtns.next}
                    onClick={(e) => slideTo('next', e)}></span>
            </> : ''
            }
        </div>
    )
}
ImageSliderBadge.defaultProps = {
    src: [],
};
ImageSliderBadge.propTypes = {
    src: PropTypes.array,
};
export default React.memo(ImageSliderBadge);
