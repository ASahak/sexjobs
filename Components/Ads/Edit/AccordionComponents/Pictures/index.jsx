import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import FileUploader from 'Components/Plugins/FileUploader';
import {GLOBAL_CONSTANTS} from 'utils/constants';

const Pictures = (_props) => {
    const styles = UseStyles({}, {link: true});

    return (<div className={styles['pictures-container']}>
        <h4>Foto's toevoegen aan je advertentie</h4>
        <p>Je kunt de volgorde aanpassen door te slepen</p>
        <p>Je kunt de volgarde aanpassen door te slepen. Je kunt maximaal 20 foto's tovoegen aan je advertenie.</p>
        <FileUploader
            width={140}
            height={110}
            bgImageSrc=""
            // defaultImagesList={defaultImagesList}
            withUploadedImages={true}
            maxCount={GLOBAL_CONSTANTS.adsImagesMaxCount}
            // updateFilesCb={(v) => console.log(v)}
            multiple={true}/>
    </div>)
}
Pictures.propTypes = {};
export default Pictures;