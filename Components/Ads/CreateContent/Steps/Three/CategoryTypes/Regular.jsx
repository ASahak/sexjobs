import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'Components/Shared/UI';
import { useForm } from 'react-hook-form';
import ContactFirstFields from '../elements/ContactFirstFields';
import WebSite from '../elements/WebSite';
import Availability from '../elements/Availability';
import TypeOfLocation from '../elements/TypeOfLocation';
import Possibilities from '../elements/Possibilities';
import Pricing from '../elements/Pricing';

const Regular = (props) => {
    const { handleSubmit } = useForm({
        mode: 'onKeypress',
    });
    const childRefContactFields = useRef();
    const webSitesRef = useRef();
    const availabilityRef = useRef();
    const typeOfLocationsRef = useRef();
    const possibilitiesRef = useRef();
    const pricingRef = useRef();

    const saveAdvertisement = async (data) => {
        // todo must make Saving functionality
        try {
            const contactFieldsData = await childRefContactFields.current.getFormData();
            const websitesData = await webSitesRef.current.getFormData();
            const availabilityData = await availabilityRef.current.getFormData();
            const typeOfLocationsData = await typeOfLocationsRef.current.getFormData();
            const possibilitiesData = await possibilitiesRef.current.getFormData();
            const pricingData = await pricingRef.current.getFormData();
            console.log(data, contactFieldsData, websitesData, availabilityData, typeOfLocationsData, possibilitiesData, pricingData);
        } catch (err) {
            console.error(err.message)
        } finally {
            props.nextStep('four');
        }
    }

    return (
        <div className="regular-container_ad">
            <form onSubmit={handleSubmit(saveAdvertisement)}>
                <ContactFirstFields ref={childRefContactFields} />
                <WebSite ref={webSitesRef}/>
                <Availability ref={availabilityRef}/>
                <TypeOfLocation ref={typeOfLocationsRef}/>
                <Possibilities ref={possibilitiesRef}/>
                <Pricing ref={pricingRef} name="duration" placeholder="Duration"/>

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
Regular.propsTypes = {
    nextStep: PropTypes.func.isRequired,
};
export default React.memo(Regular);