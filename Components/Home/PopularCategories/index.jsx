import React, {useEffect, useRef, useState} from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {PersonalBadge} from 'Components/Smart/Badges';
import MySJSimpleTitleBar from 'Components/Dumb/MySJSimpleTitleBar';
const SJSlider = dynamic(() => import('Components/Plugins').then(_ => _.SJSlider), {ssr: false});
import useOnScreen from 'hooks/use-on-screen';
import {homeSelector} from 'store/reselect';
import {baseSelector} from 'store/reselect';
import {useSelector} from 'react-redux';

const PopularCategories = (props) => {
    const baseState = useSelector(baseSelector());
    const homeState = useSelector(homeSelector());
    const {deviceType} = baseState.deviceParams;
    const popularCategories = homeState.popularCategories || [];

    const [renderOnce, setRenderOnce]  = useState(false);

    const popCategory = useRef();
    const isOnViewPort = useOnScreen(popCategory);

    const styles = UseStyles({}, {link: true});

    useEffect(() => {
        if (isOnViewPort && !renderOnce) setRenderOnce(true);
    }, [isOnViewPort, renderOnce])

    return (
        <div style={{...props.style}} className={styles['main-wrapper_pop-category']} ref={popCategory}>
            <MySJSimpleTitleBar>
                <div className="simple-bar_title">
                    <h4>Popular categories</h4>
                </div>
            </MySJSimpleTitleBar>
            <div className={styles['popular-categories-container']}>
                {renderOnce ? deviceType === 'mobile' ? popularCategories.map(category => <PersonalBadge
                        key={category.id}
                        data={category}
                        type="category"
                    />) : <SJSlider
                    autoPlay={false}
                    containerPadding={'10px'}
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
                    {popularCategories.map(category => <PersonalBadge
                            key={category.id}
                            data={category}
                            type="category"
                        />)}
                </SJSlider> : ''}
            </div>
        </div>
    )
}
PopularCategories.defaultProps = {popularCategories: [],
    style: {},
}
PopularCategories.propTypes = {
    style: PropTypes.object,
}
export default React.memo(PopularCategories);

