import React, {useCallback, useState, useRef, useEffect} from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Image, Input, Button, Select, RangeSlider, DateOfBirth} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS, FILTERS} from 'utils/constants';
import { useForm, Controller } from 'react-hook-form';
import CropImage from 'Components/Smart/ImageCropDialog';
import useBus from 'hooks/use-bus';
const FileUploader = dynamic(() => import('Components/Plugins/FileUploader').then(_ => _.default), {ssr: true});
import {useSelector} from 'react-redux';
import {baseSelector} from 'store/reselect';

const minWeight = 30;
const maxWeight = 150;
const EditAccount = (props) => {
    const baseState = useSelector(baseSelector());
    const headerRect = baseState.headerRect || {};

    const styles = UseStyles({}, {link: true});

    const [startCropping, setStartCropping] = useState(false);
    const [height, setHeight] = useState([props.data.height || FILTERS.appearance.height[0]]);
    const [penis, setPenis] = useState([props.data.penis || FILTERS.appearance.penis[0]]);
    const [weight, setWeight] = useState([props.data.weight || minWeight]);
    const [avatarSrc, setAvatarSrc] = useState(props.data.avatarSrc);
    const [croppedImg, setCroppedImg] = useState(null);
    const [loadingIcon, setLoadingIcon] = useState(false);
    const editAccountRef = useRef();
    const { register, handleSubmit, errors, watch, control, getValues } = useForm({
        mode: 'onKeypress',
    });

    const valueOfYear = watch('profile_year', '');
    const valueOfMonth = watch('profile_month', '');

    useBus(
        'SUBMIT_FORM_EDIT_VIEW_PROFILE',
        () => {
            handleSubmit(saveProfile)()
        },
        []
    );

    const saveProfile = async (data) => {
        console.log(data);
        // todo must make Saving functionality
    }

    const saveCropping = (img) => {
        setCroppedImg(img);
        setStartCropping(false);
    }

    const removeOrResetImage = (val) => {
        setAvatarSrc('');
        setCroppedImg('');
    }
    const getGender = (val) => {
        const current = GLOBAL_CONSTANTS.genders.find(e => e.value === val);
        if (current) return current.title
        else return ''
    }
    const checkIfChecked = useCallback((data, value) => {
        return data.findIndex(e => e === value) > -1
    }, [props.data.languages]);

    const birthDate = useCallback((prop) => { // todo need to make sure if date format is a string
        const date = props.data.birthDate?.split('-');
        if (date && date.length) {
            return date[prop === 'dd' ? 0 : prop === 'mm' ? 1 : 2]
        }
    }, [props.data.birthDate])

    const spokenLanguages = useCallback(() => {
        return GLOBAL_CONSTANTS.speakLanguages.map(lang => {
            const isChecked = checkIfChecked(props.data.languages || [], lang.value);
            return (<li key={lang.value + isChecked}>
                    <Input
                        attr={{...(isChecked && {checked: true})}}
                        theme="dark"
                        type="checkbox"
                        margin={[0, 0, 10, 0]}
                        label={{title: lang.title, color: '#fff', forId: 'for-id-lang_' + lang.value}}
                    />
                </li>
            )})
    }, [props.data.languages])

    useEffect(() => {
        if(editAccountRef.current) {
            const offsetTop = editAccountRef.current.getBoundingClientRect().top;
            if (offsetTop < headerRect.height) {
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetTop + scrollY - headerRect.height,
                        left: 0,
                        behavior: 'smooth'
                    })
                }, 100)
            }
        }
    }, [editAccountRef]);

    return (
        <div className={styles['edit-account-view_container']} ref={editAccountRef}>
            <form onSubmit={handleSubmit(saveProfile)} >
                <h4>Profielfoto</h4>
                <div className="edit-account-vw_avatar">
                    {(avatarSrc || croppedImg) ? <>
                        <Image
                            src={croppedImg || avatarSrc}
                            defaultSrc="/images/default-profile.png"
                        />
                        <p className="icon-edit-account">
                            <span className="icon-Edit" onClick={() => setStartCropping(true)}></span>
                            <span className="icon-Delete" onClick={() => removeOrResetImage()}></span>
                        </p>
                    </> :
                    <FileUploader
                        width={300}
                        height={300}
                        bgImageSrc="/images/default-profile.png"
                        accept=".jpg,.png,.jpeg"
                        multiple={false}
                        updateFilesCb={(files) => setAvatarSrc(URL.createObjectURL(files[Object.keys(files)[0]]))}
                    />}
                    <CropImage
                        src={avatarSrc}
                        saveCropping={(img) => saveCropping(img)}
                        cancelCropping={() => setStartCropping(false)}
                        open={startCropping}
                    />
                </div>
                <div className="edit-account-form_fields">
                    <h4>Gegevens</h4>
                    <Input
                        label={{title: 'Profie name*', color: '#F4F7FA'}}
                        value={props.data.name}
                        fullWidth={true}
                        placeholder="Niet ingevuld"
                        helperText="*Mandatory"
                        maxCounter={30}
                        margin={[0, 0, 16, 0]}
                    />
                    <Input
                        label={{title: 'Gender', color: '#F4F7FA'}}
                        value={getGender(props.data.gender)}
                        fullWidth={true}
                        readonly={true}
                        placeholder="Niet ingevuld"
                        helperText="This field can only be changed by customer support"
                        margin={[0, 0, 16, 0]}
                    />
                    <div className="like-label-input-filed">
                        <div className="flexible-wrap" style={{paddingBottom: '16px'}}>
                            <DateOfBirth
                                errors={errors}
                                control={control}
                                watchYear={valueOfYear}
                                watchMonth={valueOfMonth}
                                selects={{
                                    day: {
                                        width: 'calc(25% - 8px)',
                                        margin: [0, 8, 0, 0],
                                        defaultValue: birthDate('dd'),
                                        name: 'profile_day',
                                        rules: {},
                                        readonlyNoIcon: true,
                                        readonly: true,
                                        placeholder: 'dd',
                                        size: 'md',
                                    },
                                    month: {
                                        width: 'calc(25% - 8px)',
                                        margin: [0, 0, 0, 8],
                                        defaultValue: birthDate('mm'),
                                        name: 'profile_month',
                                        rules: {},
                                        placeholder: 'mm',
                                        readonly: true,
                                        readonlyNoIcon: true,
                                        size: 'md',
                                    },
                                    year: {
                                        readonly: true,
                                        width: '50%',
                                        margin: [0, 0, 0, 16],
                                        defaultValue: birthDate('yyyy'),
                                        name: 'profile_year',
                                        rules: {},
                                        placeholder: 'yyyy',
                                        size: 'md',
                                    },
                                }}
                            />
                            <p className="helper-text_bt">
                                This field can only be changed by customer support
                            </p>
                        </div>
                    </div>
                    <h4 className="title-width_paragraph">Uiterlijk</h4>
                    <p>Het invullen van de volgende informatie is niet verplicht, maar zorgt er wel voor dat je beter gevonden wordt.</p>
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 0, 16, 0]}
                        defaultValue={props.data.build || 'normal'}
                        control={control}
                        name="build"
                        options={GLOBAL_CONSTANTS.build}
                        rules={{}}
                        label={{title: "Build", color: '#fff'}}
                        errors={errors.build && errors.build.message}
                        placeholder="What is je build?"
                        size={'md'}
                        fullWidth={true}
                    />
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 0, 16, 0]}
                        defaultValue={props.data.hair_color}
                        control={control}
                        name="hair_color"
                        options={GLOBAL_CONSTANTS.hairColors}
                        rules={{}}
                        label={{title: "Hair color", color: '#fff'}}
                        errors={errors.hair_color && errors.hair_color.message}
                        placeholder="Wat is je haarkleur?"
                        size={'md'}
                        fullWidth={true}
                    />
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 0, 16, 0]}
                        defaultValue={props.data.nationality}
                        control={control}
                        name="nationality"
                        options={GLOBAL_CONSTANTS.nationality}
                        rules={{}}
                        label={{title: "Descent", color: '#fff'}}
                        errors={errors.nationality && errors.nationality.message}
                        placeholder="Wat is je descent?"
                        size={'md'}
                        fullWidth={true}
                    />
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 0, 16, 0]}
                        defaultValue={props.data.cup_size}
                        control={control}
                        name="cup"
                        options={GLOBAL_CONSTANTS.cupSize}
                        rules={{}}
                        label={{title: "Cup size", color: '#fff'}}
                        errors={errors.cup && errors.cup.message}
                        placeholder="Wat is je cup size?"
                        size={'md'}
                        fullWidth={true}
                    />
                    <div className="languages-options">
                        <h4>Spoken languages</h4>
                        <ul>
                            {spokenLanguages()}
                        </ul>
                    </div>
                    <div className="range-sliders-edit">
                        <RangeSlider
                            margin={[32, 0, 0]}
                            step={0.1}
                            min={FILTERS.appearance.height[0]}
                            max={FILTERS.appearance.height[1]}
                            resetValue={props.data.height || FILTERS.appearance.height[0]}
                            sizeOption={'m'}
                            value={height}
                            label={{title: "Height", color: '#fff'}}
                            change={(newVal) => setHeight([newVal])}
                        />
                        <RangeSlider
                            margin={[32, 0, 0]}
                            step={1}
                            min={FILTERS.appearance.penis[0]}
                            max={FILTERS.appearance.penis[1]}
                            resetValue={props.data.height || FILTERS.appearance.penis[0]}
                            sizeOption={'cm'}
                            value={penis}
                            label={{title: "Penis length", color: '#fff'}}
                            change={(newVal) => setPenis([newVal])}
                        />
                        <RangeSlider
                            margin={[32, 0, 0]}
                            step={1}
                            min={minWeight}
                            max={maxWeight}
                            resetValue={props.data.weight || minWeight}
                            sizeOption={'kg'}
                            value={weight || minWeight}
                            label={{title: "Weigth", color: '#fff'}}
                            change={(newVal) => setWeight([newVal])}
                        />
                    </div>
                    <Button
                        icon={{direction: 'left', className: 'icon-floppy-disk'}}
                        size={'md'}
                        type="submit"
                        text="Save Changes"
                        typeButton="primary"
                        width={180}
                        margin={[30, 0, 0, 0]}
                    />
                </div>
            </form>
        </div>
    )
}
EditAccount.defaultProps = {
    data: {}
}
EditAccount.propTypes = {
    data: PropTypes.object.isRequired,
}
export default React.memo(EditAccount);