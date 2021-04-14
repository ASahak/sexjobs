import React from 'react';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import MySJBar from 'Components/Smart/MySJBar';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const View = dynamic(() => import('Components/Ads/Edit/View').then(_ => _.default), {ssr: false});

const ViewAd = (_props) => {
    const router = useRouter();

    return (
        <>
            <NextSeo
                title="Edit ID"
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
                        <MySJBar
                            onCloseLikeDialog={() => router.push({
                                pathname: '/my-sexjobs/ads'
                            })}
                            dialogSave={true}
                            type="like-dialog"
                            title="Edit  Advertisement"
                        />
                        <View />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ViewAd;