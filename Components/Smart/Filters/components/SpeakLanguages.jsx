import React, {useState, useRef, useMemo, useCallback, useEffect} from 'react';
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
const SpeakLanguages = (props) => {
    const dispatch = useDispatch();

    const filtersState = useSelector(filtersSelector());
    const languages = filtersState.languages || [];
    const getSelectedLanguages = useSelector(getSelectedFiltersType({
        filterType: 'speak_languages',
        default: [],
    }));

    const router = useRouter();
    const [open, setOpen] = useState(false);

    const bodyRef = useRef();

    const filterBySpeakLanguages = useCallback((checked, item) => {
        const spArray = [
            ...getSelectedLanguages,
        ].concat(item).filter(e => checked ? item.value : e.value !== item.value);

        router.query = _query;
        generateRouterReplace(router, {
            speak_languages: spArray.map(e => e.value),
        })
    }, [getSelectedLanguages, router.query]);

    const checkIfChecked = useCallback((pos) => {
        return getSelectedLanguages.findIndex(e => e.value === pos.value) > -1
    }, [getSelectedLanguages])

    const generateSPTitle = useCallback(() => {
        return getSelectedLanguages.map(e => e.title).join(', ')
    }, [getSelectedLanguages]);

    const languagesList = useMemo(() => {
        return languages.map((language) => {
            const isChecked = checkIfChecked(language);
            return (<li key={language.value + isChecked}>
                <Input
                    attr={{...(isChecked && {checked: true})}}
                    events={['change']}
                    onChange={(evt) => filterBySpeakLanguages(evt.target.checked, language)}
                    className="checkbox-wrapper"
                    width={"calc(100% - 40px)"}
                    type="checkbox"
                    label={{title: language.title, color: '#fff', forId: 'for-id-sp_' + language.value}}
                />
                <span>({language.count})</span>
            </li>)
        })
    }, [languages, getSelectedLanguages, router.query])

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        dispatch(setSelectedFilter({filterType: 'speak_languages', value: generateStorePropertyValues(router.query, languages, 'speak_languages')}))
    }, [router.query.speak_languages])

    return (
        <div className="languages-container">
            <Header title="Speak Languages" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                data: generateSPTitle(),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: [router.query.speak_languages],
                open,
                sp: getSelectedLanguages
            }}>
                <div className="languages_body" ref={bodyRef}>
                    <ul>
                        {languagesList}
                    </ul>
                </div>
            </Body>
        </div>
    )
}
SpeakLanguages.defaultProps = {};
SpeakLanguages.propTypes = {};
export default React.memo(SpeakLanguages);