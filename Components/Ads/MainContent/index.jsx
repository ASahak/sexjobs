import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PropTypes from  'prop-types';
import ReactDOM from 'react-dom'
import {motion, AnimatePresence} from 'framer-motion';
import dynamic from 'next/dynamic';
import {getActiveTabAds, adsSelector, baseSelector} from 'store/reselect';
import MySJBar from 'Components/Smart/MySJBar';
const TabContent = dynamic(() => import('Components/Smart/MySJBarExtensions/Tabs').then(_ => _.default), {ssr: false});
const PlaceAnAd = dynamic(() => import('Components/Ads/SharedComponents/PlaceAnAd').then(_ => _.default), {ssr: false});
const MyAd = dynamic(() => import('Components/Ads/SharedComponents/MyAd').then(_ => _.default), {ssr: false});
import MainOptions from 'Components/Ads/BarOptions/Main';
import UseStyles from './styles';
import {toggleSelectedAds} from 'store/actions';
import useBus from 'hooks/use-bus';
import {Collapse} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';

const titles = {
    offline: 'Offline',
    online: 'Online',
    concepts: 'Concepts',
}
const MainContent = (props) => {
    const dispatch = useDispatch();
    const adsState = useSelector(adsSelector());
    const baseState = useSelector(baseSelector());

    const styles = UseStyles({}, {link: true});
    const [tabs, setTabs] = useState([]);
    const [mobileActionsToggle, setMobileActionsToggle] = useState(false);
    const [activeTab, setActiveTab] = useState('online');
    const [mobileSelectOn, setMobileSelectOn] = useState(false);

    const selectedAds = adsState.selectedAds;
    const adsByFilteredType = getActiveTabAds(adsState)(activeTab);
    const loggedUser = baseState.user;

    useBus(
        'SELECT_MULTIPLE_ADS',
        () => {
            setMobileSelectOn(true)
        },
        [mobileSelectOn]
    );

    const ads = useMemo(() => {
        return Object.keys(adsState.ads).reduce((acc, item) => {
            acc[item] = adsState.ads[item].length;
            return acc;
        }, {})
    }, [adsState.ads]);


    const toggleAllAds = (v) => {
        dispatch(toggleSelectedAds({type: 'all', data: v}));
    };


    useEffect(() => {
        ads && setTabs(Object.keys(ads).reduce((acc, item) => {
            acc.push({title: titles[item] + ' (' + ads[item] + ')', key: item})
            return acc;
        }, []))
    }, [ads])

    const checkItemsChecked = useCallback(() => {
        const countAds = Object.keys(ads).reduce((acc, item) => {
            acc+= +ads[item]
            return acc;
        }, 0);
        return {
            halfPart: !!(selectedAds.length && selectedAds.length !== countAds),
            isFullSelected: selectedAds.length === countAds,
        }
    }, [selectedAds, ads]);

    return (
        <>
            <MySJBar
                onCloseLikeDialog={() => {
                    setActiveTab('online');
                    dispatch(toggleSelectedAds({type: 'all', data: false}));
                    setMobileSelectOn(false)
                }}
                dialogSave={false}
                options={mobileSelectOn ? null : <MainOptions overflow={true} />}
                type={mobileSelectOn ? 'like-dialog' : 'main'}
                title={mobileSelectOn ? `${selectedAds.length} advertentie geselecteerd` : 'Mijn advertenties'}
            />
            <TabContent
                activeTab={activeTab}
                tabs={tabs}
                changeEmit={(val) => setActiveTab(val)}
            />
            <div className={styles['promotion-ads-page']}>
                <PlaceAnAd
                    isChecked={checkItemsChecked()}
                    toggleAll={(v) => toggleAllAds(v)}
                    ifThereAreAds={adsByFilteredType && !!adsByFilteredType.length}
                />
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={adsByFilteredType}
                        transition={{ duration: 0.5 }}
                        initial="pageInitial"
                        animate="pageAnimate" exit="pageExit" variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        }
                    }}>
                        {adsByFilteredType.map(ad => <MyAd
                            mobileSelect={mobileSelectOn}
                            data={ad}
                            checked={selectedAds.findIndex(e => e === ad.id) > -1}
                            key={ad.id}
                            toggleChecked={(type, id) => dispatch(toggleSelectedAds({type: type ? 'add' : 'delete', data: id}))}
                            loggedUser={loggedUser}/>)}
                    </motion.div>
                </AnimatePresence>
                {mobileSelectOn ? <div className={`${styles['mobile-bottom-actions-wrapper']} ${selectedAds.length ? 'show-bottom_fixed-overlay' : ''}`}>
                    <div className="top-panel-mb_fixed">
                        <div className="checkbox-all_btn" onClick={() => dispatch(toggleSelectedAds({type: 'all', data: !checkItemsChecked().isFullSelected}))}>
                            <p>
                                <span className={`icon-Check-alt ${checkItemsChecked().isFullSelected ? 'all-selected_fixed' : ''} ${checkItemsChecked().halfPart ? 'half-selected_fixed' : ''}`}></span>
                                {selectedAds.length}
                            </p>
                            <a>Alles</a>
                        </div>
                        <div className={`actions-collapse ${mobileActionsToggle ? 'overflow-list-open' : ''}`}>
                            <p onClick={() => setMobileActionsToggle(!mobileActionsToggle)}>
                                Acties
                                <span className="icon-Accordion-Open"></span>
                            </p>
                        </div>
                    </div>
                    <Collapse isOpen={mobileActionsToggle}>
                        <ul className="actions-fixed_overflow">
                            <li><a>Omhoogplaatsen</a></li>
                            <li><a>Extra opvallen</a></li>
                            <li><a>Update planner</a></li>
                            <li><a>Offline zetten</a></li>
                        </ul>
                    </Collapse>
                </div>: ''}
            </div>
        </>
    )
}

MainContent.defaultProps = {}
MainContent.propTypes = {}
export default MainContent;
