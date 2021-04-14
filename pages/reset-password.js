import React from 'react';
import UseStyles from 'static/styles/jss/base/globalPages';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from "reactstrap";
import dynamic from 'next/dynamic';
const ResetPassForm = dynamic(() => import('Components/LoginRegister/ResetPassword').then(_ => _.default), {ssr: true});

const ResetPassword = () => {
    const styles = UseStyles({}, {link: true});

    return (
        <>
            <NextSeo
                title="Reset Password"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={2} xl={3}></Col>
                    <Col xs={12} sm={12} md={8} xl={6}>
                        <div className={styles['forgot-pass_page']}>
                            <div>
                                <ResetPassForm />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default React.memo(ResetPassword);