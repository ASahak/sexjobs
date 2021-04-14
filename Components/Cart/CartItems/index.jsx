import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import { format } from 'date-fns';
import {Input} from 'Components/Shared/UI';

const formatDate = (date) => {
    return format(new Date(date), 'dd/MM, hh:mm')
}
const Item = ({title, type, date, desc, price}) => {

    const titleIcon = useMemo(() => {
        switch (type) {
            case 'gold':
                return <img src="/images/icons/gold_icon.svg" alt="gold"/>
            case 'silver':
                return <img src="/images/icons/silver_icon.svg" alt="silver"/>
            case 'sticker':
                return <span className="sticker-badge">Sticker</span>
            default :
                return null
        }
    }, [])

    return (
        <div className="cart-list-container__item">
            <h4>
                <span className="cart-list-container__item-left">
                    {title}
                    {titleIcon}
                </span>
                <span>
                    <b>
                        € {price}
                    </b>
                    <span className="icon-Delete"></span>
                </span>
            </h4>
            <p>{desc}</p>
            {date && <p>10 days from {formatDate(date)}</p>}
        </div>
    )
}
const CartList = (props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['cart-list-container']}>
            <h4 className="title-content">In je winkelmand</h4>
            {props.data?.map((crt, index) => <Item key={index} {...crt}/>)}
            <div className={styles['cart-list-container__checkbox-wrapper']}>
                <Input
                    type="checkbox"
                    margin={[0]}
                    label={{title: 'Opvalproducten betalen uit nieuwe creditbundel', color: '#fff', forId: 'for-id-input_cart'}}
                />
            </div>
            <div className={styles['cart-list-container__total']}>
                <h3>Total € {256.40}</h3>
            </div>
        </div>
    )
}

CartList.propTypes = {
    data: PropTypes.array.isRequired,
}
export default CartList;