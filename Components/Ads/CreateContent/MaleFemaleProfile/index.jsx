import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import AccountView from 'Components/Profile/AccountView';
import {Switch, Tag, Input} from 'Components/Shared/UI';
import {dispatch} from 'hooks/use-bus';
import { useForm } from 'react-hook-form';
import VALIDATORS from 'utils/validators';

const dispatchBus = dispatch;
const MaleFemaleProfile = (props) => {
    const [invitationEmails, setInvitationEmails] = useState([]);
    const [advertisersMade, setAdvertisersMade] = useState(false);
    const { register, handleSubmit, errors, getValues, setValue } = useForm({
        mode: 'onKeypress',
    });

    const [audienceBtns, setAudienceBtns] = useState([
        {title: 'Mannen', value: 'mannen', selected: false},
        {title: 'Koppels', value: 'koppels', selected: false},
        {title: 'Vrouwen', value: 'vrouwen', selected: false},
        {title: 'Shemales', value: 'shemales', selected: false},
    ]);

    const toggleAudienceTags = useCallback((id) => {
        const currentFind = audienceBtns.findIndex(v => v.value === id);
        if (currentFind > -1) {
            const _audienceBtns = [...audienceBtns];
            _audienceBtns[currentFind].selected = !_audienceBtns[currentFind].selected;
            setAudienceBtns(_audienceBtns)
        }
    }, [audienceBtns]);

    const removeEmail = useCallback((email) => {
        const _invitationEmails = [...invitationEmails];
        const findEmailIndex = _invitationEmails.findIndex(e => e === email);
        if (findEmailIndex > -1) {
            _invitationEmails.splice(findEmailIndex, 1)
            setInvitationEmails([..._invitationEmails])
        }
    }, [invitationEmails]);

    const listEmails = useCallback(() => {
        return invitationEmails.map(email => <li key={email}>
            {email}
            <span className="icon-Close" onClick={() => removeEmail(email)}></span>
        </li>)
    }, [invitationEmails]);

    const getEmailAdvertiser = () => {
        if (errors.advertiser_email) return;
        const newEmail = getValues('advertiser_email');
        if (invitationEmails.indexOf(newEmail) === -1) {
            setInvitationEmails(prevState => [...prevState, newEmail])
            setValue('advertiser_email', '');
        }
    }


    return (
        <div className="profile-container" data-scroll-view={"scroll-children_" + props.data.id}>
            <div className="title-and-edit">
                <h4>Profiel</h4>
                <label onClick={() => dispatchBus({type: 'EDIT_PROFILE_AD', payload: props.data})}>
                    Edit
                    <span className="icon-Edit"></span>
                </label>
            </div>
            <AccountView data={props.data}>
                <div className="go-to-edit-actions_ad">
                    {!props.noMadeAdvertisers && (props.data.gender === 'male' || props.data.gender === 'female') ? <>
                        <div className="switcher-line">
                            <p>
                                Mede-adverteerder(s)
                                <Switch
                                    onChange={(v) => setAdvertisersMade(v.target.checked)}
                                    checked={advertisersMade}
                                    color="default"
                                    inputProps={{}}
                                />
                            </p>
                            {advertisersMade ? <div className="invitation-container">
                                <p>
                                    Als je samen met een of meerdere andere adverteerders iets aanbiedt kun je hen hier uitnodigen om hun profiel
                                    toe te voegen aan je advertentie. Jij blijft eigenaar van de advertentie. Mede-adverteerders kunnen geen
                                    wijzigingen aanbrengen.
                                </p>
                                <div className="co-advertiser-wrap">
                                    <Input
                                        refBind={register({
                                            ...VALIDATORS.EMAIL_VALIDATOR,
                                            required: false,
                                            validate: v => invitationEmails.indexOf(v) > -1 ? 'Email already added' : null,
                                        })}
                                        type="email"
                                        name="advertiser_email"
                                        errors={errors.advertiser_email && errors.advertiser_email.message}
                                        label={{title: "Co-advertiser", color: '#fff'}}
                                        width={'calc(100% - 55px)'}
                                        margin={[0, 0, 16, 0]}
                                        events={['change']}
                                        onChange={() => getEmailAdvertiser()}
                                        placeholder="Enter a name or e-mail address"
                                    />
                                    <span className="icon-Contacts-Address-book"></span>
                                </div>
                                <div className="email-list-and-comment">
                                    {invitationEmails.length ? <>
                                        <ul>
                                            {listEmails()}
                                        </ul>
                                        <Input
                                            refBind={register({
                                                required: 'Please add some comment',
                                            })}
                                            textArea={{rows: 5}}
                                            name="advertiser_comment"
                                            errors={errors.advertiser_comment && errors.advertiser_comment.message}
                                            fullWidth={true}
                                            margin={[0, 0, 16, 0]}
                                            placeholder="Een opmerking toevoegen"
                                        />
                                    </> : ''}
                                </div>
                            </div> : ''}
                        </div>
                        {props.data.gender === 'male' ? <div className="audience-wrap">
                            <h4>Audience</h4>
                            <p>Wie wil je met deze advertentie bereiken? (Meerdere antwoorden mogetijk)</p>
                            <div className="tags-component_ad">
                                {audienceBtns.map(tag => <Tag
                                    margin={[0, 10, 10, 0]}
                                    text={tag.title}
                                    selected={tag.selected}
                                    key={tag.value}
                                    id={tag.value}
                                    toggle={(v) => toggleAudienceTags(v)}/>)}
                            </div>
                        </div> : ''}
                    </> : ''}
                </div>
            </AccountView>
        </div>
    )
}

MaleFemaleProfile.defaultProps = {
    noMadeAdvertisers: false,
}
MaleFemaleProfile.propTypes = {
    data: PropTypes.object.isRequired,
    noMadeAdvertisers: PropTypes.bool,
}
export default React.memo(MaleFemaleProfile);
