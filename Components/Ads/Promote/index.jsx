import React, {useRef} from 'react';
import UseStyles from './styles';
import {Button, InlineToast} from 'Components/Shared/UI';
import {Gold, Silver, Sticker, ProlongAd, ProlongWebSite, Update} from 'Components/Ads/SharedComponents/Panels';
import PromotionUserPanel from 'Components/Ads/SharedComponents/PromotionUserPanel';

const PromoteView = (_props) => {
    const styles = UseStyles({}, {link: true});
    const goldRef = useRef();
    const silverRef = useRef();
    const stickerRef = useRef();
    const prolongAdRef = useRef();
    const prolongWebSiteRef = useRef();
    const updateRef = useRef();

    return (
        <div className={styles['promote-preview']}>
            <PromotionUserPanel/>
            <ProlongAd
                ref={prolongAdRef}
                label="Prolong paid Ad"
                perDay={14.15}
                description="The new period will end on Thursday 26th of October 2020, 14.05."
            />
            <ProlongWebSite
                ref={prolongWebSiteRef}
                description="The new period will end on Thursday 26th of October 2020, 14.05."
                label="Prolong website link"
                perDay={14.15}
            />
            <Update ref={updateRef}
                perDay={14.15}
            />
            <Gold ref={goldRef}
                perDay={14.15}
            />
            <Silver ref={silverRef}
                perDay={14.15}
            />
            <Sticker ref={stickerRef}
                perDay={14.15}
            />
            <br/>
            <InlineToast
                title="Overlap"
                type="warning"
                description="You have selected a Gold ad in combination with a Silver ad.
                 A Silver advertisement in addition to a Gold advertisement has no added value.
                  We advise you not to overlap these products"
            />
            <Button
                mobileFullWidth={true}
                margin={[15, 0, 0]}
                text="Plaats in winkelmand"
                typeButton="primary"
                width={250}
            />
        </div>
    )
}
export default PromoteView;