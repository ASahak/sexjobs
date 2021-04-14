import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import { toast } from 'react-toastify';
import UploadedImages from 'Components/Dumb/UploadedImages';
import {v4} from 'uuid';

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
    Object.keys(nestedObj).map((key) => Object.assign(nestedObj[key], {id: key}));

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);
const FileUploader = ({
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    bgImageSrc,
    withUploadedImages,
    maxCount,
    defaultImagesList,
    ...otherProps
}) => {
    const styles = UseStyles({
        height: otherProps.height + 'px',
        width: otherProps.width + 'px',
    }, {link: true});
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});

    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const addNewFiles = (newFiles) => {
        let toastIsActive = false;
        for (let file of newFiles) {
            if (maxCount && Object.keys(files).length > maxCount - 1) {
                !toastIsActive && toast(`You can upload maximum ${maxCount} images!`, {
                    autoClose: 4000,
                    type: 'error',
                })
                toastIsActive = true;
            } else if (file.size <= maxFileSizeInBytes) {
                if (!otherProps.multiple) {
                    return { file };
                }
                let isImageFile = file.type.split("/")[0] === "image";
                if (isImageFile) {
                    files[v4()] = {file, imgURL: URL.createObjectURL(file)};
                }
            } else {
                toast(file.name + ' size is to big!', {
                    autoClose: 4000,
                })
            }
        }
        return { ...files };
    };

    const callUpdateFilesCb = (files) => {
        const filesAsArray = convertNestedObjectToArray(files);
        updateFilesCb(filesAsArray);
    };

    const handleNewFileUpload = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles.length) {
            let updatedFiles = addNewFiles(newFiles);
            setFiles(updatedFiles);
            callUpdateFilesCb(updatedFiles);
        }
    };

    const removeFile = (fileName) => {
        delete files[fileName];
        setFiles({ ...files });
        callUpdateFilesCb({ ...files });
    };
    const changeImgBlog = (key, src) => {
        files[key].imgURL = src;
        setFiles({ ...files });
        callUpdateFilesCb({ ...files });
    }

    useEffect(() => {
        if (withUploadedImages) {
            const _files = {...files};
            const keys = Object.keys(defaultImagesList).filter(e => Object.keys(files).indexOf(e) === -1);
            for(let i = 0; i < keys.length; i++) {
                if (maxCount && Object.keys(files).length + (i) > maxCount - 1) {
                    toast(`You can upload maximum ${maxCount} images!`, {
                        autoClose: 4000,
                        type: 'error',
                    })
                    break;
                } else {
                    _files[keys[i]] = defaultImagesList[keys[i]]
                }
            }
            setFiles({ ..._files });
            callUpdateFilesCb({ ..._files });
        }
    }, [defaultImagesList, withUploadedImages])

    return (
        <div className={styles['file-uploader-container']}>
            <label>{label}</label>
            {withUploadedImages ? <UploadedImages
                removeImg={img => removeFile(img)}
                changeImgBlog={(imgKey, imgSrc) => changeImgBlog(imgKey, imgSrc)}
                dataFiles={files}
            /> : ''}
            {(withUploadedImages && maxCount !== Object.keys(files).length || !withUploadedImages) ? <div className="drop-area">
                {(!otherProps.multiple && !withUploadedImages) && Object.keys(files).length ? <img src={files[Object.keys(files)[0]].imgURL} alt=""/> :
                    bgImageSrc ? <img src={ bgImageSrc } alt=""/> : ''
                }
                <button type="button" onClick={handleUploadBtnClick}>
                    <i className="icon icon-Add" />
                </button>
                <input
                    type="file"
                    ref={fileInputField}
                    onChange={handleNewFileUpload}
                    accept="image/*;capture"
                    title=""
                    value=""
                    {...otherProps}
                />
            </div> : ''}
        </div>
    )
}
FileUploader.defaultProps = {
    updateFilesCb: () => void(0),
    width: 250,
    height: 180,
    withUploadedImages: false,
    defaultImagesList: {},
}
FileUploader.propTypes = {
    maxCount: PropTypes.number,
    withUploadedImages: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    updateFilesCb: PropTypes.func,
    defaultImagesList: PropTypes.object,
    bgImageSrc: PropTypes.string.isRequired,
};
export default React.memo(FileUploader);
