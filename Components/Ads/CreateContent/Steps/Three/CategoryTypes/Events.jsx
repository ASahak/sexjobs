import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'Components/Shared/UI';
import WebSite from '../elements/WebSite';
import EventType from '../elements/EventType';
import Pricing from '../elements/Pricing';
import { useForm } from 'react-hook-form';
import ContactFirstFields from '../elements/ContactFirstFields';

const Events = (props) => {
    const { handleSubmit } = useForm({
        mode: 'onKeypress',
    });

    const childRefContactFields = useRef();
    const childRefEventType = useRef();
    const pricingRef = useRef();
    const webSitesRef = useRef();

    const saveAdvertisement = async (data) => {
        // todo must make Saving functionality
        try {
            const contactFieldsData = await childRefContactFields.current.getFormData();
            const eventTypeData = await childRefEventType.current.getFormData();
            const pricingData = await pricingRef.current.getFormData();
            const websitesData = await webSitesRef.current.getFormData();
            console.log(data, contactFieldsData, eventTypeData, pricingData, websitesData);
        } catch (err) {
            console.error(err.message)
        } finally {
            props.nextStep('four');
        }
    }

    return (
        <div className="events-container_ad">
            <form onSubmit={handleSubmit(saveAdvertisement)}>
                <ContactFirstFields ref={childRefContactFields} isEvent={true}/>
                <EventType ref={childRefEventType}/>
                <Pricing ref={pricingRef} name="audience" placeholder="Audience"/>
                <WebSite ref={webSitesRef}/>

                <Button
                    type="submit"
                    margin={[35, 0, 0]}
                    width={250}
                    mobileFullWidth={true}
                    text="Ga door naar foto's toevoegen"
                    typeButton="primary"
                />
            </form>
        </div>
    )
}
Events.propsTypes = {
    nextStep: PropTypes.func.isRequired,
};
export default React.memo(Events);