import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'Components/Shared/UI';
import VALIDATORS from 'utils/validators';
import {useForm} from 'react-hook-form';
import Link from 'next/link';

const ResetPassForm = (props) => {
    const [loadingIcon, setLoadingIcon] = useState(false);
    const [resetOk, setResetOk] = useState(false);

    const { register, handleSubmit, errors, reset } = useForm({
        mode: 'onKeypress',
    });

    const sendEmail = async (data) => {
        setLoadingIcon(true)
        setTimeout(() => { // todo need to make registration api
            setLoadingIcon(false);
            setResetOk(true);
            reset();
        }, 2000)
    }


    return (
        <form onSubmit={handleSubmit(sendEmail)} className="forgot-pass_form">
            <h3>My Sexjobs</h3>
            <h5>{props.isValidChangePassword ? 'Change Password' : resetOk ? 'Password Sent' : 'Request Password'}</h5>
            {!props.isValidChangePassword ? <p>{resetOk ?
                'We have received your request. If this address is known to us, you will receive an email from us with your new password within a few moments.' :
                'Enter your e-mail address here, if it is known to us you will receive an e-mail within a few moments with your new password with which you can log in again.'}
            </p>: ''}
            {resetOk && !props.isValidChangePassword ? <p className="not-received">
                Received nothing?
                <Link href={'/'}>
                    <a>Mail Support</a>
                </Link>
            </p> : ''}
            {props.isValidChangePassword ?
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
                    label={{title: "Je Wachtwoord", color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                    required={true}
                /> : <Input
                refBind={register(VALIDATORS.EMAIL_VALIDATOR)}
                type="email"
                name="email"
                errors={errors.email && errors.email.message}
                label={{title: "E-mailadres", color: '#fff'}}
                fullWidth={true}
                margin={[0, 0, 16, 0]}
                required={true}
            />}
            <Button
                disabled={loadingIcon}
                icon={{direction: 'left', loading: loadingIcon}}
                type="submit"
                size={'md'}
                text={props.isValidChangePassword ? 'Save' : 'Send'}
                typeButton="primary"
                direction="center"
                width={220}
                margin={[30, 0, 0, 0]}
            />
        </form>
    )
}
ResetPassForm.defaultProps = {
    isValidChangePassword: false,
}
ResetPassForm.propTypes = {
    isValidChangePassword: PropTypes.bool,
}
export default React.memo(ResetPassForm)
