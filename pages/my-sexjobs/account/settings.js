import React from 'react';
import PropTypes from "prop-types";
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
import dynamic from 'next/dynamic';
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const MainContent = dynamic(() => import('Components/Account/Settings/MainContent').then(_ => _.default), {ssr: false});

const AccountSettings = (props) => {

    return (
        <>
            <NextSeo
                title="Account Settings"
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
                        <MainContent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
AccountSettings.defaultProps = {
}
AccountSettings.propTypes = {
}
AccountSettings.getInitialProps = async (props) => {
    return {}
}
export default AccountSettings;