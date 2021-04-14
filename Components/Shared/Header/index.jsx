import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Container, Row, Col} from 'reactstrap';
import Search from './components/search';
import AuthPanel from './components/auth-panel';
import Link from 'next/link';
import {useRouter} from "next/router";
import {useScrollDirection} from 'hooks/use-scroll';
import {
    toggleCategoriesMenuMobile,
    setPageName,
    setHeaderRect,
} from 'store/actions';
import {PAGE_NAMES} from 'utils/constants';
import {baseSelector} from 'store/reselect';
import {useSelector, useDispatch} from 'react-redux';

const Header = (props) => {
    const dispatch = useDispatch();
    const baseState = useSelector(baseSelector());
    const pageName =  baseState.pageName;
    const asideMenuInPage =  baseState.asideMenuInPage;
    const deviceParams =  baseState.deviceParams;

    const {deviceType, deviceSize, deviceWidth} = deviceParams;
    const {scrollDir, scrollY} = useScrollDirection();
    const router = useRouter();
    const headerRef = useRef();
    const styles = UseStyles({}, {link: true});
    const [searchMobileToggle, setSearchMobileToggle] = useState(false);
    const headerRect = baseState.headerRect || {};
    const [isLogged, setIsLogged] = useState(true); // Need to use as prop instead of state
    const toggleSearchBar = () => {
        setSearchMobileToggle(!searchMobileToggle)
    }

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            const isPage = PAGE_NAMES.find(e => '/' + e === url);
            if (isPage) dispatch(setPageName(isPage));
            else dispatch(setPageName(''));
            setSearchMobileToggle(false);
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== undefined && headerRef.current) {
            const _height = headerRef.current.getBoundingClientRect().height;
            dispatch(setHeaderRect(headerRef.current.getBoundingClientRect()))
            document.body.style.paddingTop = _height + 'px';
            headerRef.current.style.maxWidth = headerRef.current.parentNode.getBoundingClientRect().width + 'px';
        }
    }, [headerRef.current, pageName, deviceWidth]);

    useEffect(() => {
        if (typeof window !== undefined) {
            const isOpenMobile = searchMobileToggle ? headerRef.current.querySelector('form').getBoundingClientRect().height + 16/*MarginTop - absolute margin*/ : 0;
            if (deviceType === 'mobile' && scrollDir) {
                if (scrollY > headerRect.height + isOpenMobile && scrollDir === 'down') {
                    headerRef.current.style.top = (-headerRect.height - isOpenMobile) + 'px'
                }
                if (scrollY > headerRect.height + isOpenMobile && scrollDir === 'up') {
                    headerRef.current.style.position = 'fixed'
                    headerRef.current.style.top = '0px'
                }
                if (scrollY === 0) headerRef.current.style.position = 'absolute'
            }
        }
    }, [scrollDir, scrollY, deviceType, headerRef.current, headerRect, searchMobileToggle])

    useEffect(() => {
        const isPage = PAGE_NAMES.find(e => '/' + e === router.pathname);
        if (isPage) dispatch(setPageName(isPage));
        else dispatch(setPageName(''));
    }, [router]);

    return (
        <header ref={headerRef}>
            <Container>
                <Row>
                    <Col xs={pageName ? 4 : 6} sm={6} md={6} lg={pageName ? 6 : 3} xl={pageName ? 6 : 2}>
                        <div className={styles['logo-wrapper']} suppressHydrationWarning={true}>
                            {(!pageName && asideMenuInPage) ? <span className="icon-Hamburger toggle-categories_menu" onClick={() => dispatch(toggleCategoriesMenuMobile(true))}></span> : null}
                            <Link href="/" prefetch={false}>
                                <a>
                                    <img alt="logo" src="/images/logo2.svg"/>
                                </a>
                            </Link>
                        </div>
                    </Col>
                    {!pageName ? <Col xs={{order: 'last', size: 12}} lg={{order: 0, size: 6}} xl={{order: 0, size: 7}}>
                        <Search openMobile={searchMobileToggle} />
                    </Col> : ''}
                    <Col xs={pageName ? 8 : 6} sm={6} md={6} lg={pageName ? 6 : 3} xl={pageName ? 6 : 3}>
                        <div className={styles['mobile-toggle_search-bar']} suppressHydrationWarning={true}>
                            {!pageName && deviceType === 'mobile' ? <span className={`icon-Search ${searchMobileToggle ? 'opened-search-icon' : ''}`} onClick={toggleSearchBar}></span> : null}
                            <AuthPanel isLogged={isLogged} routePage={pageName} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
Header.defaultProps = {}
Header.propTypes = {};
export default React.memo(Header);
