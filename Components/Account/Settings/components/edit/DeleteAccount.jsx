import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'Components/Shared/UI';
import UseStyles from './styles';

const DeleteAccount = (props) => {
    const styles = UseStyles({}, {link: true});
    const [loadingIcon, setLoadingIcon] = useState(false);

    return (
        <div className={styles['delete-account-container']}>
            <p>Weet je zeker dat je je account wil verwijderen?
                Al je gegevens en advertenties zullen worden
                verwijderd van onze server. Je kunt dit niet
                ongedaan maken.</p>
            <div className="actions-delete">
                <Button
                    onClick={() => props.goToView('deleted_account')}
                    disabled={loadingIcon}
                    icon={{direction: 'left', loading: loadingIcon, className: 'icon-Delete'}}
                    size={'md'}
                    text="Delete Account"
                    typeButton="alert"
                    width={250}
                    mobileFullWidth={true}
                    margin={[30, 16, 0, 0]}
                />
                <Button
                    onClick={() => props.goToView(null)}
                    size={'md'}
                    text="Cancel"
                    typeButton="primary"
                    width={250}
                    mobileFullWidth={true}
                    margin={[30, 0, 0, 0]}
                />
            </div>
        </div>
    )
}
DeleteAccount.propTypes = {
    goToView: PropTypes.func.isRequired,
}
export default DeleteAccount