import React, {useEffect, useMemo, useState} from 'react';
import PropTypes from "prop-types";
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
import MySJBar from 'Components/Smart/MySJBar';
import dynamic from 'next/dynamic';
import UseStyles from 'static/styles/jss/base/globalPages';
import {dispatch} from 'hooks/use-bus';
import {Button} from 'Components/Shared/UI';
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const MyProfilesList = dynamic(() => import('Components/Profile/MyProfilesList').then(_ => _.default), {ssr: false});
const AccountView = dynamic(() => import('Components/Profile/AccountView').then(_ => _.default), {ssr: false});
const EditAccount = dynamic(() => import('Components/Profile/EditAccount').then(_ => _.default), {ssr: false});


const Profile = (props) => {
    const styles = UseStyles({}, {link: true});

    const [account, setAccount] = useState(null);
    const ifCompany = props.profiles.accountType === 'company';
    const [step, setStep] = useState(ifCompany ? 'listView' : 'accountView');

    const GenerateView = useMemo(() => {
        switch (step){
            case 'listView':
                return <MyProfilesList profilesList={props.profiles.data.list} goToPrivateProfile={(profile) => {
                    setStep('accountView');
                    setAccount(profile)
                }}/>
            case 'accountView':
                return <AccountView data={account} >
                    <Button
                        icon={{direction: 'left', className: 'icon-Edit'}}
                        size={'md'}
                        text="Edit"
                        typeButton="primary"
                        width={180}
                        margin={[30, 0, 0, 0]}
                        onClick={() => setStep('editView')}
                    />
                </AccountView>
            case 'editView':
                return <EditAccount data={account} />
            default:
                return ''
        }
    }, [step, account, props.profiles])

    useEffect(() => {
        if (step === 'listView') setAccount(null)
    }, [step])

    useEffect(() => {
        if (!ifCompany && props.profiles) {
            setAccount(props.profiles.data);
        }
    }, [ifCompany, props.profiles])

    return (
        <>
            <NextSeo
                title="Profile"
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
                            type={ step === 'editView' ? 'like-dialog' : step === 'listView' || !ifCompany ? 'main' : 'sub'}
                            title={step === 'editView' ? 'Profiel wijzigen' : account ? account.name + '\'s profile' : 'My Profiles'}
                            goBack={() => setStep(prevState => prevState === 'editView' ? 'accountView' : 'listView')}
                            onCloseLikeDialog={() => setStep('accountView')}
                            onSaveLikeDialog={() => dispatch('SUBMIT_FORM_EDIT_VIEW_PROFILE')}
                        />

                        <div className={styles['profile-page']}>
                            {GenerateView}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
Profile.defaultProps = {
    profiles: {},
}
Profile.propTypes = {
    profiles: PropTypes.object,
}
Profile.getInitialProps = async (props) => {

    return {
        profiles: {
            accountType: 'company',
            data: {
                // name: 'Maison Mario',
                // avatarSrc: '/images/profileAvatar.jpg',
                // age: 34,
                // owner: true,
                // id: 1,
                // birthDate: '15-12-1984',
                list: [
                    {name: 'Maison Mario', avatarSrc: '/images/profileAvatar.jpg', owner: true, birthDate: '15-12-1984', age: 34, id: 1},
                    {name: 'Catharina', avatarSrc: '', id: 2},
                    {name: 'Karin', avatarSrc: '', id: 3},
                    {name: 'Nina', avatarSrc: '', id: 4},
                    {name: 'Sabine', avatarSrc: '', id: 5},
                ]
            }
        }
    };
}
export default Profile;