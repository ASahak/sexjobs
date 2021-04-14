import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Controller} from 'react-hook-form';
import {Select} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import {adjustDays} from 'utils/handlers';

const DateOfBirth = (props) => {
    const styles = UseStyles({}, {link: true});
    const [monthMaxDay, setMonthMaxDay] = useState(31);
    const watchValueOfYear = props.watchYear;
    const watchValueOfMonth = props.watchMonth;

    const days = useCallback((maxDay) => {
        return Array.from({length: maxDay}, (_, i) => i + 1).reduce((acc, item) => {
            acc.push({title: item, value: item})
            return acc;
        }, [])
    }, [monthMaxDay]);

    const years = useMemo(() => {
        const begin = 1980;
        return Array.from({length: 40}, (_, i) => begin + i + 1).reduce((acc, item) => {
            acc.push({title: item, value: item})
            return acc;
        }, [])
    }, []);

    useEffect(() => {
        if (watchValueOfYear || watchValueOfMonth) {
            adjustDays(watchValueOfYear, watchValueOfMonth, setMonthMaxDay)
        }
    }, [watchValueOfYear, watchValueOfMonth]);

    return (
        <div className={styles['date-of-birth-container']}>
            <h5 className="like-filed-label">Date of birth</h5>
            <div className="wrapper-fields">
                <Controller
                    as={
                        <Select />
                    }
                    {...props.selects.day}
                    control={props.control}
                    options={days(monthMaxDay)}
                    errors={props.errors[props.selects.day.name] && props.errors[props.selects.day.name].message}
                />
                <Controller
                    as={
                        <Select />
                    }
                    {...props.selects.month}
                    control={props.control}
                    options={GLOBAL_CONSTANTS.months}
                    errors={props.errors[props.selects.month.name] && props.errors[props.selects.month.name].message}
                />
                <Controller
                    as={
                        <Select />
                    }
                    {...props.selects.year}
                    control={props.control}
                    options={years}
                    errors={props.errors[props.selects.year.name] && props.errors[props.selects.year.name].message}
                />
            </div>
        </div>
    )
}
DateOfBirth.propTypes = {
    selects: PropTypes.object.isRequired,
    watchYear: PropTypes.any,
    watchMonth: PropTypes.any,
    control: PropTypes.object,
    errors: PropTypes.object,
};
export default React.memo(DateOfBirth);