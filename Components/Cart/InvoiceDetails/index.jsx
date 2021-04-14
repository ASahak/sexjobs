import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';

const InvoiceDetails = (props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['invoice-details-container']}>
            <h4 className="title-content">Invoice Details</h4>
            <div className="details-edit-btn-wrapper">
                <ul>
                    <li>A.F.T. Boonstra</li>
                    <li>BTW: 1234567</li>
                    <li>2412 JK Den Haag</li>
                    <li>Nederland</li>
                </ul>
                <p onClick={() => props.goToEdit()}>
                    <span className="icon-Edit"></span>
                    Edit
                </p>
            </div>
        </div>
    )
}
InvoiceDetails.propTypes = {
    goToEdit: PropTypes.func.isRequired,
};
export default InvoiceDetails;