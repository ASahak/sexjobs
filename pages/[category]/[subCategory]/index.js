import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Container, Row, Col} from 'reactstrap';
import { NextSeo } from 'next-seo';
import {getTitleByCategory} from 'utils/handlers';
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';

const SubCategory = (props) => {
    const router = useRouter();
    const [title, setTitle] = useState('');

    useEffect(async () => {
        if (router.query && router.query.title) {
            setTitle(router.query.title)
        } else {
            const data = await getTitleByCategory(router.query, 'subCategory')
            setTitle(data)
        }
    }, [router.query])

    return (
        <>
            <NextSeo
                title={title}
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12}>
                        <Breadcrumbs />
                    </Col>
                    <Col xs={12}>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default SubCategory;