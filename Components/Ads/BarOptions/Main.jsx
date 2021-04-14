import React, {useCallback, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {dispatch} from 'hooks/use-bus';
import Popover from '@material-ui/core/Popover';
import {Input} from 'Components/Shared/UI';
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';
import {calculateIconsForOverflow} from 'utils/handlers';
import {useSelector} from 'react-redux';
import {baseSelector} from 'store/reselect';

const FiltersPopoverContent = (props) => {
    const [names, setNames] = useState(['Desiree', 'Jose', 'Liefje', 'Mara', 'penny']);
    const [statuses, setStatuses] = useState(['Online', 'Verlopen', 'Afgekeurd', 'Watchen op goedkeuring', 'Gekoppeide advertenties']);
    const [categories, setCategories] = useState(['SM', 'Cam & Telefoonsex', 'Betailing in natura', 'Erotische vacatures', 'Gay & Bi']);
    const [selected, setSelected] = useState([]);

    const selectedItemsDetecting = useCallback((checked, value) => {
        setSelected([...selected.concat(value).filter(e => checked ? e : e !== value)])
    }, [names, statuses, categories, selected])

    const checkIfChecked = useCallback((data, value) => {
        return data.findIndex(e => e === value) > -1
    }, [selected]);

    const inputs = useCallback((inputs) => {
        return inputs.map(input => {
            const isChecked = checkIfChecked(selected, input);
            return (<li key={input + isChecked}>
                    <Input
                        attr={{...(isChecked && {checked: true})}}
                        onChange={(evt) => selectedItemsDetecting(evt.target.checked, input)}
                        type="checkbox"
                        margin={[0, 0, 8, 0]}
                        label={{title: input, color: '#000', forId: 'for-id-input_' + input}}
                    />
                </li>
            )})
    }, [names, statuses, selected])

    return (
        <div className="filters-popover_ads">
            <p>Naam</p>
            <ul>
                {inputs(names)}
            </ul>
            <p>Status</p>
            <ul>
                {inputs(statuses)}
            </ul>
            <p>Categorie</p>
            <ul>
                {inputs(categories)}
            </ul>
            <a onClick={props.onSelect}>
                Selecteer
            </a>
        </div>
    )
}
FiltersPopoverContent.propTypes = {
    onSelect: PropTypes.func,
}

let maxIconCountInWrap = 4;
const MainOptions = (props) => {
    const baseState = useSelector(baseSelector());
    const {deviceType} = baseState.deviceParams;

    const [searchOpen, setSearchOpen] = useState(false);
    const [popContent, setPopContent] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [overflowList, setOverflowList] = useState([
        <span key="multiple-items-select" onClick={() => {
            setAnchorEl(null);
            dispatch('SELECT_MULTIPLE_ADS');
        }}>
            Select multiple items
        </span>
    ]);

    const optionsRef = useRef();
    const overflowIconRef = useRef();
    const classesDropDown = useDropDownPopoverStyles({});
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const visibleIcons = [
        <span className="icon-Search" key={'search'} data-complete={'search'}
              onClick={() => setSearchOpen(true)}
        ><figure>Search</figure></span>,
        <span className="icon-Filters" key={'equalizer'} data-complete={'equalizer'} onClick={(event) => {
            setPopContent(<FiltersPopoverContent />);
            setAnchorEl(event.currentTarget.closest('.overflow-menu') ? overflowIconRef.current : event.currentTarget)
        }}>
            <figure>Filter</figure>
        </span>,
    ];

    const [flexibleIcons, setFlexibleIcons] = useState([...visibleIcons]);


    const popoverContent = useCallback(() => {
        return (<>
            {popContent}
        </>)
    }, [popContent]);

    const detectFlexibility = (mainWrap) => {
        setAnchorEl(null);
        if (props.overflow) {
            const {_overFlowList, _flexibleIcons} = calculateIconsForOverflow(
                mainWrap, overflowList, visibleIcons, maxIconCountInWrap
            );
            setOverflowList(_overFlowList)

            setFlexibleIcons(_flexibleIcons);
        }
    }

    useEffect(() => {
        if (props.type === 'main') {
            maxIconCountInWrap = 4;
        } else if (props.type === 'sub') {
            maxIconCountInWrap = 3;
        }
    }, [props.type])

    useEffect(() => {
        if (optionsRef.current && optionsRef.current.closest('.sj-bar-with-options')) {
            detectFlexibility(optionsRef.current.closest('.sj-bar-with-options'), null);
        }
    }, [baseState.deviceParams]);

    return (
        <div ref={optionsRef} className="options-container">
            <div className={`search-wrap ${searchOpen ? 'search-wrap_open' : ''}`}>
                <span className="icon-Back" onClick={() => setSearchOpen(false)}></span>
                <form>
                    <Input
                        fullWidth={true}
                        type="text"
                        placeholder="Zoeken in berichten"
                        customStylesInput={{borderRadius: '30px', padding: '10.5px 10px'}}
                        size="md"
                    />
                </form>
            </div>
            {flexibleIcons.map(e => e)}

            {props.overflow && deviceType === 'mobile' ? <span ref={overflowIconRef} className="icon-Overflow-menu" onClick={(event) => {
                setPopContent(overflowList.map(e => e));
                setAnchorEl(event.currentTarget)
            }}></span> : ''}
            <Popover
                id={id}
                classes={classesDropDown}
                open={open}
                anchorEl={anchorEl}
                PaperProps={{
                    className: 'overflow-menu-popover',
                    style: {
                        width: '190px'
                    }
                }}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className="overflow-menu">
                    {popoverContent()}
                </div>
            </Popover>
        </div>
    )
}

MainOptions.defaultProps = {
    overflow: true,
}

MainOptions.propTypes = {
    overflow: PropTypes.bool,
}
export default React.memo(MainOptions)