import React, {useState} from 'react';
import {NextSeo} from 'next-seo';
import {Col, Container, Row} from 'reactstrap';
import MySJBar from 'Components/Smart/MySJBar';
import dynamic from "next/dynamic";
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
const MySJMenu = dynamic(() => import('Components/Dumb/MySJMenu').then(_ => _.default), {ssr: false});
const CartList = dynamic(() => import('Components/Cart/CartItems').then(_ => _.default), {ssr: false});
const InvoiceDetails = dynamic(() => import('Components/Cart/InvoiceDetails').then(_ => _.default), {ssr: false});
const PaymentMethods = dynamic(() => import('Components/Cart/PaymentMethods').then(_ => _.default), {ssr: false});
const UpdateInvoice = dynamic(() => import('Components/Profile/EditAccount/UpdateInvoiceForm').then(_ => _.default), {ssr: false});

const Cart = (props) => {
    const [titleSJBar, setTitleSJBar] = useState(null);
    const [view, setView] = useState('main');

    const generateView = () => {
        switch (view) {
            case 'edit_invoice':
                titleSJBar !== 'Update Invoice details' && setTitleSJBar('Update Invoice details');
                return <UpdateInvoice data={{}}/>
            case 'main':
                titleSJBar !== 'Shopping Cart' && setTitleSJBar('Shopping Cart');
               return props.cart.length ? <>
                    <CartList data={props.cart}/>
                    <InvoiceDetails goToEdit={() => setView('edit_invoice')} />
                    <PaymentMethods />
               </> : <>
                   <h4 className="title-content">Your shopping cart is empty</h4>
                   <p className="sub-title-content">
                       Reach new and potential customers on your ad by using the different promotion products on sexjobs.
                   </p>
               </>
            default:
                return null
        }
    }

    return (
        <>
            <NextSeo
                title="Cart"
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
Cart.getInitialProps = async ({ctx}) => {
    return {
        cart: [
            {
                title: 'Credit bundle',
                desc: '50 Credits',
                price: 74.95,
                type: 'bundle',
            }, {
                type: 'gold',
                title: 'Gold ad',
                desc: 'Aanbieding geldig tot 28 Januari, 3days left..',
                date: 'Fri Jan 22 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
                price: 74.95,
            }, {
                type: 'sticker',
                title: 'Opvalsticker',
                desc: 'Lieve dame pearl ontvangst in omgeving udenhout !',
                date: 'Fri Jan 12 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
                price: 149.50,
            }, {
                type: 'silver',
                title: 'Silver ad',
                desc: 'Ondeugende studente! Rotterdam',
                date: 'Fri Jan 18 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
                price: 29.50,
            }
        ]
    }
}
export default Cart;