import React, {useState} from 'react';
import UseStyles from 'static/styles/jss/base/globalPages';
import dynamic from 'next/dynamic';
import {Container, Row, Col} from 'reactstrap';
import {NextSeo} from "next-seo";
const RegisterForm = dynamic(() => import('Components/LoginRegister/RegisterForm').then(_ => _.default), {ssr: true});
import Congratulates from 'Components/LoginRegister/Congratulates';

const Register = (props) => {
    const styles = UseStyles({}, {link: true});
    const [key, setKey] = useState(1);

    return (
        <>
            <NextSeo
                title="Register"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={2} xl={3}></Col>
                    <Col xs={12} sm={12} md={8} xl={6}>
                        <div className={styles['register-page']}>
                            <div>
                                {key === 1 ? <RegisterForm completeNext={() => setKey(2)}/> : <Congratulates />}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Register;