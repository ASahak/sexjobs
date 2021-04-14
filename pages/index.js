import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import {
    fetchPopularCategories,
    fetchSuggestedItems,
} from 'store/sagas/home';
import Link from 'next/link';
const Breadcrumbs = dynamic(() => import('Components/Dumb/Breadcrumbs').then(_ => _.default), {ssr: true});
const AsideMenu = dynamic(() => import('Components/Dumb/AsideMenu').then(_ => _.default), {ssr: true});
const PopularCategories = dynamic(() => import('Components/Home/PopularCategories').then(_ => _.default), {ssr: true});
const Suggested = dynamic(() => import('Components/Home/Suggested').then(_ => _.default), {ssr: true});
const MySJSimpleTitleBar = dynamic(() => import('Components/Dumb/MySJSimpleTitleBar').then(_ => _.default), {ssr: true});
const Information = dynamic(() => import('Components/Home/Information').then(_ => _.default), {ssr: true});

const Home = (props) => {
    return (
        <>
            <NextSeo
                title="Home"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12}>
                        <Breadcrumbs />
                    </Col>
                    <Col xs={12} md={4} lg={3} xl={2}>
                        <AsideMenu />
                    </Col>
                    <Col xs={12} md={8} lg={6} xl={7}>

                        {/*Popular Categories*/}
                        <PopularCategories />

                        {/*Suggested*/}
                        <Suggested
                            part="one"
                        >
                            <MySJSimpleTitleBar style={{marginTop: '16px'}}>
                                <div className="simple-bar_title">
                                    <div>
                                        <Link href={'/'}>
                                            <a>Nu beschikbaar!</a>
                                        </Link>
                                        <p>
                                            <span className="icon-Advertenties"></span>
                                            175
                                        </p>
                                    </div>
                                </div>
                            </MySJSimpleTitleBar>
                        </Suggested>
                        <Suggested
                            part="two"
                        >
                            <MySJSimpleTitleBar style={{marginTop: '16px'}}>
                                <div className="simple-bar_title">
                                    <h4>Meest bekeken</h4>
                                </div>
                            </MySJSimpleTitleBar>
                        </Suggested>

                        <Suggested
                            part="three"
                        >
                            <MySJSimpleTitleBar style={{marginTop: '16px'}}>
                                <div className="simple-bar_title">
                                    <h4>Uitgelichte advertenties</h4>
                                </div>
                            </MySJSimpleTitleBar>
                        </Suggested>

                        {/*Information*/}
                        <Information />

                        <MySJSimpleTitleBar>
                            <div className="simple-bar_title">
                                <h4>Ontdek ruim 15.600 advertenties op Sexjobs.nl</h4>
                            </div>
                        </MySJSimpleTitleBar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
Home.getInitialProps = async (props) => {
    const { isServer } = props.ctx;

    fetchPopularCategories().next();
    fetchSuggestedItems().next();

    return { isServer };
};
export default Home;