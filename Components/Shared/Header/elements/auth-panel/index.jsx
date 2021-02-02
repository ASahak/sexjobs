import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import Logged from './logged';
import NotLogged from './not-logged';

const AuthPanel = (props) => {
    const [isLogged, setIsLogged] = useState(false); // Need to use as prop instead of state
    const styles = UseStyles();

    return (
        <div className={styles['auth-wrapper']}>
            {isLogged ? <Logged /> : <NotLogged page={props.routePage} />}
        </div>
    )
}
AuthPanel.propTypes = {
    routePage: PropTypes.string
};
export default AuthPanel;