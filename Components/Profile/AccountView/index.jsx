import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Avatar, Input} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';

const AccountView = (props) => {
    const styles = UseStyles({}, {link: true});

    const genderTitle = useMemo(() => {
        return GLOBAL_CONSTANTS.genders.find(e => e.value === props.data.gender)?.title
    }, [props.data.gender])

    const getLanguages = (languages) => {
         return languages ? GLOBAL_CONSTANTS.speakLanguages
             .map(e => (languages.indexOf(e.value) > -1) ? e.title : null)
             .filter(Boolean) : []
    }

    return (
        <div className={styles['account-view_container']}>
            <div className="account-vw_avatar">
                <Avatar
                    defaultSrc="/images/default-profile.png"
                    radius={0}
                    avatarSrc={props.data.avatarSrc} height={'100%'} width={200} name={''}/>
            </div>
            <div className="account-form_fields">
                <Input
                    label={{title: 'Name:', color: '#F4F7FA'}}
                    value={props.data.name}
                    readonly={true}
                    readonlyNoIcon={true}
                    transparentInput={true}
                    fullWidth={true}
                    placeholder="Not filled in "
                />
                <Input
                    label={{title: 'Gender:', color: '#F4F7FA'}}
                    value={genderTitle}
                    readonly={true}
                    transparentInput={true}
                    placeholder="Not filled in"
                    fullWidth={true}
                    helperText={props.data.birthDate ? 'Geboortedatum: ' + props.data.birthDate : ''}
                />
                <Input
                    label={{title: 'Age:', color: '#F4F7FA'}}
                    value={props.data.age}
                    readonly={true}
                    transparentInput={true}
                    placeholder="Not filled in "
                    fullWidth={true}
                    helperText={props.data.birthDate ? 'Geboortedatum: ' + props.data.birthDate : ''}
                />
                <Input
                    label={{title: 'Build:', color: '#F4F7FA'}}
                    value={props.data.build}
                    readonlyNoIcon={true}
                    readonly={true}
                    transparentInput={true}
                    placeholder="Not filled in "
                    fullWidth={true}
                />
                <Input
                    label={{title: 'Descent:', color: '#F4F7FA'}}
                    value={props.data.nationality}
                    readonly={true}
                    readonlyNoIcon={true}
                    transparentInput={true}
                    placeholder="Not filled in "
                    fullWidth={true}
                />
                <Input
                    label={{title: 'Height:', color: '#F4F7FA'}}
                    value={props.data.height}
                    readonly={true}
                    readonlyNoIcon={true}
                    transparentInput={true}
                    placeholder="Not filled in "
                    fullWidth={true}
                />
                <Input
                    readonlyNoIcon={true}
                    label={{title: 'Hair color:', color: '#F4F7FA'}}
                    value={props.data.hair_color}
                    readonly={true}
                    placeholder="Not filled in "
                    transparentInput={true}
                    fullWidth={true}
                />
                <Input
                    readonlyNoIcon={true}
                    label={{title: 'Penis length:', color: '#F4F7FA'}}
                    value={props.data.penis}
                    readonly={true}
                    placeholder="Not filled in "
                    transparentInput={true}
                    fullWidth={true}
                />
                 <Input
                    label={{title: 'Weight:', color: '#F4F7FA'}}
                    value={props.data.weight}
                    readonly={true}
                    placeholder="Not filled in "
                    transparentInput={true}
                    readonlyNoIcon={true}
                    fullWidth={true}
                />
                <Input
                    readonlyNoIcon={true}
                    label={{title: 'Cup size:', color: '#F4F7FA'}}
                    value={props.data.cup}
                    readonly={true}
                    placeholder="Not filled in "
                    transparentInput={true}
                    fullWidth={true}
                />
                <Input
                    readonlyNoIcon={true}
                    label={{title: 'Language(s):', color: '#F4F7FA'}}
                    value={getLanguages(props.data.languages).join(', ')}
                    readonly={true}
                    placeholder="Not filled in "
                    transparentInput={true}
                    fullWidth={true}
                />
                {props.children}
            </div>
        </div>
    )
}
AccountView.defaultProps = {
    goToEdit: () => void(0),
}
AccountView.propTypes = {
    data: PropTypes.object.isRequired,
    goToEdit: PropTypes.func,
}
export default React.memo(AccountView);