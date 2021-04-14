import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types'
import {Button, Input, SimpleDialog} from 'Components/Shared/UI';
import usePrevious from 'hooks/use-previous-state'

const initialInputsState = {
    phone: {
        list: [],
        value: null,
    },
    website: {
        list: [],
        value: null,
    },
};
const ContactDetails = (_props) => {
    const [phoneWebSiteModal, setPhoneWebSiteModal] = useState(null);
    const [modalInputs, setModalInputs] = useState(initialInputsState);
    const modalCondition = {
        title: phoneWebSiteModal === 'phone' ? 'Add new phone number' : phoneWebSiteModal === 'website' ? 'Add new website' : null,
        isPhone: phoneWebSiteModal === 'phone',
        isWebsite: phoneWebSiteModal === 'website',
    };
    const prevTitleConfirmDialog = usePrevious(modalCondition.title);
    const prevInput = usePrevious(phoneWebSiteModal);

    const isThereAreAnError = useCallback((prop) => {
        return modalInputs[prop].list.indexOf(modalInputs[prop].value) > -1 ? 'There is an item such value' : ''
    }, [modalInputs]);

    const removeItem = useCallback((prop, item) => {
        setModalInputs(prevState => ({
            ...prevState,
            [prop]: {
                ...prevState[prop],
                list: prevState[prop].list.filter(e => e !== item)
            }
        }))
    }, [modalInputs])

    return (
        <div>
            <h4 className="title-content">Contactgegevens</h4>
            <h5 className="sub_title-content">Telefoonnummers</h5>
            <p className="paragraph-content">Je kunt verschillende telefoonnummers laten zien bij
                je advertenties.</p>
            <p className="paragraph-content">Je telefoonnummer wordt niet (!) automatisch
                getoond. Deze moet je eerst nog selecteren en
                activeren bij je advertentie!</p>
            {modalInputs.phone.list.map((phone, index) => <Input
                key={phone}
                customStylesDiv={{...(index === 0 && {borderTop: '1px solid rgb(180, 180, 180)'}), borderBottom: '1px solid rgb(180, 180, 180)'}}
                icon={{className: 'icon-Delete', onClick: () => removeItem('phone', phone)}}
                type="text"
                fullWidth={true}
                value={phone}
                transparentInput={true}
                readonly={true}
                margin={index === 0 ? [20, 0, 0] : []}
            />)}
            <Button
                onClick={() => setPhoneWebSiteModal('phone')}
                className="main-btn-of-content"
                icon={{direction: 'left', className: 'icon-Add'}}
                margin={[26, 16, 5, 0]}
                text="Add new phone number"
                typeButton="default"
                mobileFullWidth={true}
                width={250}
            />
            <p className="like-helper-text">Je wordt door ons gebeld om dit nummer te controleren</p>
            <br/>
            <h5 className="sub_title-content">Websites</h5>
            <p className="paragraph-content">Het is mogelijk om tegen betaling bezoekers van uw
                advertentie naar uw eigen website te leiden. U betaalt
                per dag dat uw website zichtbaar is bij uw advertentie.</p>
            {modalInputs.website.list.map((website, index) => <Input
                key={website}
                customStylesDiv={{...(index === 0 && {borderTop: '1px solid rgb(180, 180, 180)'}), borderBottom: '1px solid rgb(180, 180, 180)'}}
                icon={{className: 'icon-Delete', onClick: () => removeItem('website', website)}}
                type="text"
                fullWidth={true}
                value={website}
                transparentInput={true}
                readonly={true}
                margin={index === 0 ? [20, 0, 0] : []}
            />)}
            <Button
                onClick={() => setPhoneWebSiteModal('website')}
                className="main-btn-of-content"
                icon={{direction: 'left', className: 'icon-Add'}}
                margin={[26, 16, 5, 0]}
                text="Add new website"
                typeButton="default"
                mobileFullWidth={true}
                width={250}
            />
            <SimpleDialog
                minWidth={350}
                onClose={() => {
                    setModalInputs(prevState => ({...prevState, [phoneWebSiteModal]: {
                        ...prevState[phoneWebSiteModal],
                        value: null,
                    }}));
                    setPhoneWebSiteModal(false);
                }}
                disableOkBtn={!modalInputs[phoneWebSiteModal]?.value || !!isThereAreAnError('phone') || !!isThereAreAnError('website')}
                actions={{
                    ok: 'Save',
                    cancel: 'Cancel',
                }}
                onOk={() => {
                    setModalInputs(prevState => ({...prevState, [phoneWebSiteModal]: {
                        value: null,
                        list: prevState[phoneWebSiteModal].list.concat(prevState[phoneWebSiteModal].value)}
                    }));
                    setPhoneWebSiteModal(false);
                }}
                open={!!phoneWebSiteModal}
                title={modalCondition.title || prevTitleConfirmDialog}>
                {(modalCondition.isPhone || prevInput === 'phone') && <Input
                    errors={isThereAreAnError('phone')}
                    events={['keyup']}
                    onKeyup={(evt) => setModalInputs(prevState => ({...prevState, phone: {...prevState.phone, value: evt.target.value}}))}
                    type="text"
                    fullWidth={true}
                    margin={[0, 0, 16]}
                    placeholder="+31 612345678"
                    likeMaterialInput={true}
                />}
                {(modalCondition.isWebsite || prevInput === 'website') && <Input
                    events={['keyup']}
                    margin={[0, 0, 16]}
                    errors={isThereAreAnError('website')}
                    onKeyup={(evt) => setModalInputs(prevState => ({...prevState, website: {...prevState.website, value: evt.target.value}}))}
                    type="text"
                    fullWidth={true}
                    placeholder="www.example.com"
                    likeMaterialInput={true}
                />}
            </SimpleDialog>
        </div>
    )
}
export default ContactDetails;