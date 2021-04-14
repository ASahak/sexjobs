import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import VALIDATORS from 'utils/validators';
import {Button, Input, SimpleDialog} from 'Components/Shared/UI';
import UseStyles from './styles';

const ChangePassword = (props) => {
    const styles = UseStyles({}, {link: true});
    const [loadingIcon, setLoadingIcon] = useState(false);
    const [passwordChanged, setPasswordChanged] = useState(false);
    const { register, handleSubmit, errors, watch } = useForm({
        mode: 'onKeypress',
    });

    const onChangePassword = async (data) => {
        setLoadingIcon(true);
        console.log(data);
    }
    const new_password = useRef({});
    new_password.current = watch('new_password', '');

    return (
        <div className={styles['change-password-container']}>
            <form onSubmit={handleSubmit(onChangePassword)}>
                <Input
                    refBind={register(VALIDATORS.PASSWORD_VALIDATOR)}
                    errors={
                        errors.old_password && errors.old_password.message ||
                        errors.old_password && errors.old_password.type === 'containsDigit' && 'Use 1 ore more numbers' ||
                        errors.old_password && errors.old_password.type === 'containsUppercaseLowercase' && 'Use upper and lower case characters'
                    }
                    name="old_password"
                    helperText="Atleast 8 characters, one per case and one number."
                    type="password"
                    fullWidth={true}
                    passwordEye={true}
                    label={{title: "Old Password", color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                    required={true}
                />
                <Input
                    refBind={register(VALIDATORS.PASSWORD_VALIDATOR)}
                    errors={
                        errors.new_password && errors.new_password.message ||
                        errors.new_password && errors.new_password.type === 'containsDigit' && 'Use 1 ore more numbers' ||
                        errors.new_password && errors.new_password.type === 'containsUppercaseLowercase' && 'Use upper and lower case characters'
                    }
                    name="new_password"
                    helperText="Atleast 8 characters, one per case and one number."
                    type="password"
                    fullWidth={true}
                    passwordEye={true}
                    label={{title: "New Password", color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                    required={true}
                    placeholder="What is your new password"
                />
                <Input
                    refBind={register({
                        validate: value => value === new_password.current || "Je wachtwoorden komen met elkaar overeen"
                    })}
                    errors={errors.password_repeat && errors.password_repeat.message}
                    name="password_repeat"
                    required={true}
                    placeholder="Repeat new password"
                    type="password"
                    fullWidth={true}
                    label={{title: "Repeat Password", color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                />
                <Button
                    disabled={loadingIcon}
                    icon={{direction: 'left', loading: loadingIcon, className: 'icon-Save'}}
                    type="submit"
                    size={'md'}
                    text="Save my new password"
                    typeButton="primary"
                    width={250}
                    mobileFullWidth={true}
                    margin={[30, 0, 0, 0]}
                />
                <a className={styles['forgot-password_btn']} onClick={() => props.goToForgotPassword('forgot_password')}>Wachtwoord vergeten?</a>
            </form>
            <SimpleDialog
                onClose={() => setPasswordChanged(false)}
                actions={{
                    ok: 'PROCEED',
                }}
                open={passwordChanged}
                title="Your password was successfully changed">
                <p>From now on you can log in with your new password</p>
            </SimpleDialog>
        </div>
    )
}
ChangePassword.propTypes = {
    goToForgotPassword: PropTypes.func.isRequired,
}
export default ChangePassword;