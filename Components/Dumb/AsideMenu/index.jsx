import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import dummyList from 'dummyData/CategoriesList';
import UseStyles from './styles';
import Link from 'next/link';
import useOnClickOutside from 'hooks/use-onClick-outside';
import {
    toggleCategoriesMenuMobile,
    setAsideMenuClosest,
} from 'store/actions';
import HeaderBtn from 'Components/Dumb/HeaderButton';
import {
    GLOBAL_CONSTANTS
} from 'utils/constants';
import {useRouter} from 'next/router';
import {baseSelector} from 'store/reselect';
import {useSelector, useDispatch} from 'react-redux';

const List = (props) => {
    const activeCategoryPath = null;
    const [activeItemMobile, setActiveItemMobile] = useState(activeCategoryPath);
    const [activeCategoryName, setActiveCategoryName] = useState('');

    const router = useRouter();
    const moveTo = useCallback((item) => {
        props.closeBeforeRouting()
        setTimeout(() => {
            router.push({
                pathname: item.pathname,
            }, item.pathname, {})
        }, props.isMobile ? 400 : 0)
    }, [props.data, props.isMobile])

    const slideDeep = useCallback((item) => {
        if (props.isMobile && props.toggleDeep) {
            setActiveItemMobile(item.pathname);
            setActiveCategoryName(item.title);
            props.toggleDeep(true);
        }
    }, [props.toggleDeep, activeItemMobile, props.isMobile, activeCategoryName])

    return <ul
        type="none" className={`${props.labels ? 'sub-list_menu' : ''} ${!props.labels && props.isDeep ? 'slide-to-left' : ''}`}>
        {props.data.map((item, index) => {
            if (item.pathname === 'back-item') return <li key={index} className="back-to-parent_category">{item.title}</li>
            else return <li
                key={index}
                className={!props.labels && activeItemMobile === item.pathname ? 'active-mobile-item' : ''}>
                <a onClick={() => moveTo(item)}>
                    {item.title}
                </a>
                {item.labels ? <>
                    <span className="icon-Chevron---Right arrow_icon_list-item" onClick={() => slideDeep(item)}></span>
                    <List data={[...(activeCategoryName && [{title: activeCategoryName, pathname: 'back-item'}]), ...item.labels]} labels={true}/>
                </> : ''}
            </li>
        })}
    </ul>
}

List.defaultProps = {
    closeBeforeRouting: () => void(0),
}
List.propTypes = {
    closeBeforeRouting: PropTypes.func,
    isMobile: PropTypes.bool,
    isDeep: PropTypes.bool,
    toggleDeep: PropTypes.func,
    data: PropTypes.array,
    labels: PropTypes.bool,
}

const AsideMenu = React.memo((props) => {
    const dispatch = useDispatch();

    const baseState = useSelector(baseSelector());
    const categoriesMobileToggle = baseState.categoriesMobileToggle;
    const deviceParams = baseState.deviceParams;

    const [isDeep, setIsDeep] = useState(false);
    const asideRef = useRef();
    const mobileTopPanelRef = useRef();
    const {deviceType} = deviceParams;

    useOnClickOutside(asideRef, () => {
        if (categoriesMobileToggle && deviceType === 'mobile') {
            closeAsideMenu()
        }
    });

    const styles = UseStyles({} , {link: true});

    const toggleDeep = (val) => {
        setIsDeep(val)
    }

    function closeAsideMenu () {
        setTimeout(() => {
            toggleDeep(false)
        }, 400); // Should wait until the sideBar menu will gone to disappear
        dispatch(toggleCategoriesMenuMobile(false));
    }

    useEffect(() => {
        const isSSR = typeof window !== "undefined";
        if (isSSR && deviceType === 'mobile') {
            document.body.style.paddingRight = categoriesMobileToggle ? GLOBAL_CONSTANTS.bodyPaddingRight : '0';
            document.body.style.overflow = categoriesMobileToggle ? 'hidden' : 'initial';
        }
    }, [categoriesMobileToggle, deviceType]);

    useEffect(() => {
        dispatch(setAsideMenuClosest(true))

        return () => {
            dispatch(toggleCategoriesMenuMobile(false));
            dispatch(setAsideMenuClosest(false))
        }
    }, [])

    return (
        <aside className={`${styles['aside-menu-bar']} ${(categoriesMobileToggle) ? 'open-mobile-categories_menu' : ''}`}>
            <div ref={asideRef}>
                {deviceType === 'mobile' ? <div ref={mobileTopPanelRef} className="mobile-top-panel">
                    {isDeep ? <p onClick={() => setIsDeep(false)}>
                        <span className="icon-Chevron---Left icon-back-arrow"></span>
                        All categories
                    </p> : <>
                        <span className="icon-Close close-menu_icon" onClick={() => closeAsideMenu()}></span>
                        <HeaderBtn />
                    </>}
                </div> : ''}
                <List
                    data={dummyList}
                    isMobile={deviceType === 'mobile'}
                    toggleDeep={toggleDeep} isDeep={isDeep}
                    closeBeforeRouting={() => dispatch(toggleCategoriesMenuMobile(false))}/>
                {deviceType === 'mobile' ? <div className="login-creat-account_wrapper">
                    <Link href={'/login'}>
                        <a><span className="icon-My-Account"></span>Login</a>
                    </Link>
                    <Link href={'/register'}>
                        <a><span className="icon-Add-account"></span>Create Account</a>
                    </Link>
                </div> : ''}
            </div>
        </aside>
    )
});
AsideMenu.defaultProps = {};
AsideMenu.propTypes = {};
export default AsideMenu;
