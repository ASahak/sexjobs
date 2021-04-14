import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {InlineToast, Button} from 'Components/Shared/UI';
import {Collapse} from 'reactstrap';
import {Advertisers, Category, Description, Pictures} from '../AccordionComponents';

const EditView = (props) => {
    const [loadingIcon, setLoadingIcon] = useState(false);
    const [editAccordionList, setEditAccordionList] = useState([
        {title: 'Advertisers', isOpen: false, component: <Advertisers />},
        {title: 'Category', isOpen: false, component: <Category />},
        {title: 'Description', isOpen: false, component: <Description />},
        {title: 'Pictures', isOpen: false, component: <Pictures />},
    ]);
    const styles = UseStyles({}, {link: true});

    const generateAlert = () => {
        switch (props.messageType) {
            case 'new-ad':
                return {
                    type: "info",
                    title: "Waiting for moderation",
                    description: "Your advertisement is not published yet. Once our moderators approved the content it will be directly visible for public.",
                }
            case 'changed-ad':
                return {
                    type: "info",
                    title: "Waiting for moderation",
                    description: "Your advertisement contains changes that have not yet been published. Once these changes have been approved by our moderators your updated version will be visible for the public.",
                }
            case 'denied-new-ad':
                return {
                    type: "error",
                    title: "Your advertisement is denied",
                    description: "Your advertisement is denied. [MODERATION REASON). We recommend you to revise your advertisement and submit it again.",
                }
            case 'denied-changed-ad':
                return {
                    type: "error",
                    title: "Denied changes",
                    description: "(Some of the changes you made to your advertisement are denied. The denied changes are reset to an earlier state. [MODERATION REASON).",
                }
            default:
                return {}
        }
    };

    const toggleAccordion = useCallback((col) => {
        col.isOpen = !col.isOpen;
        const list = [...editAccordionList];
        setEditAccordionList(list)
    }, [editAccordionList])

    return (
        <div className={styles['main-edit-container']}>
            {props.messageType ? <InlineToast {...generateAlert()} /> : ''}
            {editAccordionList.map((col, index) => <div key={col.title}>
                <div className={styles['collapse-header']} onClick={() => toggleAccordion(col)}>
                    <p>{index + 1}. {col.title}</p>
                    <span className={`icon-Accordion-${!col.isOpen ? 'Open' : 'Close'}`}></span>
                </div>
                <Collapse isOpen={col.isOpen}>
                    {React.cloneElement(col.component, {updateKey: col.isOpen})}
                </Collapse>
            </div>)}
            <Button
                icon={{className: 'icon-Save', direction: 'left', loading: loadingIcon}}
                margin={[10, 10, 30, 0]}
                size={'md'}
                width={250}
                mobileFullWidth={true}
                text="Save Changes"
                typeButton={'primary'}
            />
        </div>
    )
}
EditView.propTypes = {
    messageType: PropTypes.string,
}
export default EditView;