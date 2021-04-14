import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import VALIDATORS from 'utils/validators';
import {Button, Input} from 'Components/Shared/UI';
import UseStyles from './styles';

const BillingInfo = (props) => {
    const styles = UseStyles({}, {link: true});
    const [loadingIcon, setLoadingIcon] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        mode: 'onKeypress',
    });

    const onSaveBillingInfo = async (data) => {
        setLoadingIcon(true);
        console.log(data);
    }

    return (
        <div className={styles['change-password-container']}>
            <form onSubmit={handleSubmit(onSaveBillingInfo)}>
                <h4>Factuurgegevens</h4>
                <p>Hier kunnen factuurgegevens worden ingevuld om sneller te kunnen afrekenen</p>
                <Input
                    label={{title: 'Naam', color: ' #fff'}}
                    type="text"
                    errors={errors.name && errors.name.message}
                    refBind={register()}
                    name="name"
                    fullWidth={true}
                    value="Henk Put"
                    margin={[0, 0, 16]}
                />
                <Input
                    label={{title: 'Bedrijfsnaam', color: ' #fff'}}
                    type="text"
                    errors={errors.company_name && errors.company_name.message}
                    refBind={register()}
                    name="company_name"
                    fullWidth={true}
                    value="Tieten kijken met Henk Put"
                    margin={[0, 0, 16]}
                />
                <Input
                    label={{title: 'BTW number', color: ' #fff'}}
                    type="text"
                    errors={errors.vat_number && errors.vat_number.message}
                    refBind={register()}
                    name="vat_number"
                    fullWidth={true}
                    value="12B 0915438425"
                    margin={[0, 0, 16]}
                />
                <Input
                    label={{title: 'KVK number', color: ' #fff'}}
                    type="text"
                    errors={errors.commerce_number && errors.commerce_number.message}
                    refBind={register()}
                    name="commerce_number"
                    fullWidth={true}
                    margin={[0, 0, 16]}
                />
                <h4 className="form-flex-inputs-title">Adres</h4>
                <div className="flex-inputs">
                    <Input
                        type="text"
                        errors={errors.address && errors.address.message}
                        refBind={register()}
                        name="address"
                        value="Wazellaan"
                        width={'80%'}
                        margin={[0, 8, 16, 0]}
                    />
                    <Input
                        width={'20%'}
                        type="text"
                        errors={errors.commerce_number && errors.commerce_number.message}
                        refBind={register()}
                        name="commerce_number"
                        value="12 B"
                        margin={[0, 0, 16, 8]}
                    />
                </div>
                <div className="flex-inputs">
                    <Input
                        type="number"
                        errors={errors.a  && errors.a.message}
                        refBind={register()}
                        name="a"
                        value="2032"
                        width={'30%'}
                        margin={[0, 8, 16, 0]}
                    />
                    <Input
                        width={'20%'}
                        type="text"
                        errors={errors.b && errors.b.message}
                        refBind={register()}
                        name="b"
                        value="BT"
                        margin={[0, 8, 16, 8]}
                    />
                    <Input
                        width={'50%'}
                        type="text"
                        errors={errors.c && errors.c.message}
                        refBind={register()}
                        name="c"
                        value="Den Haag"
                        margin={[0, 0, 16, 8]}
                    />
                </div>
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
            </form>
        </div>
    )
}
BillingInfo.propTypes = {
}
export default BillingInfo