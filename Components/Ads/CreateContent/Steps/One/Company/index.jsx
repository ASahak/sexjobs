import React, {useCallback, useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import NoProfile from './NoProfile';
import {Button} from 'Components/Shared/UI';
import SelectProfile from './SelectProfile';
import MaleFemaleProfile from 'Components/Ads/CreateContent/MaleFemaleProfile';
import usePrevious from 'hooks/use-previous-state'
import {useSelector} from 'react-redux';
import {baseSelector} from 'store/reselect';
import EditAccount from 'Components/Profile/EditAccount';

const Company = (props) => {
    const baseState = useSelector(baseSelector());
    const {deviceType} = baseState.deviceParams;
    const headerRect = baseState.headerRect || {};

    const {type, data} = props.profile;
    const [selectedProfiles, setSelectedProfiles] = useState({advertiser: ''});

    const profileViewRef = useRef();
    const prevSelectedProfiles = usePrevious(Object.values(selectedProfiles));

    const profilesList = useCallback(() => {
        return Object.values(selectedProfiles).map(key => {
            const currentProfile = data.list.find(e => e.id === key);
            return currentProfile ? <MaleFemaleProfile key={key} data={currentProfile}/> : null
        })
    }, [selectedProfiles, data])

    useEffect(() => {
        const selectedValues = Object.values(selectedProfiles);
        const getChangedItem = selectedValues.findIndex((e, index) => prevSelectedProfiles && (e && e !== prevSelectedProfiles[index]))
        if (getChangedItem > -1 && profileViewRef.current) {
            const child = profileViewRef.current.querySelector(`.profile-container[data-scroll-view=\"scroll-children_${selectedValues[getChangedItem]}\"]`);
            setTimeout(() => {
                window.scrollTo({
                    top: child.getBoundingClientRect().top + scrollY - (deviceType === 'mobile' ? 0 : headerRect.height),
                    left: 0,
                    behavior: 'smooth'
                })
            }, 100)
        }
    }, [selectedProfiles])

    return (
        <>
            {props.isProfile ? props.isEdit.id ? <EditAccount data={props.isEdit}/> : <>
                <div className="company-ad-section" ref={profileViewRef}>
                    <SelectProfile
                        selectedProfiles={selectedProfiles}
                        emitSelectedAdvertisers={(advertisers) => setSelectedProfiles(advertisers)}
                        advertisers={data.list}/>
                    {profilesList()}
                    <Button
                        disabled={!Object.values(selectedProfiles).some(e => e)}
                        margin={[15, 0, 0]}
                        text="Ga door naar categorie selecteren"
                        typeButton="primary"
                    />
                </div>
            </> : <NoProfile />}
        </>
    )
}
Company.defaultProps = {
    isEdit: {},
}
Company.propTypes = {
    profile: PropTypes.object.isRequired,
    isProfile: PropTypes.bool,
    isEdit: PropTypes.object,
}
export default React.memo(Company);