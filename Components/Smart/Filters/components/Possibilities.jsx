import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
import { Collapse } from 'reactstrap';
import {setSelectedFilter} from 'store/actions';
import {useRouter} from 'next/router';
import {generateRouterReplace, generateStorePropertyValues} from 'utils/handlers';
import {useSelector, useDispatch} from 'react-redux';

const possibilitiesCount = 6;
let _query;
const Possibilities = (props) => {
    const dispatch = useDispatch();

    const filtersState = useSelector(filtersSelector());
    const possibilities = filtersState.possibilities || [];
    const getSelectedPossibilities = useSelector(getSelectedFiltersType({
        filterType: 'possibilities',
        default: [],
    }));

    const [open, setOpen] = useState(false);
    const [showMore, setShowMore] = useState(true);

    const router = useRouter();
    const bodyRef = useRef();

    const filterByPossibilities = useCallback((checked, item) => {
        const posArray = [
            ...getSelectedPossibilities,
        ].concat(item).filter(e => checked ? item.value : e.value !== item.value);

        router.query = _query;
        generateRouterReplace(router, {
            possibilities: posArray.map(e => e.value),
        })
    }, [getSelectedPossibilities, router.query]);

    const checkIfChecked = useCallback((pos) => {
        return getSelectedPossibilities.findIndex(e => e.value === pos.value) > -1
    }, [getSelectedPossibilities])

    const generatePossibilitiesSubTitle = useCallback(() => {
        return getSelectedPossibilities.map(e => e.title).join(', ')
    }, [getSelectedPossibilities]);

    const possibilitiesList = useMemo(() => {
        return possibilities.map((pos, index) => {
            const isChecked = checkIfChecked(pos);
            return index < possibilitiesCount - 1 ? (<li key={pos.value + isChecked}>
                <Input
                    attr={{...(isChecked && {checked: true})}}
                    events={['change']}
                    onChange={(evt) => filterByPossibilities(evt.target.checked, pos)}
                    className="checkbox-wrapper"
                    width={"calc(100% - 40px)"}
                    type="checkbox"
                    label={{title: pos.title, color: '#fff', forId: 'possibilities_' + pos.value}}
                />
                <span>({pos.count})</span>
            </li>) : ''
        })
    }, [possibilities, getSelectedPossibilities, router.query]);

    const morePossibilitiesList = useMemo(() => {
        const filteredItems = possibilities
            .filter((_e, index) => index > possibilitiesCount - 1)
            .sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            });
        return filteredItems.map((pos) => {
            const isChecked = checkIfChecked(pos);
            return (<li key={pos.value + isChecked}>
                <Input
                    attr={{...(isChecked && {checked: true})}}
                    events={['change']}
                    onChange={(evt) => filterByPossibilities(evt.target.checked, pos)}
                    className="checkbox-wrapper"
                    width={"calc(100% - 40px)"}
                    type="checkbox"
                    label={{title: pos.title, color: '#fff', forId: 'possibilities_' + pos.value}}
                />
                <span>({pos.count})</span>
            </li>)
        })
    }, [possibilities, getSelectedPossibilities, router.query])

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        dispatch(setSelectedFilter({filterType: 'possibilities', value: generateStorePropertyValues(router.query, possibilities, 'possibilities')}))
    }, [router.query.possibilities])

    return (
        <div className="possibilities-container">
            <Header title="Possibilities" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                data: generatePossibilitiesSubTitle(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.possibilities],
                open,
                showMore,
                location: getSelectedPossibilities
            }}>
                <div className="possibilities_body" ref={bodyRef}>
                    <ul>
                        {possibilitiesList}
                    </ul>
                    {possibilities.length > possibilitiesCount ?
                        <p className={`show-all-possibilities-btn ${!showMore ? 'opened-all-possibilities' : ''}`} onClick={() => setShowMore(!showMore)}>
                            {!showMore ? 'Show less' : 'Show More' + (possibilities.length - possibilitiesCount)}
                            <span className="lnr lnr-chevron-down"></span>
                        </p> : ''}
                    <Collapse isOpen={!showMore}>
                        <ul>
                            {morePossibilitiesList}
                        </ul>
                    </Collapse>
                </div>
            </Body>
        </div>
    )
}
Possibilities.defaultProps = {};
Possibilities.propTypes = {};
export default React.memo(Possibilities);