import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Header from './shared/header';
import Body from './shared/body';
import {
    Input
} from 'Components/Shared/UI';
import {
    getSelectedFiltersType,
} from 'store/reselect';
import {setSelectedFilter} from 'store/actions';
import {generateRouterReplace} from 'utils/handlers';
import {useRouter} from 'next/router';
import {useSelector, useDispatch} from 'react-redux';

let _query;
const NowAvailable = (props) => {
    const dispatch = useDispatch();

    const getSelectedNowAvailable = useSelector(getSelectedFiltersType({
        filterType: 'now_available',
        default: null,
    }));

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const bodyRef = useRef();

    const filterByAvailable = (value) => {
        router.query = _query;
        generateRouterReplace(router, {
            now_available: value,
        })
    }
    useEffect(() => {
        _query = router.query;
    }, [router.query]);

    useEffect(() => {
        dispatch(setSelectedFilter({filterType: 'now_available', value: router.query.now_available || null}))
    }, [router.query.now_available])

    return (
        <div className="now-available-container">
            <Header title="Now Available" isOpen={open} toggleBody={(val) => setOpen(val)} mobileHighlight={{
                ...(getSelectedNowAvailable && {data: +getSelectedNowAvailable ? 'Yes' : 'No'}),
            }}/>
            <Body slideToggle={open} necessaryRender={{
                query: router.query.now_available,
                open,
                getAvailable: getSelectedNowAvailable,
            }}>
                <div className="now-available_body" ref={bodyRef} key={getSelectedNowAvailable}>
                    <div>
                        <Input
                            events={['change']}
                            onChange={() => filterByAvailable('1')}
                            className="checkbox-wrapper"
                            width={"calc(100% - 40px)"}
                            type="radio"
                            name="now_available"
                            attr={{...(getSelectedNowAvailable === '1' && {checked: true})}}
                            label={{title: "Yes", color: '#fff', forId: 'now-available_yes'}}
                        />
                        <span>(1257)</span>
                    </div>
                    <div>
                        <Input
                            events={['change']}
                            onChange={() => filterByAvailable('0')}
                            className="checkbox-wrapper"
                            width={"calc(100% - 40px)"}
                            type="radio"
                            name="now_available"
                            attr={{...(getSelectedNowAvailable === '0' && {checked: true})}}
                            label={{title: "No", color: '#fff', forId: 'now-available_no'}}
                        />
                        <span>(200)</span>
                    </div>
                </div>
            </Body>
        </div>
    )
}
NowAvailable.defaultProps = {};
NowAvailable.propTypes = {};
export default React.memo(NowAvailable);