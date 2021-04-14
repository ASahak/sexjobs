import React, {useEffect, useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Input, DatePicker, TimePicker,} from 'Components/Shared/UI';
import { useForm } from 'react-hook-form';
import AddPWE from 'Components/Dumb/AddPhoneWebSiteEmail';

const ContactFirstFields = React.forwardRef((props, ref) => {
    const [contactBy, setContactBy] = useState(null);

    const { register, errors, setValue, watch } = useForm({
        mode: 'onBlur',
    });
    const fieldsData = watch({nest: true});

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(fieldsData);
        }

    }));

    useEffect(() => {
        register('starting_date');
        register('starting_time');
    }, [register])

    useEffect(() => {
        setValue('contact_by', contactBy)
        setValue('phone', '');
    }, [contactBy])

    return (
        <div>
            <h4>Title</h4>
            <Input
                name="title"
                refBind={register()}
                placeholder="Ad's title"
                type="text"
                fullWidth={true}
                required={true}
                margin={[0, 0, 16, 0]}
            />
            <h4>Description</h4>
            <Input
                name="description"
                refBind={register()}
                required={true}
                placeholder="Ad's description"
                textArea={{rows: 5}}
                fullWidth={true}
                margin={[0, 0, 16, 0]}
            />
            {props.isEvent ? <>
                <h4>Date and starting time</h4>
                <div className="date-and-starting-time">
                    <DatePicker
                        margin={[0, 8, 16, 0]}
                        shouldDisablePastDate={true}
                        width="50%"
                        theme={'light'}
                        change={v => setValue('starting_date', v, { shouldValidate: true, shouldDirty: true })}
                        format="MM/dd/yyyy"
                    />
                    <TimePicker
                        margin={[0, 0, 16, 8]}
                        change={(v) => setValue('starting_time', v.value, { shouldValidate: true, shouldDirty: true })}
                        placeholder="hh:mm"
                        width="50%"
                        size="md"
                        options={{start: '00:00', interval: 30, end: '24:00'}}
                    />
                </div>
            </> : ''}
            <h4>Location</h4>
            <Input
                refBind={register()}
                name="location_or_postal_code"
                placeholder="City or postal code"
                type="text"
                fullWidth={true}
                margin={[0, 0, 16, 0]}
            />
            <div className="contact-info-wrap">
                <h4>
                    Contact
                    <span className="icon-Info-alt"></span>
                </h4>
                <p>How would you like to receive your messages?</p>
                <ul>
                    <li>
                        <Input
                            theme="dark"
                            events={['change']}
                            onChange={(evt) => {
                                setContactBy(evt.target.id)
                            }}
                            type="radio"
                            name="contact_by"
                            label={{title: 'Phone only', color: '#fff', forId: 'by_phone'}}
                            margin={[8, 0, 8]}
                        />
                    </li>
                    <li>
                        <Input
                            theme="dark"
                            events={['change']}
                            onChange={(evt) => setContactBy(evt.target.id)}
                            name="contact_by"
                            label={{title: 'Messenger only', color: '#fff', forId: 'by_messenger'}}
                            type="radio"
                            margin={[8, 0, 8]}
                        />
                    </li>
                    <li>
                        <Input
                            theme="dark"
                            label={{title: 'By phone and by messenger', color: '#fff', forId: 'by_msg_phone'}}
                            type="radio"
                            events={['change']}
                            onChange={(evt) => setContactBy(evt.target.id)}
                            name="contact_by"
                            margin={[8, 0, 8]}
                        />
                    </li>
                </ul>
                {(contactBy === 'by_phone' || contactBy === 'by_msg_phone') ? <AddPWE
                    helperText="Niet eerder gebrukte telefoonnummers worden altijd eerst geverifeerd."
                    titleDialog="Add new phone number"
                    inputLabel="Phone"
                    placeholder="Add Phone"
                    type="phone" /> : ''}
            </div>
        </div>
    )
})

ContactFirstFields.propTypes = {
    isEvent: PropTypes.bool,
}
export default React.memo(ContactFirstFields);