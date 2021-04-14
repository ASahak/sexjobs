import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'file-uploader-container': {
        '& > label': {
            color: 'rgb(255, 255, 255)',
            marginBottom: '16px',
            fontWeight: 'bold',
            fontSize: '15px',
        },
        '& .drop-area': {
            border: '2px dashed #9EA6B1',
            width: props => props.width,
            height: props => props.height,
            borderRadius: '10px',
            marginBottom: '20px',
            padding: '10px',
            position: 'relative',
            '& > input[type=\"file\"]': {
                position: 'absolute',
                width: '0',
                height: '0',
                top: '0',
                left: '0',
                opacity: '0',
                zIndex: '-1',
                visibility: 'hidden',
            },
            '& > button': {
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: '0',
                top: '0',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                '& > .icon': {
                    transition: '.2s',
                    width: '50px',
                    display: 'flex',
                    height: '50px',
                    margin: 'auto',
                    background: '#3871b8db',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                },
                '&:hover > .icon': {
                    background: '#3871b8',
                },
            },
            '& > img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            },
        }
    },
})