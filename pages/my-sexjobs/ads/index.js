import React from 'react';
import PropTypes from "prop-types";
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
import dynamic from 'next/dynamic';
import {fetchMyAds} from 'store/sagas/ads';
const CartItems = dynamic(() => import('Components/Ads/TotalAdsCart').then(_ => _.default), {ssr: false});
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const MainContent = dynamic(() => import('Components/Ads/MainContent').then(_ => _.default), {ssr: false});

const Ads = (props) => {

    return (
        <>
            <NextSeo
                title="Ads"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12}>
                        <Breadcrumbs />
                    </Col>
                    <Col xs={12} md={4} lg={3} xl={2}>
                        <MySJMenu dialog={false}/>
                    </Col>
                    <Col xs={12} md={8} lg={6} xl={7}>
                        <MainContent/>
                    </Col>
                    <Col xs={12} sm={12} md={{offset: 3, size: 9}} lg={{offset: 0, size: 3}} xl={{offset: 0, size: 3}}>
                        <CartItems cartItems={props.cartItems}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
Ads.defaultProps = {
}
Ads.propTypes = {
}
Ads.getInitialProps = async (props) => {
    fetchMyAds().next();

    return {
        cartItems: [
            {
                title: 'Gouden',
                description: 'Wil jij heerlijk gezogen worden, Kom dan langs?!',
                price: '34.65',
            }, {
                title: 'Gouden 2',
                description: 'Wil jij heerlijk gezogen worden, Kom dan langs?! 2',
                price: '34.65',
            }, {
                title: 'Gouden 3',
                description: '50 Credits',
                price: '34.65',
            }, {
                title: 'Gouden 4',
                description: 'Wil jij heerlijk gezogen worden, Kom dan langs?!',
                price: '34.65',
            }
        ],
    };
}
export default Ads;