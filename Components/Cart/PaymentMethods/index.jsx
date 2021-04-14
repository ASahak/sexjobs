import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';

const PaymentMethods = () => {
    const styles = UseStyles({}, {link: true});
    
    return (
        <div className={styles['payment-methods-container']}>
            <h4 className="title-content">Invoice Details</h4>
            <div className={styles['methods-list-wrapper']}>
                <ul>
                    <li>
                        <img src="/images/icons/ideal.png" alt=""/>
                        IDeal
                    </li>
                    <li>
                        <img src="/images/icons/Paysafe.png" alt=""/>
                        PaysafeCard
                    </li>
                    <li>
                        <img src="/images/icons/bank-card-sexjobs.png" alt=""/>
                        Creditcard
                        <img src="/images/icons/mastercard.png" alt=""/>
                        <img src="/images/icons/visa.png" alt=""/>
                    </li>
                    <li>
                        <img src="/images/icons/bankcontract.png" alt=""/>
                        Bancontact / Mister cash
                    </li>
                    <li>
                        <img src="/images/icons/giropay.png" alt=""/>
                        Giropay
                    </li>
                    <li className="methods-list-item--disable">
                        <span className="icon-Credits"></span>
                        Creditbundels kunnen niet
                        met credits worden betaald
                    </li>
                </ul>
            </div>
        </div>
    )
}
PaymentMethods.propTypes = {};
export default PaymentMethods;