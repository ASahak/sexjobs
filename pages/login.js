import React from 'react';
import UseStyles from 'static/styles/jss/base/globalPages';
import dynamic from 'next/dynamic';
import {Container, Row, Col} from 'reactstrap';
import {NextSeo} from 'next-seo';
const LoginForm = dynamic(() => import('Components/LoginRegister/LoginForm').then(_ => _.default), {ssr: true});

const Login = (props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <>
            <NextSeo
                title="Login"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={2} xl={3}></Col>
                    <Col xs={12} sm={12} md={8} xl={6}>
                        <div className={styles['login-page']}>
                            <div>
                                <LoginForm />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Login;