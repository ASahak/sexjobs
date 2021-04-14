import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import VALIDATORS from 'utils/validators';
import {Button, Input} from 'Components/Shared/UI';
import UseStyles from './styles';

const NewEmail = (props) => {
    const styles = UseStyles({}, {link: true});
    const [loadingIcon, setLoadingIcon] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        mode: 'onKeypress',
    });

    const onChangeEmail = async (data) => {
        setLoadingIcon(true);
        console.log(data);
    }

    return (
        <div className={styles['new-email-container']}>
            <form onSubmit={handleSubmit(onChangeEmail)}>
                <Input
                    refBind={register(VALIDATORS.EMAIL_VALIDATOR)}
                    type="email"
                    name="email"
                    errors={errors.email && errors.email.message}
                    label={{title: "Neuw e-mailadres:", color: '#fff'}}
                    fullWidth={true}
                    margin={[0, 0, 16, 0]}
                    required={true}
                />
                <Input
                    refBind={register(VALIDATORS.PASSWORD_VALIDATOR)}
                    errors={
                        errors.password && errors.password.message ||
                        errors.password && errors.password.type === 'containsDigit' && 'Use 1 ore more numbers' ||
                        errors.password && errors.password.type === 'containsUppercaseLowercase' && 'Use upper and lower case characters'
                    }
                    name="password"
                    helperText="Atleast 8 characters, one per case and one number."
                    type="password"
                    fullWidth={true}
                    passwordEye={true}
                    label={{title: "Wachtwoord", color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                    required={true}
                />
                <Button
                    disabled={loadingIcon}
                    icon={{direction: 'left', loading: loadingIcon}}
                    type="submit"
                    size={'md'}
                    text="Account aanmaken"
                    typeButton="primary"
                    width={250}
                    mobileFullWidth={true}
                    margin={[30, 0, 0, 0]}
                />
                <a className={styles['forgot-password_btn']} onClick={() => props.goToForgotPassword('forgot_password')}>Wachtwoord vergeten?</a>
            </form>
        </div>
    )
}
NewEmail.propTypes = {
    goToForgotPassword: PropTypes.func.isRequired,
}
export default NewEmail;