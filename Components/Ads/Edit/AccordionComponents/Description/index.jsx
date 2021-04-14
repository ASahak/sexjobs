import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Input, DatePicker, TimePicker, InlineToast,} from 'Components/Shared/UI';
import AddPWE from 'Components/Dumb/AddPhoneWebSiteEmail';
import Availability from 'Components/Ads/CreateContent/Steps/Three/elements/Availability';
import TypeOfLocation from 'Components/Ads/CreateContent/Steps/Three/elements/TypeOfLocation';
import Possibilities from 'Components/Ads/CreateContent/Steps/Three/elements/Possibilities';
import Pricing from 'Components/Ads/CreateContent/Steps/Three/elements/Pricing';
import {useForm} from "react-hook-form";

const Description = (props) => {
    const styles = UseStyles({}, {link: true});

    const { register, errors, setValue, watch } = useForm({
        mode: 'onBlur',
    });

    useEffect(() => {
        register('starting_date');
        register('starting_time');
    }, [register])

    return (<div className={styles['description-container']} key={props.updateKey}>
        <Input
            name="title"
            refBind={register()}
            errors={errors.title && errors.title.message}
            label={{title: 'Title', color: '#fff'}}
            placeholder="Ad's title"
            type="text"
            fullWidth={true}
            required={true}
            margin={[0, 0, 16, 0]}
        />
        <Input
            name="description"
            refBind={register()}
            errors={errors.description && errors.description.message}
            label={{title: 'Description', color: '#fff'}}
            required={true}
            placeholder="Ad's description"
            textArea={{rows: 5}}
            fullWidth={true}
            margin={[0, 0, 16, 0]}
        />

        <h4 className="form-flex-inputs-title">Date and starting time</h4>
        <div className="flex-inputs mobile-full-inputs">
            <DatePicker
                margin={[0, 8, 16, 0]}
                shouldDisablePastDate={true}
                width="50%"
                theme={'light'}
                required={true}
                change={v => setValue('starting_date', v, { shouldValidate: true, shouldDirty: true })}
                format="MM/dd/yyyy"
                slideByArrows={true}
            />
            <TimePicker
                slideByArrows={true}
                required={true}
                margin={[0, 0, 16, 8]}
                change={(v) => setValue('starting_time', v.value, { shouldValidate: true, shouldDirty: true })}
                placeholder="hh:mm"
                width="50%"
                size="md"
                options={{start: '00:00', interval: 30, end: '24:00'}}
            />
        </div>
        <h4 className="like-form-secondary-title">Accessibility</h4>
        <AddPWE
            titleDialog="Add new email"
            inputLabel="Email"
            placeholder="Add Email"
            helperText="Niet eerder gebrukte telefoonnummers worden altijd eerst geverifeerd."
            type="email" />
        <AddPWE
            helperText="Niet eerder gebrukte telefoonnummers worden altijd eerst geverifeerd."
            titleDialog="Add new phone number"
            inputLabel="Phone"
            placeholder="Add Phone"
            type="phone" />
        <AddPWE
            titleDialog="Add new website"
            inputLabel="Website"
            placeholder="Add Website"
            infoRightTop={'€ 0.95 per day'}
            type="website" />
        <br/>
        <InlineToast
            title={'Adding a website is a paid option'}
            type={'info'}
        />
        <Input
            name="location"
            refBind={register()}
            errors={errors.location && errors.location.message}
            label={{title: 'Location', color: '#fff'}}
            placeholder="Vul hier je locatie in"
            type="text"
            fullWidth={true}
            required={true}
            margin={[0, 0, 16, 0]}
        />
        <Availability />
        <TypeOfLocation />
        <Possibilities />
        <Pricing name="duration" placeholder="Duration"/>
    </div>)
}
Description.propTypes = {
    updateKey: PropTypes.bool,
};
export default Description;