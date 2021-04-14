import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Button} from 'Components/Shared/UI';

const Balance = (props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['balance-container']}>
            <h4>Balance</h4>
            <div className={styles['balance-wrapper']}>
                <div>
                    <span className="icon-Credits"></span>
                    <h3>200 Credits</h3>
                </div>
                <Button
                    onClick={() => props.gotToDebits()}
                    direction="center"
                    text="Debits and Credits"
                    typeButton="primary"
                    width={250}
                    margin={[20]}
                />
            </div>
        </div>
    )
}
Balance.propTypes = {
    gotToDebits: PropTypes.func.isRequired,
};
export default Balance;