import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-easy-crop';
import { SimpleDialog } from 'Components/Shared/UI';
import UseStyles from './styles';
import {getCroppedImg} from 'utils/handlers';

const additionalConfigs = (props) => ({
    image: props.src,
    rotation: 0,
    cropSize: {
        width: 300,
        height: 300,
    },
    crop: { x: 0, y: 0 },
    zoom: 1.3,
})
const CropImage = (props) => {
    const styles = UseStyles({}, {link: true});
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [options, setOptions] = useState({
        ...additionalConfigs(props)
    });

    const rotate = (direction) => {
        const deg = options.rotation + (direction === 'redo' ? options.rotation === 360 ? -270 : 90 : options.rotation === -360 ? 270 : -90);
        setOptions(prevState => ({
            ...prevState,
            rotation: deg
        }))
    }

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }
    const getCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                options.image,
                croppedAreaPixels,
                options.rotation
            )
            props.saveCropping(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        setOptions({
            ...additionalConfigs(props)
        })
    }, [props.open])

    useEffect(() => {
        setOptions(prevState => ({...prevState, image: props.src}))
    }, [props.src])

    return (
        <SimpleDialog
            open={props.open}
            onClose={props.cancelCropping}
            onOk={() => getCroppedImage()}
            actions={{
                cancel: 'Cancel',
                ok: 'Save',
            }}
        >
            <div className={styles['rotate-wrapper']}>
                <p>Rotate</p>
                <div>
                    <span className="icon-Rotate-Right" onClick={() => rotate('undo')}></span>
                    <span className="icon-Rotate-Left" onClick={() => rotate('redo')}></span>
                </div>
            </div>
            <div className={styles['crop-container']}>
                <Cropper
                    {...options}
                    onCropChange={(crop) => setOptions(prevState => ({...prevState, crop}))}
                    onCropComplete={onCropComplete}
                    onZoomChange={(zoom) => setOptions(prevState => ({...prevState, zoom}))}
                />
            </div>
        </SimpleDialog>
    )
}
CropImage.defaultProps = {
    cancelCropping: () => void(0),
    saveCropping: () => void(0),
}
CropImage.propTypes = {
    src: PropTypes.string,
    open: PropTypes.bool,
    cancelCropping: PropTypes.func,
    saveCropping: PropTypes.func,
}
export default React.memo(CropImage);