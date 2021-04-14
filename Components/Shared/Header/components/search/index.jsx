import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {
    Button,
    Input,
    Select,
} from 'Components/Shared/UI';
import {Controller, useForm} from 'react-hook-form';
import {setSelectedFilter} from 'store/actions';
import {FILTERS} from 'utils/constants';
import {getSelectedFiltersType} from 'store/reselect';
import {useRouter} from 'next/router';
import {generateRouterReplace} from 'utils/handlers';
import {useSelector, useDispatch} from 'react-redux';

const categories = [
    {title: 'Alle categorieën', value: '*'},
    {title: 'Events', value: 'events'},
    {title: 'Dames van plazier', value: 'plaizer'},
    {title: 'Message', value: 'message'},
    {title: 'SM', value: 'sm'},
];
const Search = (props) => {
    const dispatch = useDispatch();
    const getSearchFilter = useSelector(getSelectedFiltersType({
        filterType: 'search',
        default: FILTERS.search,
    })) || FILTERS.search;

    const router = useRouter();
    const [formHeight, setFormHeight] = useState(0);
    const styles = UseStyles({
        formHeight: formHeight,
    }, {link: true});

    const { register, handleSubmit, control, setValue, watch } = useForm({
        mode: 'onKeypress',
    });
    const category = watch('category', '');
    const formRef = useRef();

    const onSearch = async (dataSearch) => {
        generateRouterReplace(router, {
            ...(dataSearch.name && {name: dataSearch.name}),
            category_search: (categories.find(e => e.value === category) || {}).value || null,
        })

        if (document.activeElement) {
            document.activeElement.blur();
        }
    }

    useEffect(() => {
        if (getSearchFilter.category_search?.value) {
            setValue([{category: getSearchFilter.category_search.value}]);
        } else {
            setValue([{category: category || '*'}]);
        }
    }, [getSearchFilter, category]);

    useEffect(() => {
        setValue([{category}]);
    }, [category]);

    useEffect(() => {
        dispatch(setSelectedFilter({filterType: 'search', value: {
            name: router.query.name || '',
            category_search: (categories.find(e => e.value === (router.query.category_search || '*')) || {}) || null,
        }}))
    }, [router.query.name, router.query.category_search])

    useEffect(() => {
        if (formRef.current) setFormHeight(formRef.current.getBoundingClientRect().height)
    }, [formRef.current, props.openMobile])

    return (
        <div className={`${styles['search-wrapper']} ${props.openMobile ? 'opened_mobile' : ''}`}>
            <form ref={formRef} className="main-search-form" onSubmit={handleSubmit(onSearch)}>
                <Input
                    className="search-input"
                    name="name"
                    type="text"
                    value={getSearchFilter.name}
                    refBind={register()}
                    fullWidth={true}
                    placeholder="Waar ben je naar op zoek?"
                    size="md"/>
                <Controller
                    as={
                        <Select />
                    }
                    defaultValue={category}
                    control={control}
                    rules={{}}
                    className="search-select"
                    disabled={false}
                    disableScrollLock={false}
                    width={'225'}
                    placeholder="Alle categorieën"
                    paperMarginTop={4}
                    theme={'light'}
                    name="category"
                    options={categories}
                    size={'md'}
                />
                <Button
                    className="search-button"
                    icon={{className: 'icon-search', direction: 'left'}}
                    size={'md'}
                    text="Zoek"
                    type="submit"
                    typeButton="cta"
                />
            </form>
        </div>
    )
}
Search.defaultProps = {}
Search.propTypes = {
    openMobile: PropTypes.bool,
}
export default React.memo(Search)