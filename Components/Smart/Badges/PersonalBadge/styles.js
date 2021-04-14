import {createUseStyles} from 'react-jss';

export default createUseStyles({
    'personal-badge-wrapper': {
        display: 'block',
        '&.with-shadow': {
            marginBottom: '10px',
            backgroundColor: '#104991',
            boxShadow: '0 3px 6px 0 rgb(0 0 0 / 15%)',
            '& .image-wrapper .slider_badge_row': {
                '& > img': {
                    padding: '5px',
                }
            }
        },
        '& .image-wrapper': {
            width: '100%',
            height: '200px',
            position: 'relative',
            '& > img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }
        },
        '& .bottom-data': {
            padding: '10px',
            '& > h4': {
                fontSize: '18px',
                color: '#fff',
                textAlign: 'center',
                margin: '10px 0',
                whiteSpace: 'nowrap',
            },
            '& > p': {
                margin: '0',
                textAlign: 'center',
                fontSize: '14px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > span': {
                    marginTop: '-2px',
                    marginRight: '7px',
                }
            },
            '& .location-info': {
                paddingTop: '10px',
                borderTop: '1px solid #094287',
                '& > p': {
                    fontSize: '14px',
                    marginBottom: '7px',
                    height: '20px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    '&:last-child': {
                        marginBottom: '0',
                    },
                    '& > span': {
                        marginRight: '10px',
                        marginLeft: '2px',
                        color: '#fff200',
                    },
                    color: '#fff'
                },
            },
            '& .title-info': {
                '& > h4': {
                    height: '40px',
                    overflow: 'hidden',
                    fontSize: '16px',
                    color: '#fff200',
                    margin: '10px 0'
                },
                '& > p': {
                    marginBottom: '7px',
                    color: '#fff',
                    fontSize: '13px',
                    height: '20px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }
            }
        }
    }
})