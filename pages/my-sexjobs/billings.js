import React from 'react';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import MySJBar from 'Components/Smart/MySJBar';
import dynamic from "next/dynamic";
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
import MainBarOptions from 'Components/Dumb/BarOptions/Billings/Main';
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const BillingsList = dynamic(() => import('Components/Billings/List').then(_ => _.default), {ssr: false});

const Billings = (props) => {

    return (
        <>
            <NextSeo
                title="Billings"
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
                            type={'main'}
                            options={<MainBarOptions />}
                            title="Payments"
                        />
                        <BillingsList data={props.billings}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
Billings.getInitialProps = async ({ctx}) => {
    return {
        billings: [
            {
                fileName: 'Factura 1',
                paidVia: 'Paid via iDeal',
                price: 18.95,
                date: 'Fri Jan 22 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 2',
                paidVia: 'Paid via sms',
                price: 18.95,
                date: 'Fri Jan 10 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 3',
                paidVia: 'Paid via Master Card',
                price: 18.95,
                date: 'Fri Jan 19 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 4',
                paidVia: 'Paid via iDeal',
                price: 18.95,
                date: 'Fri Jan 2 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 5',
                paidVia: 'Paid via sms',
                price: 18.95,
                date: 'Fri Jan 20 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 6',
                paidVia: 'Paid via Master Card',
                price: 18.95,
                date: 'Fri Jan 29 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 1',
                paidVia: 'Paid via iDeal',
                price: 18.95,
                date: 'Fri Jan 12 2020 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 2',
                paidVia: 'Paid via sms',
                price: 18.95,
                date: 'Fri Jan 20 2020 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 3',
                paidVia: 'Paid via Master Card',
                price: 18.95,
                date: 'Fri Apr 29 2020 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 4',
                paidVia: 'Paid via iDeal',
                price: 18.95,
                date: 'Fri Jan 22 2020 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 2',
                paidVia: 'Paid via sms',
                price: 18.95,
                date: 'Fri Jan 20 2019 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 3',
                paidVia: 'Paid via Master Card',
                price: 18.95,
                date: 'Fri Jul 29 2019 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 3',
                paidVia: 'Paid via Master Card',
                price: 18.95,
                date: 'Fri Apr 19 2019 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 4',
                paidVia: 'Paid via iDeal',
                price: 18.95,
                date: 'Fri Jan 22 2018 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 2',
                paidVia: 'Paid via sms',
                price: 18.95,
                date: 'Fri Jan 20 2018 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                fileName: 'Factura 3',
                paidVia: 'Paid via Master Card',
                price: 18.95,
                date: 'Fri Jul 29 2018 16:26:37 GMT+0400 (Armenia Standard Time)',
            }
        ]
    }
}
export default Billings;