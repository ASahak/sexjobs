import React, {useState, useRef, useMemo, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    Input
} from 'Components/Shared/UI';
import {
    getSelectedFiltersType,
} from 'store/reselect';
import {setSelectedFilter} from 'store/actions';
import {useRouter} from 'next/router';
import {generateRouterReplace, generateStorePropertyValues} from 'utils/handlers';
import {useDispatch, useSelector} from 'react-redux';
import {filtersSelector} from 'store/reselect';

let _query;
const Availability = (props) => {

    const dispatch = useDispatch();

    const filtersState = useSelector(filtersSelector());
    const availability = filtersState.availability || [];
    const getSelectedAvailability = useSelector(getSelectedFiltersType({
        filterType: 'availability',
        default: [],
    }));

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const bodyRef = useRef();

    const filterByAvailability = useCallback((checked, item) => {
        const availabilityArray = [
            ...getSelectedAvailability,
        ].concat(item).filter(e => checked ? item.value : e.value !== item.value);
        router.query = _query;
        generateRouterReplace(router, {
            availability: availabilityArray.map(e => e.value),
        })
    }, [getSelectedAvailability, router.query]);

    const checkIfChecked = useCallback((pos) => {
        return getSelectedAvailability.findIndex(e => e.value === pos.value) > -1
    }, [getSelectedAvailability]);

    const generateAvailabilityTitle = useCallback(() => {
        return getSelectedAvailability.map(e => e.title).join(', ')
    }, [getSelectedAvailability]);

    const availabilityList = useMemo(() => {
        return availability.map((available) => {
            const isChecked = checkIfChecked(available);
            return (<li key={available.value + isChecked}>
                <Input
                    attr={{...(isChecked && {checked: true})}}
                    events={['change']}
                    onChange={(evt) => filterByAvailability(evt.target.checked, available)}
                    className="checkbox-wrapper"
                    width={"calc(100% - 40px)"}
                    type="checkbox"
                    label={{title: available.title, color: '#fff', forId: 'for-id-availability_' + available.value}}
                />
                <span>({available.count})</span>
            </li>)
        })
    }, [availability, getSelectedAvailability, router.query])

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        dispatch(setSelectedFilter({filterType: 'availability', value: generateStorePropertyValues(router.query, availability, 'availability')}))
    }, [router.query.availability])

    return (
        <div className="availability-container">
            <Header title="Availability" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                data: generateAvailabilityTitle(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.availability],
                open,
                availability: getSelectedAvailability
            }}>
                <div className="availability_body" ref={bodyRef}>
                    <ul>
                        {availabilityList}
                    </ul>
                </div>
            </Body>
        </div>
    )
}
Availability.defaultProps = {};
Availability.propTypes = {};
export default React.memo(Availability);