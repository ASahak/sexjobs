import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Avatar, Button} from 'Components/Shared/UI';

const MyProfilesList = (props) => {
    const styles = UseStyles({}, {link: true});

    const profileItem = useCallback((item) => {
        return <li className="profile-wrapper" key={item.id} onClick={() => props.goToPrivateProfile(item)}>
            <div className="left-side_pw">
                <Avatar
                    width={40}
                    height={40}
                    avatarSrc={item.avatarSrc}
                    name={item.name}
                />
                <p>{item.name}</p>
            </div>
            <span className="icon-Chevron---Right"></span>
        </li>
    }, [])

    const getCompanyProfile = useMemo(() => {
        return props.profilesList.find(e => e.owner)
    }, [props.profilesList])


    return (
        <div className={styles['my-profiles-list']}>
            <h4>Bedrijfsprofiel</h4>
            <ul>
                {profileItem(getCompanyProfile)}
            </ul>
            <h4>Profielen</h4>
            <ul>
                {props.profilesList.map(item => !item.owner && profileItem(item))}
            </ul>
            <Button
                icon={{direction: 'left', className: 'icon-Add'}}
                size={'md'}
                text="Nieuw profiel"
                typeButton="primary"
                width={150}
                margin={[30, 0, 0, 0]}
            />
        </div>
    )
}
MyProfilesList.defaultProps = {
    profilesList: [],
}
MyProfilesList.propTypes = {
    profilesList: PropTypes.array,
    goToPrivateProfile: PropTypes.func,
}
export default React.memo(MyProfilesList);