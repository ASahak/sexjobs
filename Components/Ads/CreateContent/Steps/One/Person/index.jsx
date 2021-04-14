import React from 'react';
import PropTypes from 'prop-types';
import NoProfile from './NoProfile';
import {Button} from 'Components/Shared/UI';
import EditAccount from 'Components/Profile/EditAccount';
import MaleFemaleProfile from 'Components/Ads/CreateContent/MaleFemaleProfile';

const Person = (props) => {
    const {type, data} = props.profile;

    return (
        <>
            {props.isProfile ? props.isEdit.id ? <EditAccount data={props.profile.data}/> : <div className="personal-ad-section">
                <MaleFemaleProfile data={data}/>
                <Button
                    onClick={() => props.goToNext('two')}
                    margin={[15, 0, 0]}
                    text="Ga door naar categorie selecteren"
                    typeButton="primary"
                />
            </div> : <NoProfile />}
        </>
    )
}

Person.defaultProps = {
    isEdit: {},
}
Person.propTypes = {
    profile: PropTypes.object.isRequired,
    isProfile: PropTypes.bool,
    goToNext: PropTypes.func,
    isEdit: PropTypes.object,
}
export default React.memo(Person);