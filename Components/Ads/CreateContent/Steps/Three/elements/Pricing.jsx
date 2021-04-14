import React, {useState, useImperativeHandle, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Switch, Select, Input, Button} from 'Components/Shared/UI';
import {PRICES} from 'utils/constants';
import {v4} from 'uuid';
import UseStyles from './styles';

const PriceModel = (prop) => ({
    [prop]: null,
    price: null,
})
const Pricing = React.forwardRef((props, ref) => {
    const [prices, setPrices] = useState([]);
    const [isPricing, setIsPricing] = useState(false);
    const styles = UseStyles({}, {link: true});

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(prices);
        }

    }));

    const changePrice = useCallback((prop, value, item) => {
        item[prop] = value;
        const _prices = [...prices];
        setPrices(_prices);
    }, [prices])

    const resetPriceRow = useCallback((item) => {
        item[props.name] = null;
        item.price = null;
        const _prices = [...prices];
        setPrices(_prices);
    }, [prices, props.name]);

    const removePriceRow = useCallback((id) => {
        const _prices = [...prices];
        const findIndex = _prices.findIndex(e => e.id === id);
        if (findIndex > -1) _prices.splice(findIndex, 1);
        setPrices(_prices);
    }, [prices]);

    const addPrice = () => {
        setPrices(prevState => [...prevState, {
            id: v4(),
            ...PriceModel(props.name)
        }])
    }

    const icon = useCallback((item) => {
        return (item[props.name] || item.price) ?
            <span className="icon-Undo icon-action_pricing" onClick={() => resetPriceRow(item)}></span> :
            <span className="icon-Delete icon-action_pricing" onClick={() => removePriceRow(item.id)}></span>
    }, [prices, props.name]);

    return (
        <div className={styles['pricing-wrapper']}>
            <h4>
                Pricing
                <p>
                    <Switch
                        onChange={(v) => setIsPricing(v.target.checked)}
                        checked={isPricing}
                        color="default"
                        inputProps={{}}
                    />
                </p>
            </h4>
            {isPricing ? <>
                <p>Enter your fees here</p>
                <div className="pricing-section">
                    <ul>
                        {prices.map(pr => <li key={pr.id}>
                            <Select
                                onChange={v => changePrice(props.name, v.target.value, pr)}
                                margin={[0, 8, 0, 0]}
                                value={pr[props.name]}
                                options={PRICES[props.name]}
                                rules={{}}
                                placeholder={props.placeholder}
                                size={'md'}
                                width={'50%'}
                                name={props.name}
                            />
                            <Input
                                icon={{direction: 'right', template: <i className="input-icon">€</i>}}
                                type="number"
                                name="price"
                                value={pr.price}
                                width={'calc(50% - 50px)'}
                                margin={[0, 0, 0, 8]}
                                events={['change']}
                                onChange={(evt) => changePrice('price', evt.target.value, pr)}
                                placeholder="Price"
                            />
                            {icon(pr)}
                        </li>)}
                    </ul>
                    <Button
                        icon={{direction: 'left', className: 'icon-Add'}}
                        margin={[16, 0, 0]}
                        width={250}
                        mobileFullWidth={true}
                        text="Add price"
                        onClick={addPrice}
                    />
                </div>
            </> : ''}
        </div>
    )
})
Pricing.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
}
export default React.memo(Pricing);