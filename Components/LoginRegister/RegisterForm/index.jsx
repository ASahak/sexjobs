import React, {useCallback, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import { useForm, Controller } from 'react-hook-form';
import {Input, Button, Select, InlineToast} from 'Components/Shared/UI';
import VALIDATORS from 'utils/validators';
import {ACCOUNT_ROLE_TYPES} from 'utils/constants';

const TypeAccountNotify = {
    'person': {
        title: 'Personal Account',
        description: 'You use your account to place advertisements personally or as a freelancer, or only to respond to advertisements.'
    },
    'suppose': {
        title: 'Couple Account',
        description: 'You use your account to post ads as a couple.'
    },
    'company': {
        title: 'Company Account',
        description: 'You use your account to advertise as a company or to place advertisements for your employees'
    }
}
const RegisterForm = (props) => {
    const styles = UseStyles({}, {link: true});

    const [loadingIcon, setLoadingIcon] = useState(false);
    const { register, handleSubmit, errors, watch, control } = useForm({
        mode: 'onKeypress',
    });

    const onCreateAccount = async (data) => {
        setLoadingIcon(true)
        setTimeout(() => { // todo need to make registration api
            setLoadingIcon(false);
            props.completeNext();
        }, 2000)
    }

    const password = useRef({});
    password.current = watch('password', '');

    const typeAccount = watch('account_type', '');

    const selectedAccount = useCallback(() => {
        if (typeAccount) {
            return TypeAccountNotify[typeAccount];
        } else return {}
    }, [typeAccount]);

    return (
        <form onSubmit={handleSubmit(onCreateAccount)} className={styles['register-form']}>
            <div className="account-mandatory-points">
                <h5>Account aanmaken</h5>
                <div className="mandatory-wrapper">
                    <div>
                        <p>Zelf gratis advertenties plaatsen</p>
                        <p>Gebruik maken van de sexjobs messenger</p>
                    </div>
                    <div>
                        <p>Je advertenties beheren en laten opvallen Eenvoudiger reageren</p>
                        <p>Eenvoudiger reageren</p>
                    </div>
                </div>
            </div>
            <div className="form-fields">
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
                    helperText="Atleast 8 characters, one per case and one number."
                    type="password"
                    fullWidth={true}
                    passwordEye={true}
                    label={{title: "Je Wachtwoord", color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                    required={true}
                />
                <Input
                    refBind={register({
                        validate: value => value === password.current || "Je wachtwoorden komen met elkaar overeen"
                    })}
                    errors={errors.password_repeat && errors.password_repeat.message}
                    name="password_repeat"
                    required={true}
                    type="password"
                    fullWidth={true}
                    label={{title: "Je Wachtwoord", color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                />
                <Controller
                    as={
                        <Select />
                    }
                    margin={[0, 0, 30, 0]}
                    defaultValue=""
                    control={control}
                    name="account_type"
                    options={ACCOUNT_ROLE_TYPES}
                    rules={{
                        required: 'Please complete this mandatory field',
                    }}
                    required={true}
                    label={{title: "Type account", color: '#fff'}}
                    errors={errors.account_type && errors.account_type.message}
                    placeholder="Select your account type"
                    size={'md'}
                    fullWidth={true}
                />
                {typeAccount ? <InlineToast
                    title={selectedAccount().title}
                    description={selectedAccount().description}
                    type={'info'}
                /> : ''}
                <Input
                    refBind={register({
                        validate: value => !!value
                    })}
                    errors={!!(errors.agree_1 && errors.agree_1.type === 'validate')}
                    className="register-checkbox"
                    name="agree_1"
                    type="checkbox"
                    label={{
                        title: "Ik verklaar minimaal 21 jaar te zijn de algemene voorwaarden van Tease Media B.V. gelezen te hebben en ga hier expliciet mee akkoord.",
                        forId: 'agree1',
                        color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                />
                <Input
                    className="register-checkbox"
                    refBind={register({
                        validate: value => !!value
                    })}
                    errors={!!(errors.agree_2 && errors.agree_2.type === 'validate')}
                    name="agree_2"
                    type="checkbox"
                    label={{
                        title: "Ik geef hierbij aan Tease Media B.V. of enig aan Tease Media B.V. gelieerde onderneming, expliciet toestemming voor het gebruik van mijn persoonsgegevens ter uitvoering van de overeenkomst tussen mij en Tease Media B.V., ter uitvoering van een wettelijke verplichting van Tease Media B.V. of voor een ander doel zoals specifiek is omschreven in het privacystatement van Tease Media BV. Ik verklaar hiermee dat ik het privacystatement gelezen heb.",
                        forId: 'agree2',
                        color: '#fff'}}
                    margin={[0, 0, 16, 0]}
                />
                <Button
                    disabled={loadingIcon}
                    icon={{direction: 'left', loading: loadingIcon}}
                    type="submit"
                    size={'md'}
                    text="Account aanmaken"
                    typeButton="primary"
                    direction="center"
                    width={220}
                    margin={[30, 0, 0, 0]}
                />
            </div>
        </form>
    )
}
RegisterForm.propTypes = {
    completeNext: PropTypes.func,
}

export default React.memo(RegisterForm);