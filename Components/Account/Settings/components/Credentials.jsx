import React from 'react';
import PropTypes from 'prop-types'
import {Input} from 'Components/Shared/UI';

const Credentials = (props) => {
    return (
        <div>
            <h4 className="title-content">Inloggegevens</h4>
            <Input
                customStylesDiv={{borderTop: '1px solid rgb(180, 180, 180)', borderBottom: '1px solid rgb(180, 180, 180)'}}
                label={{title: 'E-mailadres:', color: '#fff'}}
                icon={{className: 'icon-Edit', onClick: () => props.goToEdit('new_email')}}
                type="text"
                fullWidth={true}
                value="Gebleekte@nus.nl"
                transparentInput={true}
                readonly={true}
            />
            <Input
                customStylesDiv={{borderBottom: '1px solid rgb(180, 180, 180)'}}
                label={{title: 'Wachtwoord:', color: '#fff'}}
                margin={[0, 0, 16, 0]}
                icon={{className: 'icon-Edit', onClick: () => props.goToEdit('change_password')}}
                type="password"
                fullWidth={true}
                value="Gebleekte@nus.nl"
                helperText="Laatst gewijzigd 2 jan 2018"
                transparentInput={true}
                readonly={true}
            />
        </div>
    )
}
Credentials.propTypes = {
    goToEdit: PropTypes.func.isRequired,
}
export default Credentials;