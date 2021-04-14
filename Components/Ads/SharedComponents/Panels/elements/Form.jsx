import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {DatePicker, InputLikeSelect, TimePicker} from 'Components/Shared/UI';
import {ADVERTISEMENTS} from 'utils/constants';
import {useSelector} from 'react-redux';
import {baseSelector} from 'store/reselect';

const Form =(props) => {
    const baseState = useSelector(baseSelector());
    const {deviceType} = baseState.deviceParams;

    const [formValues, setFormValues] = useState({
        periodCount: ADVERTISEMENTS.periodCountOptions[0].value,
        periodInterval: ADVERTISEMENTS.periodIntervalOptions[0].value,
    });

    const updateInputsValue = useCallback((prop, value) => {
        setFormValues(prevState => ({
            ...prevState,
            [prop]: value,
        }))
    }, [formValues])

    useEffect(() => {
        props.emitInputChanges(formValues)
    }, [formValues])

    return (
        <form>
            <h4 className="form-flex-inputs-title">Period</h4>
            <div className="flex-inputs">
                <InputLikeSelect
                    fullWidth={true}
                    margin={[0, 8, 16, 0]}
                    change={(v) => updateInputsValue('periodCount', v)}
                    value={formValues.periodCount}
                    options={ADVERTISEMENTS.periodCountOptions}/>
                <InputLikeSelect
                    fullWidth={true}
                    margin={[0, 0, 16, 8]}
                    change={(v) => updateInputsValue('periodInterval', v)}
                    value={formValues.periodInterval}
                    options={ADVERTISEMENTS.periodIntervalOptions}/>
            </div>
            {!props.withoutStarting ? <>
                <h4 className="form-flex-inputs-title">Starting moment</h4>
                <div className="flex-inputs mobile-full-inputs">
                    <DatePicker
                        slideByArrows={true}
                        margin={[0, 8, 16, 0]}
                        shouldDisablePastDate={true}
                        width="50%"
                        theme={'light'}
                        change={v => updateInputsValue('startingDate', v)}
                        format="MM/dd/yyyy"
                    />
                    <TimePicker
                        margin={[0, 0, 16, 8]}
                        slideByArrows={true}
                        change={v => updateInputsValue('startingTime', v)}
                        placeholder="hh:mm"
                        width="50%"
                        size="md"
                        options={{start: '00:00', interval: 30, end: '24:00'}}
                    />
                </div>
            </> : ''}
            {props.description ? <p>{props.description}</p> : ''}
        </form>
    )
}
Form.propTypes = {
    emitInputChanges: PropTypes.func.isRequired,
    withoutStarting: PropTypes.bool,
    description: PropTypes.string,
};
export default React.memo(Form);