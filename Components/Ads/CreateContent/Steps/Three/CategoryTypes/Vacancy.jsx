import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {Button} from 'Components/Shared/UI';
import ContactFirstFields from '../elements/ContactFirstFields';
import WebSite from '../elements/WebSite';
import TypeOfEmployment from '../elements/TypeOfEmployment';
import TypeOfWork from '../elements/TypeOfWork';
import WorkingHours from '../elements/WorkingHours';
import SalaryIndication from '../elements/SalaryIndication';

const Vacancy = (props) => {
    const { handleSubmit } = useForm({
        mode: 'onKeypress',
    });

    const childRefContactFields = useRef();
    const webSitesRef = useRef();
    const typeOfWorkRef = useRef();
    const typeOfEmploymentRef = useRef();
    const workingHoursRef = useRef();
    const salaryRef = useRef();

    const saveAdvertisement = async (data) => {
        // todo must make Saving functionality
        try {
            const contactFieldsData = await childRefContactFields.current.getFormData();
            const websitesData = await webSitesRef.current.getFormData();
            const typeOfWorkData = await typeOfWorkRef.current.getFormData();
            const typeOfEmploymentData = await typeOfEmploymentRef.current.getFormData();
            const workingHoursData = await workingHoursRef.current.getFormData();
            const salaryData = await salaryRef.current.getFormData();
            console.log(data, contactFieldsData, websitesData, typeOfWorkData, typeOfEmploymentData, workingHoursData, salaryData);
        } catch (err) {
            console.error(err.message)
        } finally {
            props.nextStep('four');
        }
    }

    return (
        <div className="vacancy-container_ad">
            <form onSubmit={handleSubmit(saveAdvertisement)}>
                <ContactFirstFields ref={childRefContactFields} isEvent={true}/>
                <TypeOfWork ref={typeOfWorkRef}/>
                <TypeOfEmployment ref={typeOfEmploymentRef}/>
                <WorkingHours ref={workingHoursRef}/>
                <SalaryIndication ref={salaryRef}/>
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
Vacancy.propsTypes = {
    nextStep: PropTypes.func.isRequired,
};
export default React.memo(Vacancy);