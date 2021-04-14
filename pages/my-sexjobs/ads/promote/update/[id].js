import React from 'react';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import MySJBar from 'Components/Smart/MySJBar';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const UpdatePlanView = dynamic(() => import('Components/Ads/UpdatePlan').then(_ => _.default), {ssr: false});

const PromoteUpdateAd = (_props) => {
    const router = useRouter();

    return (
        <>
            <NextSeo
                title="Promote Update ID"
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
                                pathname: '/my-sexjobs/ads/promote/564654684'
                            })}
                            dialogSave={false}
                            type="like-dialog"
                            title="Automatische updates inplannen"
                        />
                        <UpdatePlanView />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default PromoteUpdateAd;