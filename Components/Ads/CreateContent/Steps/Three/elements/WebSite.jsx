import React, {useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Switch, InlineToast} from 'Components/Shared/UI';
import AddPWE from 'Components/Dumb/AddPhoneWebSiteEmail';

const Website = React.forwardRef((props, ref) => {
    const [isWebsite, setIsWebsite] = useState(false);

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve('');
        }

    }));

    return (
        <div className="website-wrapper">
            <h4>
                Website
                <p>
                    <Switch
                        onChange={(v) => setIsWebsite(v.target.checked)}
                        checked={isWebsite}
                        color="default"
                        inputProps={{}}
                    />
                </p>
            </h4>
            {isWebsite ? <AddPWE
                titleDialog="Add new website"
                inputLabel="Website"
                placeholder="Add Website"
                infoRightTop={'€ 0.95 per day'}
                type="website" /> : ''}
            {isWebsite ? <InlineToast
                title={'Adding a website is a paid option'}
                type={'info'}
            /> : ''}
        </div>
    )
})
Website.propTypes = {}
export default React.memo(Website);