import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import { useForm } from 'react-hook-form';
import {Input, Button, InlineToast} from 'Components/Shared/UI';
import VALIDATORS from 'utils/validators';
import {useRouter} from 'next/router';

const LoginForm = (props) => {
    const styles = UseStyles({}, {link: true});

    const [loadingIcon, setLoadingIcon] = useState(false);
    const [optionalNotification, setOptionalNotification] = useState(false);
    const { register, handleSubmit, errors, watch } = useForm({
        mode: 'onKeypress',
    });
    const router = useRouter();

    const onLogin = async (data) => {
        setLoadingIcon(true)
        setTimeout(() => { // todo need to make registration api
            setLoadingIcon(false);
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit(onLogin)} className={styles['login-form']}>
            <h5>Inloggen</h5>
            <div className="form-fields">
                {optionalNotification ? <InlineToast
                    title={'Optional notification'}
                    type={'info'}
                /> : ''}
                <Input
                    refBind={register(VALIDATORS.EMAIL_VALIDATOR)}
                    type="email"
                    name="email"
                    errors={errors.email && errors.email.message}
                    label={{title: "E-mailadres", color: '#fff'}}
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
                    // helperText="Atleast 8 characters, one per case and one number."
                    type="password"
                    fullWidth={true}
                    passwordEye={true}
                    label={{title: "Je Wachtwoord", color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                    // required={true}
                />
                <a className="forgot-your-pass" onClick={() => router.push({
                    pathname: '/reset-password'
                })}>Wachtwoord vergeten?</a>
                <Input
                    type="checkbox"
                    name="remember_me"
                    label={{title: "Ingelogd bilijven", color: '#fff', forId: 'remember-me'}}
                    margin={[16, 0, 16, 0]}
                />
                <Button
                    disabled={loadingIcon}
                    icon={{direction: 'left', loading: loadingIcon}}
                    type="submit"
                    size={'md'}
                    text="Inloggen"
                    typeButton="primary"
                    direction="center"
                    width={220}
                    margin={[30, 0, 0, 0]}
                />
            </div>
        </form>
    )
}
LoginForm.propTypes = {
}

export default React.memo(LoginForm);