import {createUseStyles} from 'react-jss';
import variables from "../../../static/styles/jss/abstracts/variables";

export default createUseStyles({
    'my-profiles-list': {
        '& ul': {
            listStyleType: 'none',
            padding: '0',
        },
        '& > h4': {
            color: 'rgb(255, 255, 255)',
            marginBottom: '16px',
            fontWeight: 'bold',
            fontSize: '16px',
            '&:first-child + ul .profile-wrapper': {
                borderBottom: '2px solid #C7C6C5',
                marginBottom: '30px'
            }
        },
        '& > ul .profile-wrapper': {
            position: 'relative',
            borderTop: '2px solid #ccc',
            cursor: 'pointer',
            paddingLeft: '5px',
            '&:last-child': {
                borderBottom: '2px solid #C7C6C5',
            },
            '& .left-side_pw': {
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0',
                '& > p': {
                    margin: '0',
                    color: 'rgb(255, 255, 255)',
                    marginLeft: '20px',
                    fontSize: '13px',
                }
            },
            '& > span': {
                color: variables.$iconColor,
                right: '13px',
                position: 'absolute',
                fontSize: '13px',
                transition: '.2s',
                top: '0',
                bottom: '0',
                height: '13px',
                width: '13px',
                margin: 'auto',
            },
            '&:hover > span': {
                right: '17px',
            }
        },
    },
})