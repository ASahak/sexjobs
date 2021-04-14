import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Button} from 'Components/Shared/UI';

const credits = [
    {count: 500, price: 599.95, perCredit: 1.20},
    {count: 100, price: 129.95, perCredit: 1.30},
    {count: 50, price: 74.95, perCredit: 1.50},
    {count: 25, price: 39.95, perCredit: 1.60},
    {count: 10, price: 16.95, perCredit: 1.70},
];

const Credit = ({data = {}}) => {
    return (
        <div className="credit-wrapper">
            <div className="left-side_crd">
                <h4>
                    {data.count} Credits
                    <span>€ {data.price}</span>
                </h4>
                <p>€ {data.perCredit} per credit</p>
            </div>
            <div className="right-side_crd">
                <Button
                    size="sm"
                    icon={{className: 'icon-Add', direction: 'left'}}
                    typeButton="cta"
                />
            </div>
        </div>
    )
}
Credit.propTypes = {
    data: PropTypes.object.isRequired,
};

const UpgradeList = (_props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['upgrade-list-container']}>
            <h4>Upgrade</h4>
            {credits.map((crd, index) => <Credit key={index} data={crd} />)}
        </div>
    )
}
UpgradeList.propTypes = {};
export default UpgradeList;