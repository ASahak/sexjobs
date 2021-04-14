import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    Select
} from 'Components/Shared/UI';
import {
    getSelectedFiltersType,
} from 'store/reselect';
import {setSelectedFilter} from 'store/actions';
import {useRouter} from 'next/router';
import {generateRouterReplace} from 'utils/handlers';
import {FILTERS} from 'utils/constants';
import {useSelector, useDispatch} from 'react-redux';

const iAmOptions = [
    {title: 'Boy', value: 'boy'},
    {title: 'Girl', value: 'girl'},
];
const iAmLookingOptions = [
    {title: 'Boys', value: 'boys'},
    {title: 'Girls', value: 'girls'},
];
let _query;
const Gender = (props) => {
    const dispatch = useDispatch();

    const getSelectedGender = useSelector(getSelectedFiltersType({
        filterType: 'gender',
        default: FILTERS.gender,
    }));
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [iAm, setIAm] = useState('');
    const [iAmLooking, setIAmLooking] = useState('');

    const bodyRef = useRef();

    const filterByGender = (val, queryName) => {
        if (queryName === 'iAm') setIAm(val);
        else setIAmLooking(val)
        router.query = _query;

        generateRouterReplace(router, {
            [queryName]: val,
        })
    };

    const generateGenderSubTitle = useCallback(() => {
        return (iAm ? 'I am a - ' + (iAmOptions.find(e => e.value === iAm).title || '') : '') + (iAmLooking ? ' I am looking - ' + (iAmLookingOptions.find(e => e.value === iAmLooking).title || '') : '')
    }, [iAm, iAmLooking])

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        setIAm(getSelectedGender.iAm.value || '');
        setIAmLooking(getSelectedGender.iAmLooking.value || '');
    }, [getSelectedGender])

    useEffect(() => {
        const _genderProps = {
            iAm: router.query.hasOwnProperty('iAm') && iAmOptions.find(e => e.value === router.query.iAm) || '',
            iAmLooking: router.query.hasOwnProperty('iAmLooking') && iAmLookingOptions.find(e => e.value === router.query.iAmLooking) || '',
        };
        dispatch(setSelectedFilter({filterType: 'gender', value: _genderProps}))
    }, [router.query.iAm, router.query.iAmLooking])

    return (
        <div className="gender-container">
            <Header title="Gender" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                data: generateGenderSubTitle(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.iAm, router.query.iAmLooking],
                open,
                gender: getSelectedGender,
                iAm,
                iAmLooking,
            }}>
                <div className="gender_body" ref={bodyRef}>
                    <Select
                        label={{title: 'I am a', color: '#fff'}}
                        placeholder="-"
                        theme="dark"
                        value={iAm}
                        onChange={(evt) => filterByGender(evt.target.value, 'iAm')}
                        options={iAmOptions}
                        margin={[0, 0, 16, 0]}
                    />
                    <Select
                        value={iAmLooking}
                        onChange={(evt) => filterByGender(evt.target.value, 'iAmLooking')}
                        label={{title: 'Looking for a', color: '#fff'}}
                        placeholder="-"
                        options={iAmLookingOptions}
                        theme="dark"
                    />
                </div>
            </Body>
        </div>
    )
}
Gender.defaultProps = {};
Gender.propTypes = {};
export default React.memo(Gender);