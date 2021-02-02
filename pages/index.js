import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const Home = (props) => {

    return (
        <Container>
            <Row>
                <Col xs={12} md={3}>
                    Aside
                </Col>
                <Col xs={12} md={6}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto ea eligendi esse eveniet facere neque, nisi perspiciatis reiciendis similique sit tenetur totam. Cumque id minus nihil nulla odio rem.
                </Col>
            </Row>
        </Container>
    )
}
export default Home;