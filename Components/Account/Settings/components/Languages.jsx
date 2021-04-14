import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Select} from 'Components/Shared/UI';
import {LANGUAGES_OF_WEBSITE} from 'utils/constants';

const Languages = (_props) => {
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES_OF_WEBSITE[0].value);
    return (
        <div>
            <h4 className="title-content">Taalinstellingen</h4>
            <Select
                className="main-btn-of-content"
                onChange={v => setSelectedLanguage(v.target.value)}
                margin={[0, 8, 0, 0]}
                withAvatar={true}
                value={selectedLanguage}
                options={LANGUAGES_OF_WEBSITE}
                rules={{}}
                size={'md'}
                width={250}
                name="language"
            />
        </div>
    )
}
export default Languages;