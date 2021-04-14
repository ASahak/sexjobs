import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FreeAd from './components/FreeAd';
import PaidAd from './components/PaidAd';

const Promotion = (_props) => {
    const [noWebSite, setNoWebSite] = useState(true);
    return (
        <div className="promotion-content">
            {!noWebSite ? <FreeAd /> : <PaidAd />}
        </div>
    )
}
export default React.memo(Promotion);