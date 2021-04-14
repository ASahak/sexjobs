import {createUseStyles} from 'react-jss';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'edit-account-view_container': {
        '& > form h4': {
            color: 'rgb(255, 255, 255)',
            marginBottom: '16px',
            fontWeight: 'bold',
            fontSize: '16px',
        },
        '& .edit-account-vw_avatar': {
            width: '300px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #5F799A',
            position: 'relative',
            borderRadius: '4px',
            ...MediaQuery.down({
                width: '100%',
                maxHeight: '250px',
                height: 'auto',
            }).sm,
            '& .drop-area': {
                border: 'none'
            },
            '& > .icon-edit-account': {
                position: 'absolute',
                bottom: '0px',
                right: '10px',
                '& > span': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#3c75bbd9',
                    borderRadius: '50%',
                    margin: '0 5px',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#3C75BB'
                    }
                }
            },
            '& > img': {
                borderRadius: '4px',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }
        },
        '& .edit-account-form_fields': {
            '& > h4': {
                color: 'rgb(255, 255, 255)',
                marginTop: '26px',
                marginBottom: '16px',
                fontWeight: 'bold',
                fontSize: '16px',
                '&.title-width_paragraph': {
                    marginBottom: '0',
                    '& + p': {
                        color: '#fff',
                        fontSize: '13px',
                    }
                }
            },
            '& .languages-options': {
                '& h4': {
                    fontSize: '13px'
                },
                '& > ul': {
                    listStyleType: 'none',
                    padding: '0',
                }
            },
            '& .range-sliders-edit': {
                ...MediaQuery.down({
                    padding: '0 10px'
                }).sm,
            },
        }
    }
})