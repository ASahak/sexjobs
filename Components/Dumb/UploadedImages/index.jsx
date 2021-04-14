import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import CropImage from 'Components/Smart/ImageCropDialog';

const UploadedImages = (props) => {
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [startCropping, setStartCropping] = useState(null);
    const styles = UseStyles({}, {link: true});

    const saveEditedImage = (newImgSrc) => {
        props.changeImgBlog(startCropping, newImgSrc)
        setStartCropping(null);
    }

    const removeImage = useCallback((imgName) => {
        props.removeImg(imgName);
        setStartCropping(null);
    }, [props.dataFiles]);

    useEffect(() => {
        try {
            const first = Object.keys(props.dataFiles);
            setCoverPhoto(first[0] || null)
        } catch (err) {
            console.error(err)
        }
    }, [props.dataFiles])

    return (
        <div className={styles['uploaded-list']}>
            {coverPhoto ? <div className={styles['cover-photo']} data-index={1}>
                {props.dataFiles.hasOwnProperty(coverPhoto) ? <img src={props.dataFiles[coverPhoto].imgURL} alt=""/> : ''}
                <span className="cover-photo">Cover photo</span>
                <p className="icon-edit-account">
                    <span className="icon-Edit" onClick={() => setStartCropping(coverPhoto)}></span>
                    <span className="icon-Delete" onClick={() => removeImage(coverPhoto)}></span>
                </p>
            </div> : ''}
            <div className={styles['photo-items-wrap']}>
                {Object.keys(props.dataFiles).map((key, index) => key !== coverPhoto ? (<div key={key} className={styles['photo-item']} data-index={index + 1}>
                    <img src={props.dataFiles[key].imgURL} alt=""/>
                    <p className="icon-edit-account">
                        <span className="icon-Edit" onClick={() => setStartCropping(key)}></span>
                        <span className="icon-Delete" onClick={() => removeImage(key)}></span>
                    </p>
                </div>) : null)}
            </div>
            <CropImage
                src={props.dataFiles[startCropping]?.imgURL}
                saveCropping={(img) => saveEditedImage(img)}
                cancelCropping={() => setStartCropping(null)}
                open={!!startCropping}
            />
        </div>
    )
}
UploadedImages.defaultProps = {
    removeImg: () => void(0),
    changeImgBlog: () => void(0),
}
UploadedImages.propTypes = {
    removeImg: PropTypes.func,
    changeImgBlog: PropTypes.func,
    dataFiles: PropTypes.object.isRequired,
}
export default React.memo(UploadedImages);