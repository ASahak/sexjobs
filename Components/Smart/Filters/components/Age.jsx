import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import {
    FILTERS
} from 'utils/constants';
import {useRouter} from 'next/router';
import {generateRouterReplace} from 'utils/handlers';
import {useDispatch, useSelector} from 'react-redux';

const moreThanAge = FILTERS.ageDefaultValue[1];
const Age = (props) => {
    const dispatch = useDispatch();

    const getSelectedAge = useSelector(getSelectedFiltersType({
        filterType: 'age',
        default: FILTERS.ageDefaultValue,
    }));
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [ageValue, setAgeValue] = useState([]);
    const debouncedValueChanges = useDebounce(ageValue, 500);

    const bodyRef = useRef();

    const generateAgeTitle = useCallback(() => {
        const _splitParam = router.query.age?.split('-').map(e => +e);
        if (!_splitParam) return null;
        return _splitParam.join(' - ')
    }, [router.query.age]);

    useEffect(() => {
        if(ageValue.length) {
            generateRouterReplace(router, {
                age: ageValue[0] + '-' + ageValue[1],
            })
        }
    }, [debouncedValueChanges]);

    useEffect(() => {
        const _splitParam = router.query.age?.split('-').map(e => +e);
        setAgeValue(_splitParam || []);
        dispatch(setSelectedFilter({filterType: 'age', value: _splitParam || FILTERS.ageDefaultValue}))
    }, [router.query.age])

    return (
        <div className="age-container">
            <Header title="Age" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                data: generateAgeTitle(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.age],
                open,
                ageValue,
                location: getSelectedAge
            }}>
                <div className="age_body" ref={bodyRef} key={getSelectedAge}>
                    <p>
                        <span>
                            {(ageValue[0] || FILTERS.ageDefaultValue[0])}
                        </span>
                        <span>
                            {(ageValue[1] || FILTERS.ageDefaultValue[1]) >= moreThanAge ? moreThanAge + '+' : (ageValue[1] || Filters.ageDefaultValue[1])}
                        </span>
                    </p>
                    <RangeSlider
                        step={1}
                        min={FILTERS.ageDefaultValue[0]}
                        max={FILTERS.ageDefaultValue[1]}
                        value={getSelectedAge}
                        style={{minWidth: '100px'}}
                        notOptions={true}
                        change={(newVal) => setAgeValue(newVal)}
                    />
                </div>
            </Body>
        </div>
    )
}
Age.defaultProps = {};
Age.propTypes = {};
export default React.memo(Age);