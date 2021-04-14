import React, {useEffect, useMemo, useState} from 'react';
import UseStyles from './styles';
import { useForm, Controller } from 'react-hook-form';
import {Input, Button, Select} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';

const MakeProfile = () => {
    const styles= UseStyles({}, {link: true});

    const [monthMaxDay, setMonthMaxDay] = useState(31);
    const [loadingIcon, setLoadingIcon] = useState(false);
    const { register, handleSubmit, errors, control, getValues, watch } = useForm({
        mode: 'onKeypress',
    });

    const valueOfYear = watch('year', '');
    const valueOfMonth = watch('month', '');

    const onMakeProfile = async (data) => {
        setLoadingIcon(true)
        setTimeout(() => { // todo need to make registration api
            setLoadingIcon(false);
        }, 2000)
    }

    const adjustDays = (yearValue, monthValue) => {
        const year = yearValue;
        const month = parseInt(monthValue);
        const days = new Date(year, month, 0).getDate();
        setMonthMaxDay(days || 31);
    }

    const days = useMemo(() => {
        return Array.from({length: monthMaxDay}, (_, i) => i + 1).reduce((acc, item) => {
            acc.push({title: item, value: item})
            return acc;
        }, [])
    }, [monthMaxDay]);

    const years = useMemo(() => {
        const begin = 1980;
        return Array.from({length: 40}, (_, i) => begin + i + 1).reduce((acc, item) => {
            acc.push({title: item, value: item})
            return acc;
        }, [])
    }, []);

    useEffect(() => {
        if (valueOfYear || valueOfMonth) {
            adjustDays(valueOfYear, valueOfMonth)
        }
    }, [valueOfYear, valueOfMonth])

    return (
        <div className={styles['make-profile-container']}>
            <form onSubmit={handleSubmit(onMakeProfile)} >
                <h5>Make a profile</h5>
                <p>Before you can place a new advertisement you need a profile. For this we would like to ask you to fill in the information below.</p>
                <p>
                    If we already have information from you, all you have to do is make sure it is correct and press the “place to advertisement” button.
                </p>
                <Input
                    refBind={register()}
                    type="text"
                    name="name_sj"
                    errors={errors.name_sj && errors.name_sj.message}
                    label={{title: "Your Name on Sexjobs", color: '#fff'}}
                    fullWidth={true}
                    margin={[0, 0, 16, 0]}
                    required={true}
                />
                <Controller
                    as={
                        <Select />
                    }
                    margin={[0, 0, 16, 0]}
                    defaultValue=""
                    control={control}
                    name="gender"
                    options={GLOBAL_CONSTANTS.genders}
                    rules={{
                        required: 'Please select some option',
                    }}
                    required={true}
                    label={{title: "Sex", color: '#fff'}}
                    errors={errors.gender && errors.gender.message}
                    placeholder="Sex"
                    size={'md'}
                    fullWidth={true}
                />
                <div className='birth-date-wrapper'>
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 7, 16, 0]}
                        defaultValue=""
                        control={control}
                        name="day"
                        options={days}
                        rules={{
                            required: 'Please select some option',
                        }}
                        required={true}
                        label={{title: "Day", color: '#fff'}}
                        errors={errors.day && errors.day.message}
                        placeholder="Day"
                        size={'md'}
                        fullWidth={true}
                    />
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 7, 16, 7]}
                        defaultValue=""
                        control={control}
                        name="month"
                        options={GLOBAL_CONSTANTS.months}
                        rules={{
                            required: 'Please select some option',
                        }}
                        required={true}
                        label={{title: "Month", color: '#fff'}}
                        errors={errors.month && errors.month.message}
                        placeholder="Month"
                        size={'md'}
                        fullWidth={true}
                    />
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 0, 16, 7]}
                        defaultValue=""
                        control={control}
                        name="year"
                        options={years}
                        rules={{
                            required: 'Please select some option',
                        }}
                        required={true}
                        label={{title: "Years", color: '#fff'}}
                        errors={errors.year && errors.year.message}
                        placeholder="Years"
                        size={'md'}
                        fullWidth={true}
                    />
                </div>
                <div className="bottom-actions">
                    <Button
                        type="button"
                        size={'md'}
                        text="Cancel"
                        typeButton="white-bg"
                        width={120}
                        margin={[0, 0, 0, 0]}
                    />
                    <Button
                        type="button"
                        size={'md'}
                        text="Place Ad"
                        typeButton="primary"
                        width={120}
                        margin={[0, 0, 0, 20]}
                    />
                </div>
            </form>
        </div>
    )
}
export default React.memo(MakeProfile);