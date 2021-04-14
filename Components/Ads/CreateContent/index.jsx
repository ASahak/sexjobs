import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import MySJBar from 'Components/Smart/MySJBar';
import {useSelector} from 'react-redux';
import {getAccount} from 'store/reselect';
import ProgressTracker from 'Components/Smart/MySJBarExtensions/ProgressTracker';
import Person from './Steps/One/Person';
import Company from './Steps/One/Company';
import Couple from './Steps/One/Couple';
import Category from './Steps/Two';
import Advertisement from './Steps/Three/Advertisement';
import Photos from './Steps/Four';
import Promotion from './Steps/Five';
import {CREATE_AD_PROGRESS_STEPS} from 'utils/constants';
import useBus from 'hooks/use-bus';

const CreateAd = () => {
    const account = useSelector(getAccount());
    const styles = UseStyles({}, {link: true});

    const [editView, setEditView] = useState({});
    const [necessaryData, setNecessaryData] = useState(null);
    const [createAdStep, setCreateAdStep] = useState('three');
    const accountType = account.type;
    const profile = account.profile;
    const noProfile = accountType === 'company'? !profile.data.list.length : accountType === 'suppose' ? (!profile.data.profile1 && !profile.data.profile2) : !profile.data;

    useBus(
        'EDIT_PROFILE_AD',
        ({payload}) => {
            setEditView(payload)
        },
    []);

    const mobileStep = useCallback(() => {
        const getCurrentIndex = CREATE_AD_PROGRESS_STEPS.findIndex(e => e.key === createAdStep);
        if (getCurrentIndex > -1) return {
            index: getCurrentIndex + 1,
            title: CREATE_AD_PROGRESS_STEPS[getCurrentIndex].title
        }
    }, [createAdStep]);

    const RenderAccountView = useCallback(() => {
        const propsComponent = {
            isEdit: editView,
            profile: profile,
            isProfile: !noProfile,
            goToNext: (v, necessaryData) => {
                if (necessaryData) setNecessaryData(necessaryData)
                setCreateAdStep(v)
            }
        }
        if (createAdStep === 'one') {
            switch (accountType){
                case 'person':
                    return <Person {...propsComponent}/>
                case 'company':
                    return <Company {...propsComponent}/>
                case 'suppose':
                    return <Couple {...propsComponent}/>
            }
        } else if (createAdStep === 'two') {
            return <Category {...propsComponent}/>
        } else if (createAdStep === 'three') {
            return <Advertisement categoryType={necessaryData || 'regular'} goToNext={propsComponent.goToNext} />
        } else if (createAdStep === 'four') {
            return <Photos goToNext={propsComponent.goToNext} />
        } else if (createAdStep === 'five') {
            return <Promotion />
        }
    }, [accountType, profile, noProfile, editView, createAdStep, necessaryData])

    const stepCondition = !noProfile && !editView.id;
    return (
        <div>
            <MySJBar
                onCloseLikeDialog={() => setEditView({})}
                dialogSave={true}
                type={editView.id ? 'like-dialog' : 'main'}
                title={editView.name || 'Nieuwe advertentie'}
            />
            {stepCondition ? <ProgressTracker steps={CREATE_AD_PROGRESS_STEPS} activeTab={createAdStep}/> : ''}
            <div className={`${styles['main-create_content']} ${createAdStep === 'five' ? 'no-background' : ''}`}>
                {stepCondition ? <div className="mobile-step-name">
                    <h4>{mobileStep().index}. {mobileStep().title}</h4>
                </div> : ''}
                {RenderAccountView()}
            </div>
        </div>
    )
}

CreateAd.propTypes = {};
export default CreateAd;