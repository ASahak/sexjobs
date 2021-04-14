import React, {useState, useImperativeHandle, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Switch, Input, TimePicker} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import {useSelector} from 'react-redux';
import {baseSelector} from 'store/reselect';
import UseStyles from './styles';

const _week = GLOBAL_CONSTANTS.week.map(e => ({...e, checked: false, time: {
        start: null,
        end: null,
    }}));
const Day = (props) => {
    const {title, value, time, checked} = props.data;

    return <li>
        <Input
            onChange={(evt) => props.changeData('checked', evt.target.checked)}
            events={['change']}
            theme="dark"
            type="checkbox"
            margin={[15, 0, 15, 0]}
            label={{title, color: '#fff', forId: 'for-id-day_' + value}}
        />
        {checked ? <div className="time-from-until-wrapper">
            <TimePicker
                margin={[0, 5]}
                change={(v) => props.changeData('time', {start: v, end: time.end?.value < v.value ? v : time.end})}
                placeholder="From"
                width={100}
                size="sm"
                value={time.start}
                options={{start: '00:00', interval: 30, end: '24:00'}}
            />
            <TimePicker
                margin={[0, 5]}
                change={(v) => props.changeData('time', {end: v, start: time.start})}
                placeholder="Until"
                width={100}
                size="sm"
                value={ time.end }
                options={{start: time.start?.value || '00:00', interval: 30, end: '24:00'}}
            />
        </div> : ''}
    </li>
};
Day.propTypes = {
    changeData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

const Availability = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});

    const baseState = useSelector(baseSelector());
    const {deviceType} = baseState.deviceParams;
    const [availability, setAvailability] = useState(_week);
    const [isAvailability, setIsAvailability] = useState(false);

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(availability);
        }

    }));

    const toggleDay = useCallback((prop, v, item) => {
        const _availability = [...availability];
        const findItem = _availability.find(e => e.value === item.value);
        if (findItem) {
            findItem[prop] = v;
        }
        setAvailability(_availability)
    }, [availability])

    return (
        <div className={styles['availability-wrapper']}>
            <h4>
                Availability
                <p>
                    <Switch
                        onChange={(v) => setIsAvailability(v.target.checked)}
                        checked={isAvailability}
                        color="default"
                        inputProps={{}}
                    />
                </p>
            </h4>
            {isAvailability ? <div className="availability-section">
                <ul>
                    {availability.map(day => <Day
                        key={day.value}
                        data={day}
                        isMobile={deviceType === 'mobile' || deviceType === 'tablet'}
                        changeData={(prop, v) => toggleDay(prop, v, day)}/>)}
                </ul>
            </div> : ''}
        </div>
    )
})
Availability.propTypes = {}
export default React.memo(Availability);