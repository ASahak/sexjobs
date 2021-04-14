import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Button} from 'Components/Shared/UI';

const TotalAdsCart = (props) => {
    const styles = UseStyles({}, {link: true});

    const cartItems = useCallback(() => {
        return props.cartItems.map((item, index) => (<div key={index} className="list_wrap-crt__item">
            <p>
                <b>{item.title}</b>
                <b>€ {item.price} <span className="icon-bin"></span></b>
            </p>
            <p>{item.description}</p>
        </div>))
    }, [props.cartItems])

    return (
        <div className={styles['cart-items-container']}>
            <div className={styles['title_wrap-crt']}>
                <span className="icon-Shopping-Cart">
                    <i>{props.cartItems.length}</i>
                </span>
                <div className="title_wrap-crt__right">
                    <p>Total</p>
                    <p>125 credits of 189.456</p>
                </div>
            </div>
            <div className={styles['list_wrap-crt']}>
                {cartItems()}
            </div>
            <div className={styles['btn-action_crt']}>
                <Button
                    size={'md'}
                    text="Afrekenen"
                    typeButton="primary"
                    margin={[10, 7, 0, 0]}
                />
                <Button
                    size={'md'}
                    text="Betaal met Credits"
                    typeButton="cta"
                    margin={[10, 0, 0, 7]}
                />
            </div>
        </div>
    )
}
TotalAdsCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
}
export default React.memo(TotalAdsCart);