import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Gold, Silver, Sticker, ProlongAd, ProlongWebSite, Update} from 'Components/Ads/SharedComponents/Panels';
import {Button, Input, SimpleDialog} from 'Components/Shared/UI';
import UseStyles from '../styles';

const FreeAd = (_props) => {
    const styles = UseStyles({}, {link: true});
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className={styles['panel-section-wrapper']}>
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
                        onClick={() => setOpenModal(true)}
                        icon={{direction: 'left', className: 'icon-Publish'}}
                        margin={[16, 16, 0, 0]}
                        text="Afrekenen en plaatsen"
                        typeButton="primary"
                        mobileFullWidth={true}
                        width={250}
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
            <SimpleDialog
                open={openModal}
                onOk={() => setOpenModal(false)}
                onClose={() => setOpenModal(false)}
                actions={{
                    ok: 'CONTINUE'
                }}
                title="Your advertisement was placed successfully">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem consectetur deleniti, dignissimos dolorem esse itaque iure maiores perspiciatis veniam?
                    Adipisci deleniti dicta distinctio dolorem eveniet excepturi magnam, nesciunt odit omnis?</p>
            </SimpleDialog>
        </>
    )
}
FreeAd.propTypes = {};
export default React.memo(FreeAd);