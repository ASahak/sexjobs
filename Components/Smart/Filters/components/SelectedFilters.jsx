import React, {useRef, useState, useMemo, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    FILTERS
} from 'utils/constants';
import {
    getSelectedFilters
} from 'store/reselect';
import {resetSelectedFilter} from 'store/actions';
import { Collapse } from 'reactstrap';
import {useRouter} from 'next/router';
import {generateRouterReplace} from 'utils/handlers';
import {useSelector, useDispatch} from 'react-redux';

const dropDownTriggers = {
    location: false,
    now_available: false,
    gender: false,
    possibilities: false,
    with_picture: false,
    age: false,
    appearance: false,
    price: false,
    availability: false,
    speak_languages: false,
    meeting_places: false,
    search: false,
};
const SelectedFilters = (props) => {
    const dispatch = useDispatch();
    const selectedFilters = useSelector(getSelectedFilters()) || {};

    const [openDropDown, setOpenDropDown] = useState({
        ...dropDownTriggers,
    });
    const {location, now_available, gender, possibilities, with_picture, age, appearance, price, availability, speak_languages, meeting_places, search} = selectedFilters;

    const [open, setOpen] = useState(true);
    const [atLeastOneSelectedItem, setAtLeastOneSelectedItem] = useState(false);
    const router = useRouter();
    const bodyRef = useRef();

    const resetAllFilters = useCallback(() => {
        const _queryParams = router.query;
        FILTERS.filterTypes.forEach(e => {
            if(_queryParams.hasOwnProperty(e)) delete _queryParams[e]
        })
        generateRouterReplace(router, {
            ..._queryParams,
        });
        dispatch(resetSelectedFilter())
        setOpenDropDown({...dropDownTriggers})
    }, [router.query])

    const removeLocationFilter = useCallback((filter) => {
        const _queryParams = router.query;
        const _cityQuery = typeof _queryParams.city === 'string' ? [_queryParams.city] : _queryParams.city || [];
        if (filter === 'awayFromMe') {
            delete _queryParams.awayFromMe;
        } else {
            _queryParams.city = _cityQuery.filter(e => e !== filter.value);
        }
        generateRouterReplace(router, {
            ..._queryParams,
        })
    }, [router.query])

    const resetNowAvailableFilter = useCallback(() => {
        const _queryParams = router.query;
        delete _queryParams.now_available;

        generateRouterReplace(router, {
            ..._queryParams,
        })
    }, [router.query]);

    const resetGenderFilter = useCallback((prop) => {
        const _queryParams = router.query;
        delete _queryParams[prop];

        generateRouterReplace(router, {
            ..._queryParams,
        })
    }, [router.query]);

    const resetPossibilitiesFilter = useCallback((pos) => {
        const _queryParams = router.query;
        const _possQuery = typeof _queryParams.possibilities === 'string' ? [_queryParams.possibilities] : _queryParams.possibilities || [];

        generateRouterReplace(router, {
            ..._queryParams,
            possibilities: _possQuery.filter(e => e !== pos.value),
        })
    }, [router.query]);

    const resetPicturesFilter = useCallback(() => {
        const _queryParams = router.query;
        delete _queryParams.with_picture;

        generateRouterReplace(router, {
            ..._queryParams,
        })
    }, [router.query]);

    const resetAgeFilter = useCallback(() => {
        const _queryParams = router.query;
        delete _queryParams.age;

        generateRouterReplace(router, {
            ..._queryParams,
        })
    }, [router.query]);

    const resetAppearanceFilter = useCallback((prop, item) => {
        const _queryParams = router.query;
        if (prop === 'height' || prop === 'penis') {
            delete _queryParams[prop]
        } else {
            const _appQuery = typeof _queryParams[prop] === 'string' ? [_queryParams[prop]] : _queryParams[prop] || [];
            _queryParams[prop] = _appQuery.filter(e => e !== item.value);
        }

        generateRouterReplace(router, {
            ..._queryParams,
        })
    }, [router.query])

    const appearanceList = useCallback(() => {
        return Object.keys(appearance).map(app => appearance[app].length ? <div key={app} className="appearance_deep">
            {(app === 'height' || app === 'penis') ? router.query.hasOwnProperty(app) ? <>
                    <h5>{FILTERS.appearanceTitles[app]}</h5>
                    <div className="penis-height">
                        <p>
                            {appearance[app][0] + ' - ' + appearance[app][1]}
                            <span className="lnr lnr-cross" onClick={() => resetAppearanceFilter(app)}></span>
                        </p>
                    </div>
                </> : '' : <>
                <h5>{FILTERS.appearanceTitles[app]}</h5>
                <ul>
                    {appearance[app].map(item =>
                        <li key={item.value + app}>
                            {item.title}
                            <span className="lnr lnr-cross" onClick={() => resetAppearanceFilter(app, item)}></span>
                        </li>
                    )}
                </ul>
            </>}
        </div> : '')
    }, [appearance, router.query])

    const resetPriceFilter = useCallback(() => {
        const _queryParams = router.query;
        delete _queryParams.price;

        generateRouterReplace(router, {
            ..._queryParams,
        })
    }, [router.query]);

    const resetAvailabilityFilter = useCallback((available) => {
        const _queryParams = router.query;
        const _possQuery = typeof _queryParams.availability === 'string' ? [_queryParams.availability] : _queryParams.availability || [];

        generateRouterReplace(router, {
            ..._queryParams,
            availability: _possQuery.filter(e => e !== available.value)
        })
    }, [availability, router.query]);

    const resetLanguagesFilter = useCallback((language) => {
        const _queryParams = router.query;
        const _possQuery = typeof _queryParams.speak_languages === 'string' ? [_queryParams.speak_languages] : _queryParams.speak_languages || [];

        generateRouterReplace(router, {
            ..._queryParams,
            speak_languages: _possQuery.filter(e => e !== language.value)
        })
    }, [router.query]);

    const resetMPFilter = useCallback((mp) => {
        const _queryParams = router.query;
        const _possQuery = typeof _queryParams.meeting_places === 'string' ? [_queryParams.meeting_places] : _queryParams.meeting_places || [];

        generateRouterReplace(router, {
            ..._queryParams,
            meeting_places: _possQuery.filter(e => e !== mp.value)
        })
    }, [router.query]);

    const resetSearchFilter = useCallback((prop) => {
        const _queryParams = router.query;
        delete _queryParams[prop];

        generateRouterReplace(router, {
            ..._queryParams,
        })
    }, [router.query]);

    const searchList = useCallback(() => {
        return Object.keys(search).map(s => {
            if (s === 'category_search' && search[s].value === '*' || !search[s]) return ''
            else return (<li key={s}>
                {typeof search[s] === 'object' ? search[s].title : search[s]}
                <span className="lnr lnr-cross" onClick={() => resetSearchFilter(s)}></span>
            </li>)
        })
    }, [search, router.query]);


    const isLocation = useMemo(() => {
        return location?.awayFromMe || location?.locationCities?.length
    }, [location, router.query])

    const isNowAvailable = useMemo(() => {
        return now_available;
    }, [now_available, router.query])

    const isGender = useMemo(() => {
        return gender?.iAm || gender?.iAmLooking;
    }, [gender, router.query])

    const isPossibilities = useMemo(() => {
        return possibilities && possibilities.length;
    }, [possibilities, router.query])

    const isWithPicture = useMemo(() => {
        return with_picture;
    }, [with_picture, router.query])

    const isAge = useMemo(() => {
        return age?.length && router.query.hasOwnProperty('age');
    }, [age, router.query])

    const isAppearance = useMemo(() => {
        return appearance && (appearance.build?.length
            || appearance.hair_color?.length
            || appearance.cup?.length
            || appearance.nationality?.length
            || (appearance.penis?.length && router.query.hasOwnProperty('penis'))
            || (appearance.height?.length && router.query.hasOwnProperty('height')));
    }, [appearance, router.query])

    const isPrice = useMemo(() => {
        return price?.length && router.query.hasOwnProperty('price');
    }, [price, router.query])

    const isAvailability = useMemo(() => {
        return availability?.length;
    }, [availability, router.query])

    const isLanguage = useMemo(() => {
        return speak_languages?.length;
    }, [speak_languages, router.query])

    const isMP = useMemo(() => {
        return meeting_places?.length;
    }, [meeting_places, router.query])

    const isSearch = useMemo(() => {
        return search?.name || (search?.category_search && search?.category_search.value !== '*');
    }, [search, router.query])

    useEffect(() => {
        if ([isLocation, isNowAvailable, isGender, isPossibilities, isWithPicture, isAge, isAppearance, isPrice, isAvailability, isLanguage, isMP, isSearch].some(e => e)) {
            setAtLeastOneSelectedItem(true)
        } else setAtLeastOneSelectedItem(false);
    }, [isLocation, isNowAvailable, isGender, isPossibilities, isWithPicture, isAge, isAppearance, isPrice, isAvailability, isLanguage, isMP, isSearch])

    return (
        <div className="selected-filters-container">
            <Header title="Selected Filters" isOpen={open} toggleBody={(val) => setOpen(val)}/>
            <Body slideToggle={open} necessaryRender={{
                atList: atLeastOneSelectedItem,
                query: router.query,
                open,
                openDropDown,
                isItems: [isLocation, isNowAvailable, isGender, isPossibilities, isWithPicture, isAge, isAppearance, isPrice, isAvailability, isLanguage, isMP, isSearch]
            }}>
                <div className="selected-filters_body" ref={bodyRef}>
                    {!atLeastOneSelectedItem && <p className="no-selected-items">No selected Items</p>}
                    {/*Selected Search*/}
                    {isSearch ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, search: !prevState.search}))}>
                            Search
                            <span className={`lnr lnr-chevron-down ${openDropDown.search ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.search}>
                            <ul>
                                {searchList()}
                            </ul>
                        </Collapse>
                    </div> : ''}
                    {/*Selected Location*/}
                    {isLocation ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, location: !prevState.location}))}>
                            Location
                            <span className={`lnr lnr-chevron-down ${openDropDown.location ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.location}>
                            <ul>
                                {location.locationCities.map(city => <li key={city.value}>
                                    {city.title}
                                    <span className="lnr lnr-cross" onClick={() => removeLocationFilter(city)}></span>
                                </li>)}
                                {location.awayFromMe && <li>
                                    <p>
                                        max. {location.awayFromMe.title}km
                                    </p>
                                    <span className="lnr lnr-cross" onClick={() => removeLocationFilter('awayFromMe')}></span>
                                </li>}
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Now Available*/}
                    {isNowAvailable ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, now_available: !prevState.now_available}))}>
                            Now Available
                            <span className={`lnr lnr-chevron-down ${openDropDown.now_available ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.now_available}>
                            <ul>
                                <li>
                                    {+now_available ? 'Yes' : 'No'}
                                    <span className="lnr lnr-cross" onClick={() => resetNowAvailableFilter()}></span>
                                </li>
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Gender*/}
                    {isGender ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, gender: !prevState.gender}))}>
                            Gender
                            <span className={`lnr lnr-chevron-down ${openDropDown.gender ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.gender}>
                            <ul>
                                {gender.iAm ? <li>
                                    I am - {gender.iAm.title}
                                    <span className="lnr lnr-cross" onClick={() => resetGenderFilter('iAm')}></span>
                                </li> : ''}
                                {gender.iAmLooking ? <li>
                                    Looking for - {gender.iAmLooking.title}
                                    <span className="lnr lnr-cross" onClick={() => resetGenderFilter('iAmLooking')}></span>
                                </li> : ''}
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Possibilities*/}
                    {isPossibilities ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, possibilities: !prevState.possibilities}))}>
                            Possibilities
                            <span className={`lnr lnr-chevron-down ${openDropDown.possibilities ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.possibilities}>
                            <ul>
                                {possibilities.map(pos => <li key={pos.value}>
                                    {pos.title}
                                    <span className="lnr lnr-cross" onClick={() => resetPossibilitiesFilter(pos)}></span>
                                </li>)}
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Picture*/}
                    {isWithPicture ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, with_picture: !prevState.with_picture}))}>
                            Pictures
                            <span className={`lnr lnr-chevron-down ${openDropDown.with_picture ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.with_picture}>
                            <ul>
                                <li>
                                    {+with_picture ? 'Yes' : 'No'}
                                    <span className="lnr lnr-cross" onClick={() => resetPicturesFilter()}></span>
                                </li>
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Age*/}
                    {isAge ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, age: !prevState.age}))}>
                            Age
                            <span className={`lnr lnr-chevron-down ${openDropDown.age ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.age}>
                            <ul>
                                <li>
                                    {age[0] + ' - ' + age[1]}
                                    <span className="lnr lnr-cross" onClick={() => resetAgeFilter()}></span>
                                </li>
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Appearance*/}
                    {isAppearance ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, appearance: !prevState.appearance}))}>
                            Appearance
                            <span className={`lnr lnr-chevron-down ${openDropDown.appearance ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.appearance}>
                            {appearanceList()}
                        </Collapse>
                    </div> : ''}

                    {/*Selected Price*/}
                    {isPrice ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, price: !prevState.price}))}>
                            Pricing
                            <span className={`lnr lnr-chevron-down ${openDropDown.price ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.price}>
                            <ul>
                                <li>
                                    {price[0] + ' - ' + price[1]}
                                    <span className="lnr lnr-cross" onClick={() => resetPriceFilter()}></span>
                                </li>
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Availability*/}
                    {isAvailability ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, availability: !prevState.availability}))}>
                            Availability
                            <span className={`lnr lnr-chevron-down ${openDropDown.availability ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.availability}>
                            <ul>
                                {availability.map(available => <li key={available.value}>
                                    {available.title}
                                    <span className="lnr lnr-cross" onClick={() => resetAvailabilityFilter(available)}></span>
                                </li>)}
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Speak Languages*/}
                    {isLanguage ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, speak_languages: !prevState.speak_languages}))}>
                            Speak Languages
                            <span className={`lnr lnr-chevron-down ${openDropDown.speak_languages ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.speak_languages}>
                            <ul>
                                {speak_languages.map(language => <li key={language.value}>
                                    {language.title}
                                    <span className="lnr lnr-cross" onClick={() => resetLanguagesFilter(language)}></span>
                                </li>)}
                            </ul>
                        </Collapse>
                    </div> : ''}

                    {/*Selected Meeting Places*/}
                    {isMP ? <div>
                        <h5 onClick={() => setOpenDropDown(prevState => ({...prevState, meeting_places: !prevState.meeting_places}))}>
                            Meeting Places
                            <span className={`lnr lnr-chevron-down ${openDropDown.meeting_places ? 'dropdown-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={openDropDown.meeting_places}>
                            <ul>
                                {meeting_places.map(mp => <li key={mp.value}>
                                    {mp.title}
                                    <span className="lnr lnr-cross" onClick={() => resetMPFilter(mp)}></span>
                                </li>)}
                            </ul>
                        </Collapse>
                    </div> : ''}
                    {atLeastOneSelectedItem ? <p className="remove-all-filters">
                        <a onClick={() => resetAllFilters()}>Remove all filters</a>
                    </p>: ''}
                </div>
            </Body>
        </div>
    )
}
SelectedFilters.defaultProps = {};
SelectedFilters.propTypes = {};
export default React.memo(SelectedFilters);