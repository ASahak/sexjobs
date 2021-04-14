import React from 'react';
import PropTypes from 'prop-types';
import NoProfile from './NoProfile';
import {Button} from 'Components/Shared/UI';
import MaleFemaleProfile from 'Components/Ads/CreateContent/MaleFemaleProfile';
import EditAccount from 'Components/Profile/EditAccount';

const Couple = (props) => {
    const {type, data} = props.profile;

    return (
        <>
            {props.isProfile ? props.isEdit.id ? <EditAccount data={props.isEdit}/> : <>
                <div className="suppose-ad-section">
                    <MaleFemaleProfile data={data.profile1} noMadeAdvertisers={true} />
                    <MaleFemaleProfile data={data.profile2}/>
                    <Button
                        margin={[15, 0, 0]}
                        text="Ga door naar categorie selecteren"
                        typeButton="primary"
                    />
                </div>
            </> : <NoProfile />}
        </>
    )
}
Couple.defaultProps = {
    isEdit: {},
}
Couple.propTypes = {
    isEdit: PropTypes.object,
    profile: PropTypes.object.isRequired,
    isProfile: PropTypes.bool,
}
export default React.memo(Couple);