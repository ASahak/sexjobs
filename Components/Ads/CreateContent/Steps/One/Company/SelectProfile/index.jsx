import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Select} from 'Components/Shared/UI';
import {Controller, useForm} from 'react-hook-form';

let _formData = null;
const SelectProfile = (props) => {
    const [advertisersName, setAdvertisersName] = useState([...Object.keys(props.selectedProfiles)]);
    const { register, errors, control, watch, setValue } = useForm({
        mode: 'onKeypress',
    });
    const formData = watch({ nest: true })

    const advertisers = useCallback((alreadySelected, selectName) => {
        const _alreadySelected = Object.values(alreadySelected);
        return props.advertisers.reduce((acc, item) => {
            if (_alreadySelected.indexOf(item.id) === -1 || (alreadySelected.hasOwnProperty(selectName) && alreadySelected[selectName] === item.id)) {
                acc.push({title: item.name, value: item.id});
            }
            return acc;
        }, [])
    }, [props.advertisers]);

    useEffect(() => {
        advertisersName.forEach(e => {
            if (props.selectedProfiles.hasOwnProperty(e) && props.selectedProfiles[e]) {
                setValue(e, props.selectedProfiles[e])
            }
        })
    }, [advertisersName, props.selectedProfiles])

    useEffect(() => {
        if (Object.values(formData).length && JSON.stringify(_formData) !== JSON.stringify(formData)) {
            props.emitSelectedAdvertisers(formData)
            _formData = {...formData};
        }
    }, [formData])

    return (
        <div className="select-profile_container">
            <h4>Select Profile</h4>
            <div className="select-options_with-plus">
                <div className="list-wrapper_multiple">
                    {advertisersName.map((select, index) => <Controller
                        as={
                            <Select/>
                        }
                        key={select}
                        margin={[0, 0, 16, 0]}
                        defaultValue=""
                        control={control}
                        name={select}
                        options={advertisers(formData, select)}
                        rules={{}}
                        label={{title: "Advertiser " + (index > 0 ? index + 1 : ''), color: '#fff'}}
                        errors={errors[select] && errors[select].message}
                        placeholder="Select a profile"
                        size={'md'}
                        fullWidth={true}
                    />)}
                </div>
                <span
                    className="icon-Add"
                    onClick={() => setAdvertisersName([...advertisersName, 'advertiser' + advertisersName.length])}
                    aria-disabled={props.advertisers.length === advertisersName.length}
                ></span>
            </div>
        </div>
    )
}
SelectProfile.defaultProps = {
    advertisers: [],
    selectedProfiles: {},
    emitSelectedAdvertisers: () => void(0),
};
SelectProfile.propTypes = {
    emitSelectedAdvertisers: PropTypes.func,
    advertisers: PropTypes.array,
    selectedProfiles: PropTypes.object,
};
export default React.memo(SelectProfile);