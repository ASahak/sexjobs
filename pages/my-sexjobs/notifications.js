import React, {useState} from 'react';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import MySJBar from 'Components/Smart/MySJBar';
import dynamic from "next/dynamic";
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
import NotificationsData from 'dummyData/Notifications';
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const List = dynamic(() => import('Components/Notifications/List').then(_ => _.default), {ssr: false});
const Settings = dynamic(() => import('Components/Notifications/Settings').then(_ => _.default), {ssr: false});
const BarOptions = dynamic(() => import('Components/Dumb/BarOptions/Notifications/Main').then(_ => _.default), {ssr: false});

const Notifications = (props) => {
    const [titleSJBar, setTitleSJBar] = useState('Notifications');
    const [view, setView] = useState('main');

    const generateView = () => {
        switch (view) {
            case 'settings':
                titleSJBar !== 'Notification settings' && setTitleSJBar('Notification settings');
                return <Settings/>
            case 'main':
                titleSJBar !== 'Notifications' && setTitleSJBar('Notifications');
                return <List data={props.notifications} viaPopUp={false}/>
            default:
                return null
        }
    }

    return (
        <>
            <NextSeo
                title="Notifications"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12}>
                        <Breadcrumbs />
                    </Col>
                    <Col xs={12} md={4} lg={3} xl={2}>
                        <MySJMenu dialog={false} />
                    </Col>
                    <Col xs={12} md={8} lg={6} xl={7}>
                        <MySJBar
                            goBack={(historyPath) => setView(historyPath)}
                            history={view}
                            options={view === 'main' ? <BarOptions goToSettings={() => setView('settings')}/> : null}
                            type={view !== 'main' ? 'sub' : 'main'}
                            title={titleSJBar} />
                        <div className="main-content-of-section">
                            {generateView()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
Notifications.getInitialProps = async ({ctx}) => {
    return {
        notifications: NotificationsData
    }
}
export default Notifications;