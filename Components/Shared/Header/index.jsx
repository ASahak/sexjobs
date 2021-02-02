import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Container, Row, Col} from 'reactstrap';
import Search from './elements/search';
import AuthPanel from './elements/auth-panel';
import Link from 'next/link';
import {useRouter} from "next/router";
import {useScrollDirection} from 'hooks/use-scroll';
import useDevice from 'hooks/use-media-device';

const Header = (props) => {
    const {deviceType} = useDevice();
    const {scrollDir, scrollY} = useScrollDirection();
    const router = useRouter();
    const headerRef = useRef();
    const [page, setPage] = useState('');
    const styles = UseStyles();
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== undefined && headerRef.current) {
            const _height = headerRef.current.getBoundingClientRect().height;
            setHeaderHeight(_height);
            document.body.style.paddingTop = _height + 'px'
        }
    }, [headerRef.current]);

    useEffect(() => {
        if (typeof window !== undefined) {
            if (deviceType === 'mobile' && scrollDir) {
                if (scrollY > headerHeight && scrollDir === 'down') {
                    headerRef.current.style.top = -headerHeight + 'px'
                }
                if (scrollY > headerHeight && scrollDir === 'up') {
                    headerRef.current.style.position = 'fixed'
                    headerRef.current.style.top = '0px'
                }
                if (scrollY === 0) headerRef.current.style.position = 'absolute'
            }
        }
    }, [scrollDir, scrollY, deviceType, headerRef.current, headerHeight])

    useEffect(() => {
        if (router.pathname === '/login') setPage('login');
        else if (router.pathname === '/register') setPage('register');
        else setPage('');
    }, [router]);

    return (
        <header ref={headerRef}>
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={page ? 6 : 3}>
                        <div className={styles['logo-wrapper']}>
                            <Link href="/" prefetch={false}>
                                <a>
                                    <img src="/images/logo2.svg"/>
                                </a>
                            </Link>
                        </div>
                    </Col>
                    {!page ? <Col xs={6} sm={6} md={6}>
                        <Search />
                    </Col> : ''}
                    <Col xs={6} sm={6} md={page ? 6 : 3}>
                        <AuthPanel routePage={page}/>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
Header.propTypes = {};
export default Header;