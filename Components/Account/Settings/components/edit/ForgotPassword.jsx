import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import VALIDATORS from 'utils/validators';
import {Button, Input} from 'Components/Shared/UI';
import UseStyles from './styles';
import {dispatch} from 'hooks/use-bus';

const ForgotPassword = (_props) => {
    const styles = UseStyles({}, {link: true});
    const [loadingIcon, setLoadingIcon] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        mode: 'onKeypress',
    });

    const onSendEmail = async (data) => {
        setLoadingIcon(true);
        dispatch({type: 'EMIT_REQUESTS_MESSAGES', payload: {
            message: 'We have sent reset password\'s link to your email',
            typeToast: 'dark',
        }});
        console.log(data);
    }

    return (
        <div className={styles['forgot-password-container']}>
            <form onSubmit={handleSubmit(onSendEmail)}>
                <p>Enter your e-mail address here, if it is known to us you will receive an e-mail within a few moments with your new password with which you can log in again.</p>
                <Input
                    type="email"
                    name="email"
                    errors={errors.email && errors.email.message}
                    refBind={register(VALIDATORS.EMAIL_VALIDATOR)}
                    label={{title: "Neuw e-mailadres:", color: '#fff'}}
                    fullWidth={true}
                    margin={[0, 0, 16, 0]}
                    required={true}
                />
                <Button
                    disabled={loadingIcon}
                    icon={{direction: 'left', loading: loadingIcon}}
                    type="submit"
                    size={'md'}
                    text="Send me a new password"
                    typeButton="primary"
                    width={250}
                    mobileFullWidth={true}
                    margin={[30, 0, 0, 0]}
                />
            </form>
        </div>
    )
}
export default ForgotPassword;