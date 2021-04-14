import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {Input, Select, Button} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';

const NoProfile = () => {
    const { register, handleSubmit, errors, control } = useForm({
        mode: 'onKeypress',
    });

    const saveProfile = async (data) => {
        console.log(data);
        // todo must make Saving functionality
    }

    return (
        <div className="no-person-profile_container">
            <h4 className="title-content">Welcome to Sexjobs!</h4>
            <p className="sub-title-content">
                We are happy you decided to place your first advertisement on Sexjobs! To place an advertisement you need a profile. To create a profile we need to following data.
            </p>
            <form onSubmit={handleSubmit(saveProfile)}>
                <div className="flex-inputs mobile-full-inputs">
                    <Input
                        refBind={register()}
                        type="text"
                        name="name"
                        errors={errors.name && errors.name.message}
                        label={{title: "Company name ", color: '#fff'}}
                        fullWidth={true}
                        placeholder="Please specify your company name"
                        margin={[0, 8, 16, 0]}
                    />
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 0, 16, 8]}
                        defaultValue=""
                        control={control}
                        name="country"
                        options={GLOBAL_CONSTANTS.countries}
                        rules={{}}
                        label={{title: "Country", color: '#fff'}}
                        errors={errors.country && errors.country.message}
                        placeholder="Where is your company located?"
                        size={'md'}
                        fullWidth={true}
                    />
                </div>
                <div className="like-label-input-filed">
                    <h4>Postal Code</h4>
                    <div className="flexible-wrap" style={{paddingBottom: '16px'}}>
                        <Input
                            refBind={register()}
                            type="number"
                            name="postal_code"
                            width="80%"
                            errors={errors.postal_code && errors.postal_code.message}
                            placeholder="1111"
                            margin={[0, 8, 0, 0]}
                        />
                        <Input
                            width="20%"
                            refBind={register()}
                            type="text"
                            name="zip"
                            errors={errors.zip && errors.zip.message}
                            placeholder="AB"
                            margin={[0, 0, 0, 8]}
                        />
                        <p className="helper-text_bt">
                             Adding the letters of the postal code is optional
                        </p>
                    </div>
                </div>
                <h4 className="title-content">Additional data</h4>
                <p className="sub-title-content">To attract more visitors to your advertisement we
                    recommend you to fill in additional profile data.
                    This is optional</p>
                <a>Complete your profile</a>
                <Button
                    type="submit"
                    typeButton="primary"
                    width={250}
                    mobileFullWidth={true}
                    text="Maak profiel aan en ga verder"
                    margin={[20, 0, 0]}
                />
            </form>
        </div>
    )
}
export default React.memo(NoProfile);