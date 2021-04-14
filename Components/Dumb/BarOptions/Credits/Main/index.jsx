import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import {Input} from 'Components/Shared/UI';
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';

const MainOptions = (_props) => {
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
                setAnchorEl(event.currentTarget);
                setActiveIcon('filters')
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
                <div className="credits-popover-options">
                    <ul>
                        <li>
                            <Input
                                name="filter_credits"
                                events={['change']}
                                type="radio"
                                margin={[0, 0, 8, 0]}
                                label={{title: 'Expenses only', color: '#000', forId: 'for-id-input_expenses'}}
                            />
                        </li>
                        <li>
                            <Input
                                name="filter_credits"
                                events={['change']}
                                type="radio"
                                margin={[4, 0, 8, 0]}
                                label={{title: 'Income only', color: '#000', forId: 'for-id-input_income'}}
                            />
                        </li>
                        <li>
                            <Input
                                name="filter_credits"
                                events={['change']}
                                type="radio"
                                margin={[4, 0, 0, 0]}
                                label={{title: 'All', color: '#000', forId: 'for-id-input_all'}}
                            />
                        </li>
                    </ul>
                </div>
            </Popover>
        </div>
    )
}

MainOptions.propTypes = {}
export default React.memo(MainOptions)