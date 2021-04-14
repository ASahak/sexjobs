import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from '../styles';
import {Button, Input} from 'Components/Shared/UI';
import {Gold, Silver, Sticker, ProlongAd, ProlongWebSite} from 'Components/Ads/SharedComponents/Panels';

const PaidAd = (_props) => {
    const styles = UseStyles({}, {link: true});
    const paidCostRef = useRef();
    const websiteCostRef = useRef();

    return (
        <div className={styles['panel-section-wrapper']}>
            <h4>Adverteerkosten</h4>
            <ProlongAd
                ref={paidCostRef}
                label="Paid advertisement"
                perDay={14.15}
                withStartingTime={true}
                description="In case your advertisement will be
                approved by moderation after the starting
                moment, the starting moment is postponed
                until your advertisement is online."
            />
            <ProlongWebSite
                ref={websiteCostRef}
                label="Place website link"
                perDay={14.15}
                withStartingTime={true}
                description="In case your advertisement will be
                approved by moderation after the starting
                moment, the starting moment is postponed
                until your advertisement is online."
            />
            <br/>
            <h4>Extra opvallen</h4>
            <Gold
                perDay={14.15}
            />
            <Silver
                perDay={14.15}
            />
            <Sticker
                perDay={14.15}
            />
            <br/>
            <h4>Toestemming gebruik persoonsgegevens</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa cum, debitis distinctio fugiat, ipsam iste magnam modi nulla praesentium quibusdam quod quos repudiandae saepe sapiente, temporibus velit? Molestiae, quibusdam!</p>
            <Input
                theme="dark"
                label={{title: 'Ik geef toestemming voor het &nbsp;<a> verwerken van mijn persoonsgegevens</a>', color: '#fff', forId: 'i-give-permission'}}
                type="checkbox"
                margin={[20, 0, 16]}
            />
            <Input
                theme="dark"
                label={{title: 'Ik ga akkoord met de &nbsp;<a>algemene voorwaarden </a> &nbsp; van SexJobs', color: '#fff', forId: 'i-agree'}}
                type="checkbox"
                margin={[12, 0, 16]}
            />
            <div className="flex-btns">
                <Button
                    icon={{direction: 'left', className: 'icon-Publish'}}
                    margin={[16, 16, 0, 0]}
                    text="Afrekenen en plaatsen"
                    typeButton="cta"
                    width={250}
                    mobileFullWidth={true}
                />
                <Button
                    icon={{direction: 'left', className: 'icon-Save'}}
                    margin={[16, 16, 0, 0]}
                    text="Opslaan in concepten"
                    typeButton="default"
                    width={250}
                    mobileFullWidth={true}
                />
            </div>
        </div>
    )
}
PaidAd.propTypes = {};
export default React.memo(PaidAd);