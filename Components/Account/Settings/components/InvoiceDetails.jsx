import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Button, Input} from 'Components/Shared/UI';

const InvoiceDetails = (props) => {
    return (
        <div>
            <h4 className="title-content title-and-edit">
                Factuurgegevens
                <label onClick={() => props.goToEdit('billing_info')}>
                    Wijzigen
                    <span className="icon-Edit"></span>
                </label>
            </h4>
            <p className="paragraph-content">Hier kun je je factuurgegevens invullen om sneller te kunnen afrekenen.</p>
            <Input
                label={{title: 'Naam:', color: ' #fff'}}
                customStylesDiv={{borderTop: '1px solid rgb(180, 180, 180)', borderBottom: '1px solid rgb(180, 180, 180)'}}
                type="text"
                fullWidth={true}
                value="Henk Put"
                transparentInput={true}
                readonlyNoIcon={true}
                readonly={true}
                margin={[20, 0, 0]}
            />
            <Input
                readonlyNoIcon={true}
                label={{title: 'Bedrijfsnaam:', color: ' #fff'}}
                customStylesDiv={{borderBottom: '1px solid rgb(180, 180, 180)'}}
                type="text"
                fullWidth={true}
                value="Tieten kijken met Henk Put"
                transparentInput={true}
                readonly={true}
            />
            <Input
                readonlyNoIcon={true}
                label={{title: 'BTW nummer:', color: ' #fff'}}
                customStylesDiv={{borderBottom: '1px solid rgb(180, 180, 180)'}}
                type="text"
                fullWidth={true}
                value="12B 0915438425"
                transparentInput={true}
                readonly={true}
            />
            <Input
                readonlyNoIcon={true}
                label={{title: 'KVK nummer:', color: ' #fff'}}
                customStylesDiv={{borderBottom: '1px solid rgb(180, 180, 180)'}}
                type="text"
                fullWidth={true}
                value="Niet ingevuld"
                transparentInput={true}
                readonly={true}
            />
            <Input
                readonlyNoIcon={true}
                label={{title: 'Factuuradres:', color: ' #fff'}}
                customStylesDiv={{borderBottom: '1px solid rgb(180, 180, 180)'}}
                type="text"
                fullWidth={true}
                value="Wezellaan 12 A 3023 BT Den Haag"
                transparentInput={true}
                readonly={true}
            />
            <Button
                onClick={() => props.goToEdit('delete_account')}
                className="main-btn-of-content"
                icon={{direction: 'left', className: 'icon-Delete'}}
                margin={[26, 16, 5, 0]}
                text="Delete account"
                typeButton="alert"
                mobileFullWidth={true}
                width={250}
            />
        </div>
    )
}
InvoiceDetails.propTypes = {
    goToEdit: PropTypes.func.isRequired,
}
export default InvoiceDetails;