import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import {Input} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';

const _years = [
    {title: 2019, value: 2019},
    {title: 2020, value: 2020},
    {title: 2021, value: 2021},
]
const FiltersPopoverContent = (props) => {
    const [years, setYears] = useState(_years); //todo
    const [months, setMonths] = useState(GLOBAL_CONSTANTS.months);
    const [selected, setSelected] = useState([]);

    const selectedItemsDetecting = useCallback((checked, value) => {
        setSelected([...selected.concat(value).filter(e => checked ? e : e !== value)])
    }, [years, months, selected])

    const checkIfChecked = useCallback((data, value) => {
        return data.findIndex(e => e === value) > -1
    }, [selected]);

    const inputs = useCallback((inputs) => {
        return inputs.map(input => {
            const isChecked = checkIfChecked(selected, input.value);
            return (<li key={input.value}>
                    <Input
                        attr={{...(isChecked && {checked: true})}}
                        events={['change']}
                        onChange={(evt) => selectedItemsDetecting(evt.target.checked, input.value)}
                        type="checkbox"
                        margin={[0, 0, 8, 0]}
                        label={{title: input.title, color: '#000', forId: 'for-id-input_' + input.value}}
                    />
                </li>
            )})
    }, [years, months, selected])

    return (
        <div className="filters-billing">
            <h4>Filter op</h4>
            <p>Jaar</p>
            <ul>
                {inputs(years)}
            </ul>
            <p>Maand</p>
            <ul>
                {inputs(months)}
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

const MainOptions = (_props) => {
    const [popContent, setPopContent] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeIcon, setActiveIcon] = useState(null);

    const classesDropDown = useDropDownPopoverStyles({});
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        !anchorEl && setActiveIcon(null)
    }, [anchorEl])

    return (
        <div className="options-container">
            <span className="icon-Filters" data-icon-active={activeIcon === 'filters'} onClick={(event) => {
                setPopContent(<FiltersPopoverContent />);
                setAnchorEl(event.currentTarget);
                setActiveIcon('filters')
            }}></span>
            <span className="icon-Overflow-menu" onClick={(event) => {
                setPopContent(<p onClick={() => {
                    setAnchorEl(null);
                }}>
                    <span className="icon-Download"></span>
                    Alles downloaden
                </p>);
                setAnchorEl(event.currentTarget)
            }}></span>
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
                <div className="billing-popover-options">
                    {popContent}
                </div>
            </Popover>
        </div>
    )
}

MainOptions.propTypes = {}
export default React.memo(MainOptions)