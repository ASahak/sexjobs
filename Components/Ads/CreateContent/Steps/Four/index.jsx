import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FileUploader from 'Components/Plugins/FileUploader';
import MyAdsImages from './elements/MyAdsImages';
import {Button} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import {v4} from 'uuid';

const defaultImages = {
    [v4()]: {imgURL: '/images/suggested/1.jpg'},
    [v4()]: {imgURL: '/images/suggested/2.jpg'},
    [v4()]: {imgURL: '/images/suggested/3_1.jpg'},
    [v4()]: {imgURL: '/images/suggested/3_2.jpg'},
    [v4()]: {imgURL: '/images/suggested/3_3.jpg'},
    [v4()]: {imgURL: '/images/suggested/4.jpg'},
    [v4()]: {imgURL: '/images/suggested/5.jpg'},
    [v4()]: {imgURL: '/images/suggested/6.jpg'},
}
const Photos = (props) => {
    const [anotherAdPicture, setAnotherAdPicture] = useState(defaultImages);
    const [myAdsDialogOpen, setMyAdsDialogOpen] = useState(false);
    const [generatedImagesList, setGeneratedImagesList] = useState({});
    const [thereAreUploadedImages, setThereAreUploadedImages] = useState([]);

    const setMyAdsImages = (dataKeys) => {
        setMyAdsDialogOpen(false);
        const newFiles = {};
        dataKeys.forEach(e => {
            newFiles[e] = anotherAdPicture[e]
        })
        setGeneratedImagesList(newFiles)
    }

    return (
        <div className="photos-content">
            {anotherAdPicture ? <>
                <h4>Add photos</h4>
                <p>You can adjust the order by dragging. You can add a maximum of 20 photos to your ad.</p>
                <p>TIP: By using photos from your other ads, your new ad will be online faster!</p>
            </> : <>
                <h4>Foto's toevoegen</h4>
                <p>Je kunt de volgarde aanpassen door te slepen. Je kunt maximaal 20 foto's tovoegen aan je advertenie.</p>
            </>}
            <FileUploader
                width={140}
                height={110}
                bgImageSrc=""
                defaultImagesList={generatedImagesList}
                withUploadedImages={true}
                maxCount={GLOBAL_CONSTANTS.adsImagesMaxCount}
                updateFilesCb={(v) => setThereAreUploadedImages(v)}
                multiple={true}/>
            {anotherAdPicture ? <>
                <MyAdsImages
                    alreadyUploaded={thereAreUploadedImages.map(e => e.id)}
                    emitSelected={setMyAdsImages}
                    data={anotherAdPicture}
                    closeDialog={() => setMyAdsDialogOpen(false)}
                    open={myAdsDialogOpen}/>
                <Button
                    onClick={() => setMyAdsDialogOpen(true)}
                    typeButton="default"
                    width={250}
                    mobileFullWidth={true}
                    text={'Foto\'s van mijn andereadventies laden'}
                    margin={[16, 0, 0]}
                />
            </> : ''}
            <Button
                onClick={() => props.goToNext('five')}
                typeButton="primary"
                width={250}
                mobileFullWidth={true}
                text={!!thereAreUploadedImages.length ? 'Ga door naar de laatste stap ' : 'Skip this step'}
                margin={[16, 0, 0]}
            />
        </div>
    )
}
Photos.propTypes = {
    goToNext: PropTypes.func.isRequired,
};
export default React.memo(Photos);