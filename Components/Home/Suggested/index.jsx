import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {PersonalBadge} from 'Components/Smart/Badges';
import {
    getCurrentSuggestedData
} from 'store/reselect';
import SJSlider from 'Components/Plugins/Sliders/SJSlider';
import useOnScreen from 'hooks/use-on-screen';
import {homeSelector} from 'store/reselect';
import {useSelector} from 'react-redux';

const Suggested = (props) => {
    const homeState = useSelector(homeSelector());
    const suggestedData = getCurrentSuggestedData(homeState, props) || [];

    const [renderOnce, setRenderOnce]  = useState(false);
    const suggestedRef = useRef()
    const isOnViewPort = useOnScreen(suggestedRef);

    const styles = UseStyles({}, {link: true});

    useEffect(() => {
        if (isOnViewPort && !renderOnce) setRenderOnce(true);
    }, [isOnViewPort, renderOnce])

    return (
        <div style={{...props.style}} className={styles['main-suggested-wrapper']} ref={suggestedRef}>
            {props.children}
            <div className={styles['suggested-container']}>
                {renderOnce ? <SJSlider
                    autoPlay={false}
                    interval={2000}
                    mobileHalfPart={576}
                    column={{
                        xss: 1,
                        xs: 2,
                        sm: 3,
                        md: 3,
                        lg: 2,
                        xl: 4,
                    }}
                    nextPrevBtns={true}
                >
                    {suggestedData.map(person => <PersonalBadge
                        key={person.id}
                        data={person}
                        type="personal"
                    />)}
                </SJSlider> : ''}
            </div>
        </div>
    )
}
Suggested.defaultProps = {
    style: {},
}
Suggested.propTypes = {
    style: PropTypes.object,
    link: PropTypes.string,
    part: PropTypes.string,
}

export default React.memo(Suggested);

