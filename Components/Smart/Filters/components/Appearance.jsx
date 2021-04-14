import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    getFiltersType,
    getSelectedFiltersType,
} from 'store/reselect';
import {Input, RangeSlider} from 'Components/Shared/UI';
import { Collapse } from 'reactstrap';
import {setSelectedFilter} from 'store/actions';
import useDebounce from 'hooks/use-debounce';
import {
    FILTERS,
} from 'utils/constants';
import {useRouter} from 'next/router';
import {generateRouterReplace, generateStorePropertyValues} from 'utils/handlers';
import {useSelector, useDispatch} from 'react-redux';


const nationalityCount = 5;
let _query;
const Appearance = (props) => {
    const dispatch = useDispatch();
    const appearance = useSelector(getFiltersType({
        filterType: 'appearance',
    })) || FILTERS.appearance;

    const getSelectedAppearances = useSelector(getSelectedFiltersType({
        filterType: 'appearance',
        default: FILTERS.appearance,
    })) || FILTERS.appearance;

    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [showAllNations, setShowAllNations] = useState(false);
    const [heightValue, setHeightValue] = useState([]);
    const [penisValue, setPenisValue] = useState([]);
    const [showList, setShowList] = useState({
        build: false,
        height: false,
        penis: false,
        hair_color: false,
        cup: false,
        nationality: false,
    });
    const debouncedHeightChanges = useDebounce(heightValue, 500);
    const debouncedPenisChanges = useDebounce(penisValue, 500);

    const bodyRef = useRef();
    const deepNationsRef = useRef();

    const {build, hair_color, cup, nationality} = appearance;

    const toggleLabel = useCallback((wrappedBy, item, checked) => {
        const wrappedArray = [
            ...getSelectedAppearances[wrappedBy],
        ].concat(item).filter(e => checked ? item.value : e.value !== item.value);

        router.query = _query;
        generateRouterReplace(router, {
            [wrappedBy]: wrappedArray.map(e => e.value),
        })
    }, [router.query, getSelectedAppearances])

    const toggleList = useCallback((target) => {
        setShowList({
            ...showList,
            [target]: !showList[target]
        })
    }, [showList]);

    const checkIfChecked = useCallback((prop, app) => {
        return getSelectedAppearances[prop] && getSelectedAppearances[prop].findIndex(e => e.value === app.value) > -1
    }, [getSelectedAppearances])

    const listItems = useCallback((target) => {
        return appearance[target].map(item => {
            const isChecked = checkIfChecked(target, item);
            return <li key={item.value + isChecked}>
                <Input
                    attr={{...(isChecked && {checked: true})}}
                    events={['change']}
                    onChange={(evt) => toggleLabel(target, item, evt.target.checked)}
                    className="checkbox-wrapper"
                    width={"calc(100% - 40px)"}
                    type="checkbox"
                    label={{title: item.title, color: '#fff', forId: 'for-id-' + target + '_' + item.value}}
                />
                <span>({item.count})</span>
            </li>
        })
    }, [build, hair_color, cup, appearance, getSelectedAppearances, router.query])

    const nationalityList = useCallback((from, to) => {
        const filteredMoreNations = nationality
            .filter((_e, index) => (index >= from && index < to))
            .sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            })
        return filteredMoreNations.map((pos) => {
            const isChecked = checkIfChecked('nationality', pos);
            return (<li key={pos.value + isChecked}>
                <Input
                    attr={{...(isChecked && {checked: true})}}
                    events={['change']}
                    onChange={(evt) => toggleLabel('nationality', pos, evt.target.checked)}
                    className="checkbox-wrapper"
                    width={"calc(100% - 40px)"}
                    type="checkbox"
                    label={{title: pos.title, color: '#fff', forId: 'for-id-nationality_' + pos.value}}
                />
                <span>({pos.count})</span>
            </li>)
        })
    }, [nationality, getSelectedAppearances.nationality, router.query]);

    const generateAppearanceTitle = useCallback(() => {
        const isArrayChecked = ['build', 'hair_color', 'cup', 'nationality'].reduce((acc, item) => {
            acc.push(...getSelectedAppearances[item].map(e => e.title))
            return acc;
        }, []);

        let isHeight = true, isPenis = true;
        const _splitHeightParam = router.query.height?.split('-').map(e => +e);
        if (!_splitHeightParam) isHeight = false;

        const _splitPenisParam = router.query.penis?.split('-').map(e => +e);
        if (!_splitPenisParam) isPenis = false;

        return (isHeight ? _splitHeightParam.join(' - ') +', ' : '') + (isPenis ? _splitPenisParam.join(' - ') + ', ' : '') + isArrayChecked.join(', ')
    }, [getSelectedAppearances, router.query.height, router.query.penis])

    const PenisHeight = useCallback((queryParam, paramValue) => {
        const _splitParam = _query[queryParam]?.split('-').map(e => +e);
        if (!(_splitParam && _splitParam[0] === paramValue[0] && _splitParam[1] === paramValue[1])) {
            router.query = _query;
            generateRouterReplace(router, {
                [queryParam]: paramValue[0] + '-' + paramValue[1],
            })
        }
    }, [_query, penisValue, heightValue]);

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        if(heightValue.length) {
            PenisHeight('height', heightValue)
        }
    }, [debouncedHeightChanges])

    useEffect(() => {
        if(penisValue.length) {
            PenisHeight('penis', penisValue)
        }
    }, [debouncedPenisChanges])

    useEffect(() => {
        const _appearance = {...FILTERS.appearance, ...getSelectedAppearances};
        if (router.query.height) {
            const _splitParam = router.query.height?.split('-').map(e => +e);
            setHeightValue(_splitParam || []);
            _appearance.height = _splitParam || FILTERS.appearance.height;
        } else {
            setHeightValue([]);
            _appearance.height = FILTERS.appearance.height;
        }
        if (router.query.penis) {
            const _splitParam = router.query.penis?.split('-').map(e => +e);
            setPenisValue(_splitParam || []);
            _appearance.penis = _splitParam || FILTERS.appearance.penis;
        } else {
            setPenisValue([]);
            _appearance.penis = FILTERS.appearance.penis;
        }
        ['build', 'hair_color', 'cup', 'nationality'].forEach(wrappedBy => {
            if (router.query[wrappedBy]) {
                _appearance[wrappedBy] = generateStorePropertyValues(router.query, appearance[wrappedBy], wrappedBy)
            } else if (_appearance[wrappedBy].length) {
                _appearance[wrappedBy] = FILTERS.appearance[wrappedBy]
            }
        })
        dispatch(setSelectedFilter({filterType: 'appearance', value: _appearance}))
    }, [router.query.build, router.query.hair_color, router.query.cup, router.query.nationality, router.query.height, router.query.penis])

    return (
        <div className="appearance-container">
            <Header title="Appearance" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                data: generateAppearanceTitle(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.build, router.query.hair_color, router.query.cup, router.query.nationality, router.query.height, router.query.penis],
                open,
                showList,
                showAllNations,
                appearance: getSelectedAppearances
            }}>
                <div className="appearance_body" ref={bodyRef}>
                    <div className="appearance-build">
                        <h5 onClick={() => toggleList('build')}>
                            {FILTERS.appearanceTitles.build}
                            <span className={`lnr lnr-chevron-down ${showList.build ? 'list-is-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={showList.build}>
                            <ul>
                                {listItems('build')}
                            </ul>
                        </Collapse>
                    </div>
                    <div className="appearance-height">
                        <h5 onClick={() => toggleList('height')}>
                            {FILTERS.appearanceTitles.height}
                            <span className={`lnr lnr-chevron-down ${showList.height ? 'list-is-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={showList.height}>
                            <div  key={getSelectedAppearances.height}>
                                <p>
                                    <span>
                                        {'< ' + (getSelectedAppearances.height[0] || filters.appearance.height[0]) + 'm'}
                                    </span>
                                            <span>
                                        {'> ' + (getSelectedAppearances.height[1] || filters.appearance.height[1]) + 'm'}
                                    </span>
                                </p>
                                <RangeSlider
                                    step={.10}
                                    min={FILTERS.appearance.height[0]}
                                    max={FILTERS.appearance.height[1]}
                                    value={getSelectedAppearances.height}
                                    style={{minWidth: '100px', padding: '0 11px 10px'}}
                                    notOptions={true}
                                    change={(newVal) => setHeightValue(newVal)}
                                />
                            </div>
                        </Collapse>
                    </div>
                    <div className="appearance-hair_color">
                        <h5 onClick={() => toggleList('hair_color')}>
                            {FILTERS.appearanceTitles.hair_color}
                            <span className={`lnr lnr-chevron-down ${showList.hair_color ? 'list-is-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={showList.hair_color}>
                            <ul>
                                {listItems('hair_color')}
                            </ul>
                        </Collapse>
                    </div>
                    <div className="appearance-penis">
                        <h5 onClick={() => toggleList('penis')}>
                            {FILTERS.appearanceTitles.penis}
                            <span className={`lnr lnr-chevron-down ${showList.penis ? 'list-is-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={showList.penis}>
                            <div key={getSelectedAppearances.penis}>
                                <p>
                                    <span>
                                        {'< ' + (penisValue[0] || FILTERS.appearance.penis[0]) + 'm'}
                                    </span>
                                    <span>
                                        {'> ' + (penisValue[1] || FILTERS.appearance.penis[1]) + 'm'}
                                    </span>
                                </p>
                                <RangeSlider
                                    step={.10}
                                    min={FILTERS.appearance.penis[0]}
                                    max={FILTERS.appearance.penis[1]}
                                    value={getSelectedAppearances.penis}
                                    style={{minWidth: '100px', padding: '0 11px 10px'}}
                                    notOptions={true}
                                    change={(newVal) => setPenisValue(newVal)}
                                />
                            </div>
                        </Collapse>
                    </div>
                    <div className="appearance-cup">
                        <h5 onClick={() => toggleList('cup')}>
                            {FILTERS.appearanceTitles.cup}
                            <span className={`lnr lnr-chevron-down ${showList.cup ? 'list-is-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={showList.cup}>
                            <ul>
                                {listItems('cup')}
                            </ul>
                        </Collapse>
                    </div>
                    <div className="appearance-nationality">
                        <h5 onClick={() => toggleList('nationality')}>
                            {FILTERS.appearanceTitles.nationality}
                            <span className={`lnr lnr-chevron-down ${showList.nationality ? 'list-is-opened' : ''}`}></span>
                        </h5>
                        <Collapse isOpen={showList.nationality}>
                            <div>
                                <ul>
                                    {nationalityList(0, nationalityCount)}
                                </ul>
                                <p className={`show-all-nations-btn ${showAllNations ? 'opened-all-nations' : ''}`} onClick={() => setShowAllNations(!showAllNations)}>
                                    {showAllNations ? 'Show less' : 'Show More (' + (nationality.length - nationalityCount) + ')'}
                                    <span className="lnr lnr-chevron-down"></span>
                                </p>
                                <div ref={deepNationsRef}>
                                    <Collapse isOpen={showAllNations}>
                                        <ul>
                                            {nationalityList(nationalityCount, nationality.length)}
                                        </ul>
                                    </Collapse>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </Body>
        </div>
    )
}
Appearance.defaultProps = {};
Appearance.propTypes = {};
export default React.memo(Appearance)