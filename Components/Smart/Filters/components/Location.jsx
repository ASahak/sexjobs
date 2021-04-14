import React, {useMemo, useState, useRef, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    Input, Select
} from 'Components/Shared/UI';
import {
    getLocations,
    getSelectedFiltersType,
} from 'store/reselect';
import { Collapse } from 'reactstrap';
import {setSelectedFilter} from 'store/actions';
import {useRouter} from 'next/router';
import {generateStorePropertyValues, generateRouterReplace} from 'utils/handlers';
import {useSelector, useDispatch} from 'react-redux';

const distanceFromCity = [
    {title: '25', value: 'less-25'},
    {title: '50', value: 'less-50'},
    {title: '100', value: 'less-100'},
];
let _query;
const Location = (props) => {
    const dispatch = useDispatch();

    const wholeLocations = useSelector(getLocations) || {
        locations: [],
        popularLocations: [],
    };
    const getSelectedCities = useSelector(getSelectedFiltersType({
        filterType: 'location',
        default: {
            awayFromMe: null,
            locationCities: [],
        },
    })) || {};

    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [cityOrPostalCode, setCityOrPostalCode] = useState('');
    const [cityDistance, setCityDistance] = useState(null);
    const [showAllLocations, setShowAllLocations] = useState(false);

    const bodyRef = useRef();

    const {locations, popularLocations} = wholeLocations;

    const generateSubTitleMessage = useCallback(() => {
        const _away = getSelectedCities?.awayFromMe ? `Away - ${getSelectedCities.awayFromMe.title}km ` : '';
        const _cities = getSelectedCities?.locationCities ? getSelectedCities.locationCities.map(e => e.title).join(', ') : '';
        return {
            data: _away + _cities
        }
    }, [getSelectedCities])

    const filterByLocation = useCallback((value) => {
        const _getCities = [...getSelectedCities.locationCities || []];
        const foundedIndex = _getCities.findIndex(e => e.value === value.value);
        if (foundedIndex > -1) {
            _getCities.splice(foundedIndex, 1)
        } else _getCities.push(value);

        router.query = _query;
        generateRouterReplace(router, {city: _getCities.map(e => e.value)})
    }, [getSelectedCities, router.query])

    const popularLocationsList = useMemo(() => {
        return popularLocations.map(location => <li key={location.title}  onClick={() => filterByLocation(location)}>
            {location.title}
            <span>({location.count})</span>
        </li>)
    }, [popularLocations, router.query]);

    const locationsList = useMemo(() => {
        return locations
            .sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            })
            .map(location => <li key={location.title} onClick={() => filterByLocation(location)}>
                {location.title}
                <span>({location.count})</span>
            </li>)
    }, [locations, showAllLocations, router.query]);

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        if(getSelectedCities.awayFromMe) {
            setCityDistance(getSelectedCities.awayFromMe.value);
        } else {
            setCityOrPostalCode('');
            setCityDistance(null);
        }
    }, [getSelectedCities]);

    useEffect(() => {
        if (cityDistance) {
            const awayValue = distanceFromCity.find(e => e.value === cityDistance);
            const _away = {
                ...router.query,
                awayFromMe: awayValue ? awayValue.value : null,
            }
            router.query = _query;
            generateRouterReplace(router, {
                ..._away,
            })
        }
    }, [cityDistance]);

    useEffect(() => {
        const _allLocations = [...wholeLocations.popularLocations, ...wholeLocations.locations];
        const _locationCities = generateStorePropertyValues(router.query, _allLocations, 'city')

        const awayValue = distanceFromCity.find(e => e.value === router.query.awayFromMe);
        const _locationProps = {
            awayFromMe: awayValue || null,
            locationCities: _locationCities
        };
        dispatch(setSelectedFilter({filterType: 'location', value: _locationProps}))
    }, [router.query.awayFromMe, router.query.city])

    return (
        <div className="location-container">
            <Header title="Location" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                ...generateSubTitleMessage(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.locationCities, router.query.awayFromMe],
                open,
                showAllLocations,
                location: getSelectedCities,
                cityDistance,
                cityOrPostalCode,
            }}>
                <div className="location_body" ref={bodyRef}>
                    <div className="location_body-postal-code">
                        <Input
                            type="text"
                            theme="dark"
                            size="md"
                            placeholder="City or postal code"
                            value={cityOrPostalCode}
                            fullWidth={true}
                            events={['change']}
                            onChange={(e) => setCityOrPostalCode(e.target.value)}
                        />
                        {(cityOrPostalCode || cityDistance) && <Select
                            placeholder="All distances"
                            theme="dark"
                            value={cityDistance}
                            onChange={(evt) => setCityDistance(evt.target.value)}
                            options={distanceFromCity.map(e => ({...e, title: e.title + 'km'}))}
                            margin={[16, 0, 0, 0]}
                        />}
                    </div>
                    <div className="location_body-list">
                        {popularLocations.length ? <div className="popular-locations-wrapper">
                            <p className="popular-locations-title">Popular Locations</p>
                            <ul>
                                {popularLocationsList}
                            </ul>
                        </div> : ''}
                        {locations.length ? <>
                            <p className={`show-all-locations-btn ${showAllLocations ? 'opened-all-locations' : ''}`} onClick={() => setShowAllLocations(!showAllLocations)}>
                                {!showAllLocations ? 'Show All Locations' : 'Less Locations'}
                                <span className="lnr lnr-chevron-down"></span>
                            </p>
                            <Collapse isOpen={showAllLocations}>
                                <ul>
                                    {locationsList}
                                </ul>
                            </Collapse>
                        </> : ''}
                    </div>
                </div>
            </Body>
        </div>
    )
}

Location.propTypes = {};
export default React.memo(Location);