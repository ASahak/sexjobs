import React from 'react';
import UseStyles from 'static/styles/jss/base/globalPages';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import { Button } from 'Components/Shared/UI';

const VerifiedAccount = () => {
    const styles = UseStyles({}, {link: true});

    return (
        <>
            <NextSeo
                title="Verified"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={2} xl={3}></Col>
                    <Col xs={12} sm={12} md={8} xl={6}>
                        <div className={styles['verified-page']}>
                            <h5>Welkome bij Sexjobs</h5>
                            <p>
                                Je account is geactiveerd. Je kunt meteen beginnen!
                            </p>
                            <Button
                                icon={{direction: 'left', className: 'icon-Add'}}
                                type="submit"
                                size={'md'}
                                text="Plaats een advertentie"
                                typeButton="primary"
                                direction="left"
                                width={220}
                                margin={[50, 0, 0, 0]}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default React.memo(VerifiedAccount);