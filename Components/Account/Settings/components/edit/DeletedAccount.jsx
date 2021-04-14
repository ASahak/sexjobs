import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'Components/Shared/UI';
import UseStyles from './styles';
import {useRouter} from 'next/router';

const DeletedAccount = (props) => {
    const styles = UseStyles({}, {link: true});
    const router = useRouter();

    return (
        <div className={styles['deleted-account-container']}>
            <h4>
                Account verwijderd
            </h4>
            <p>Je account is succesvol verwijderd. Het kan
                enkele minuten duren tot je advertenties niet
                meer zichtbaar zijn. Bedankt dat je gebruik hebt
                gemaakt van Sexjobs.nl!</p>
            <Button
                size={'md'}
                text="Naar de website"
                typeButton="primary"
                onClick={() => router.push({
                    pathname: '/',
                })}
                width={250}
                mobileFullWidth={true}
                margin={[30, 0, 0, 0]}
            />
        </div>
    )
}
DeletedAccount.propTypes = {}
export default DeletedAccount