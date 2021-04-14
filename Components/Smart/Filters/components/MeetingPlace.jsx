import React, {useState, useRef, useMemo, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    Input
} from 'Components/Shared/UI';
import {
    filtersSelector,
    getSelectedFiltersType,
} from 'store/reselect';
import {setSelectedFilter} from 'store/actions';
import {useRouter} from 'next/router';
import {generateRouterReplace, generateStorePropertyValues} from 'utils/handlers';
import {useSelector, useDispatch} from 'react-redux';

let _query;
const MeetingPlace = (props) => {
    const dispatch = useDispatch();

    const filtersState = useSelector(filtersSelector());
    const meet_places = filtersState.meet_places || [];
    const getSelectedMP = useSelector(getSelectedFiltersType({
        filterType: 'meeting_places',
        default: [],
    }));

    const router = useRouter();
    const [open, setOpen] = useState(false);

    const bodyRef = useRef();

    const filterByMP = useCallback((checked, item) => {
        const mpArray = [
            ...getSelectedMP,
        ].concat(item).filter(e => checked ? item.value : e.value !== item.value);
        router.query = _query;
        generateRouterReplace(router, {
            meeting_places: mpArray.map(e => e.value),
        })
    }, [getSelectedMP, router.query]);

    const checkIfChecked = useCallback((pos) => {
        return getSelectedMP.findIndex(e => e.value === pos.value) > -1
    }, [getSelectedMP])

    const generateMPTitle = useCallback(() => {
        return getSelectedMP.map(e => e.title).join(', ')
    }, [getSelectedMP]);

    const meet_placesList = useMemo(() => {
        return meet_places.map((mp) => {
            const isChecked = checkIfChecked(mp);
            return (<li key={mp.value + isChecked}>
                <Input
                    attr={{...(isChecked && {checked: true})}}
                    events={['change']}
                    onChange={(evt) => filterByMP(evt.target.checked, mp)}
                    className="checkbox-wrapper"
                    width={"calc(100% - 40px)"}
                    type="checkbox"
                    label={{title: mp.title, color: '#fff', forId: 'for-id-mp_' + mp.value}}
                />
                <span>({mp.count})</span>
            </li>)
        })
    }, [meet_places, getSelectedMP, router.query])

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        dispatch(setSelectedFilter({filterType: 'meeting_places', value: generateStorePropertyValues(router.query, meet_places, 'meeting_places')}))
    }, [router.query.meeting_places])

    return (
        <div className="meet_places-container">
            <Header title="Meeting Places" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                data: generateMPTitle(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.meeting_places],
                open,
                mp: getSelectedMP
            }}>
                <div className="meet_places_body" ref={bodyRef}>
                    <ul>
                        {meet_placesList}
                    </ul>
                </div>
            </Body>
        </div>
    )
}
MeetingPlace.defaultProps = {};
MeetingPlace.propTypes = {};
export default React.memo(MeetingPlace);