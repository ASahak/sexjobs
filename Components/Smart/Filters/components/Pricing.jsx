import React, {useState, useRef, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    RangeSlider
} from 'Components/Shared/UI';
import {
    getSelectedFiltersType,
} from 'store/reselect';
import {setSelectedFilter} from 'store/actions';
import useDebounce from 'hooks/use-debounce';
import {FILTERS} from 'utils/constants';
import {useRouter} from 'next/router';
import {generateRouterReplace} from 'utils/handlers';
import {useDispatch, useSelector} from 'react-redux';

let _query;
const Pricing = (props) => {

    const dispatch = useDispatch();
    const getSelectedPrice = useSelector(getSelectedFiltersType({
        filterType: 'price',
        default: FILTERS.price,
    }));

    const router = useRouter();
    const [priceValue, setPriceValue] = useState([]);
    const [open, setOpen] = useState(false);
    const debouncedValueChanges = useDebounce(priceValue, 500);

    const bodyRef = useRef();

    const generatePricingTitle = useCallback(() => {
        const _splitParam = router.query.price?.split('-').map(e => +e);
        return _splitParam ? _splitParam.join(' - ') : null
    }, [router.query.price])

    useEffect(() => {
        if(priceValue.length) {
            router.query = _query;
            generateRouterReplace(router, {
                price: priceValue[0] + '-' + priceValue[1],
            })
        }
    }, [debouncedValueChanges]);

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        const _splitParam = router.query.price?.split('-').map(e => +e);
        setPriceValue(_splitParam || []);
        dispatch(setSelectedFilter({filterType: 'price', value: _splitParam || FILTERS.price}))
    }, [router.query.price])

    return (
        <div className="pricing-container">
            <Header title="Pricing" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                data: generatePricingTitle(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.price],
                open,
                price: getSelectedPrice
            }}>
                <div className="pricing_body" ref={bodyRef} key={getSelectedPrice}>
                    <p>
                        <span>
                            {'< ' + (priceValue[0] || FILTERS.price[0]) + '€'}
                        </span>
                        <span>
                            {'> ' + (priceValue[1] || FILTERS.price[1]) + '€'}
                        </span>
                    </p>
                    <RangeSlider
                        step={1}
                        min={FILTERS.price[0] || 0}
                        max={FILTERS.price[1] || 100}
                        value={getSelectedPrice}
                        style={{minWidth: '100px'}}
                        notOptions={true}
                        change={(newVal) => setPriceValue(newVal)}
                    />
                </div>
            </Body>
        </div>
    )
}
Pricing.defaultProps = {};
Pricing.propTypes = {};
export default React.memo(Pricing);