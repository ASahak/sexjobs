import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import MySJBar from 'Components/Smart/MySJBar';
import Credentials from '../components/Credentials';
import Languages from '../components/Languages';
import ContactDetails from '../components/ContactDetails';
import InvoiceDetails from '../components/InvoiceDetails';
import NewEmail from '../components/edit/NewEmail';
import ForgotPassword from '../components/edit/ForgotPassword';
import ChangePassword from '../components/edit/ChangePassword';
import BillingInfo from '../components/edit/BillingInfo';
import DeleteAccount from '../components/edit/DeleteAccount';
import DeletedAccount from '../components/edit/DeletedAccount';
import useBus from 'hooks/use-bus';
import { toast } from 'react-toastify';
import {Phone} from 'Components/Shared/UI';

const Titles = {
    new_email: 'Change e-mail address',
    forgot_password: 'Send new password',
    change_password: 'Change password',
    billing_info: 'Edit billing information',
    delete_account: 'Account verwijderen',
    main: 'Account Settings',
}
const MainContent = (props) => {
    const [editView, setEditView] = useState('main');
    const [titleSJBar, setTitleSJBar] = useState(Titles.main);
    const styles = UseStyles({}, {link: true});

    useBus(
        'EMIT_REQUESTS_MESSAGES',
        ({payload}) => {
            toast(payload.message, {
                autoClose: 4000,
                type: payload.typeToast,
            })
        },
    []);

    const generateEditView = useCallback(() => {
        switch (editView) {
            case 'new_email':
                titleSJBar !== Titles.new_email && setTitleSJBar(Titles.new_email);
                return <NewEmail goToForgotPassword={(v) => setEditView(v)} />
            case 'forgot_password':
                titleSJBar !== Titles.forgot_password && setTitleSJBar(Titles.forgot_password);
                return <ForgotPassword />
            case 'change_password':
                titleSJBar !== Titles.change_password && setTitleSJBar(Titles.change_password);
                return <ChangePassword goToForgotPassword={(v) => setEditView(v)} />
            case 'billing_info':
                titleSJBar !== Titles.billing_info && setTitleSJBar(Titles.billing_info);
                return <BillingInfo />
            case 'delete_account':
                titleSJBar !== Titles.delete_account && setTitleSJBar(Titles.delete_account);
                return <DeleteAccount goToView={v => setEditView(v)} />
            case 'deleted_account':
                titleSJBar !== 'none' && setTitleSJBar('none');
                return <DeletedAccount />
            default:
                titleSJBar !== Titles.main && setTitleSJBar(Titles.main);
                return <>
                    <Credentials goToEdit={(v) => setEditView(v)}/>
                    <Languages />
                    <ContactDetails />
                    <InvoiceDetails goToEdit={(v) => setEditView(v)} />
                </>
        }
    }, [editView, titleSJBar])

    return (
        <>
            {titleSJBar !== 'none' ? <MySJBar
                onCloseLikeDialog={() => setEditView('main')}
                goBack={(historyPath) => setEditView(historyPath)}
                history={editView}
                dialogSave={true}
                type={editView === 'billing_info' ? 'like-dialog' : editView !== 'main' ? 'sub' : 'main'}
                title={titleSJBar}
            /> : ''}
            <div className={styles['main-content-settings']}>
                <Phone
                    likeMaterialInput={true}
                />
                { generateEditView() }
            </div>
        </>
    )
}
export default MainContent;