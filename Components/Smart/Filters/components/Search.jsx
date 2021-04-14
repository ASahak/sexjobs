import React, {useCallback, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import {
    getSelectedFiltersType,
} from 'store/reselect';
import {setSelectedFilter} from 'store/actions';
import {useRouter} from 'next/router';
import {generateRouterReplace} from 'utils/handlers';
import {FILTERS} from 'utils/constants';
import {useSelector, useDispatch} from 'react-redux';

let _query;
const SearchMobile = (props) => {
    const dispatch = useDispatch();
    const getSearchFilter = useSelector(getSelectedFiltersType({
        filterType: 'search',
        default: FILTERS.search,
    }));

    const router = useRouter();

    const resetSearch = useCallback(() => {
        router.query = _query;
        delete router.query.name;
        delete router.query.category_search;
        generateRouterReplace(router, {
            ...router.query
        })
        dispatch(setSelectedFilter({filterType: 'search', value: Filters.search}))
    }, [router.name, router.category_search])

    const generateSearchTitle = useCallback(() => {
        return (getSearchFilter?.name ? getSearchFilter?.name : '') + (getSearchFilter?.category_search.title && getSearchFilter?.category_search.value !== '*' ? ', ' + getSearchFilter?.category_search.title : '')
    }, [getSearchFilter, router.query])

    const isSearch = useMemo(() => {
        return getSearchFilter?.name || (getSearchFilter?.category_search && getSearchFilter?.category_search.value !== '*');
    }, [getSearchFilter, router.query])

    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    return isSearch ? <div className="search-container">
        <Header title="Search" isStatic={true} mobileHighlight={{
            data: generateSearchTitle(),
        }}>
            <span className="icon-bin2 icon_header" onClick={() => resetSearch()}></span>
        </Header>
    </div> : '';
}
SearchMobile.defaultProps = {};
SearchMobile.propTypes = {};
export default React.memo(SearchMobile)
