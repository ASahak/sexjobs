import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {Input, Select, DateOfBirth, Button} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';

const NoProfile = () => {
    const { register, handleSubmit, errors, watch, control, getValues } = useForm({
        mode: 'onKeypress',
    });

    const valueOfYear = watch('profile_year', '');
    const valueOfMonth = watch('profile_month', '');

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
                        label={{title: "Your Name on Sexjobs", color: '#fff'}}
                        fullWidth={true}
                        placeholder="Which name would you like to use?"
                        margin={[0, 8, 16, 0]}
                    />
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 0, 16, 8]}
                        defaultValue=""
                        control={control}
                        name="account_type"
                        options={GLOBAL_CONSTANTS.genders}
                        rules={{}}
                        label={{title: "Gender", color: '#fff'}}
                        errors={errors.account_type && errors.account_type.message}
                        placeholder="Wat is je geslacht?"
                        size={'md'}
                        fullWidth={true}
                    />
                </div>
                <DateOfBirth
                    errors={errors}
                    control={control}
                    watchYear={valueOfYear}
                    watchMonth={valueOfMonth}
                    selects={{
                        day: {
                            width: 'calc(25% - 8px)',
                            margin: [0, 8, 0, 0],
                            defaultValue: '',
                            name: 'profile_day',
                            rules: {},
                            placeholder: 'dd',
                            size: 'md',
                        },
                        month: {
                            width: 'calc(25% - 8px)',
                            margin: [0, 0, 0, 8],
                            defaultValue: '',
                            name: 'profile_month',
                            rules: {},
                            placeholder: 'mm',
                            size: 'md',
                        },
                        year: {
                            width: '50%',
                            margin: [0, 0, 0, 16],
                            defaultValue: '',
                            name: 'profile_year',
                            rules: {},
                            placeholder: 'yyyy',
                            size: 'md',
                        },
                    }}
                />
                <div className="attention-wrap">
                    <p>ATTENTION!</p>
                    <p>
                        - You can't edit your gender and date of birth after
                        submission
                    </p>
                    <p>
                        - Your date of birth is not visible to other users,
                        only your age
                    </p>
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