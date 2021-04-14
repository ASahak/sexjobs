import React from 'react';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import MySJBar from 'Components/Smart/MySJBar';
import MySJLinks from 'dummyData/MySJMenuList';
import UseStyles from 'static/styles/jss/base/globalPages';
import Link from 'next/link';

const MySexJobsPage = () => {
    const styles = UseStyles({}, {link: true});

    return (
        <>
            <NextSeo
                title="Account Settings"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={3} xl={2}>
                    </Col>
                    <Col xs={12} md={12} lg={6} xl={7}>
                        <MySJBar
                            type={'main'}
                            title="My SexJobs"
                        />
                        <div className={styles['links-container-of-sex-jobs']}>
                            {MySJLinks.map(item => !item.notVisible ? <Link key={item.link} href={item.link} prefetch={false}>
                                <a className="link-item">
                                    <span className={item.icon}></span>
                                    {item.title}
                                </a>
                            </Link> : '')}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default MySexJobsPage;