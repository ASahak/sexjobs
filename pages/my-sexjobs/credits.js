import React, {useState} from 'react';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import MySJBar from 'Components/Smart/MySJBar';
import dynamic from "next/dynamic";
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
import Balance from 'Components/Credits/Balance';
import UpgradeList from 'Components/Credits/UpgradeList';
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const DebitsCredits = dynamic(() => import('Components/Credits/DebitsCredits').then(_ => _.default), {ssr: false});
import MainBarOptions from 'Components/Dumb/BarOptions/Credits/Main';

const Credits = (props) => {
    const [debitsPage, setDebitsPage] = useState(false);

    return (
        <>
            <NextSeo
                title="Credits"
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
                            type={debitsPage ? 'sub' : 'main'}
                            options={debitsPage ? <MainBarOptions /> : null}
                            goBack={() => setDebitsPage(false)}
                            title={debitsPage ? 'Debits and Credits' : 'Credits'}/>
                        {!debitsPage ? <>
                            <Balance gotToDebits={() => setDebitsPage(true)} />
                            <UpgradeList />
                        </> : <DebitsCredits data={props.credits} />}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
Credits.getInitialProps = async ({ctx}) => {
    return {
        credits: [
            {
                date: 'Fri Jan 22 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
                count: -4,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
            }, {
                date: 'Fri Jan 10 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
                count: -2,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }, {
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
            }, {
                count: 42,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }, {
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 19 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: -12,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 2 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: -4,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }, {
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }, {
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }, {
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 20 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: -4,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 29 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: 50,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 12 2020 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: 200,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 20 2020 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: -4,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 20 2019 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: -41,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jul 29 2019 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: -4,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 22 2018 16:26:37 GMT+0400 (Armenia Standard Time)',
            }, {
                count: -40,
                products: [{
                    title: 'Topadvertentie - 2 dagen',
                    description: '24 jaar! Vandaag ESCORT in Zeeland'
                }],
                date: 'Fri Jan 20 2018 16:26:37 GMT+0400 (Armenia Standard Time)',
            }
        ]
    }
}
export default Credits;