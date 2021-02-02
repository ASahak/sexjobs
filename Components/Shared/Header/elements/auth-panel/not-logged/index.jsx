import React, {useState, useMemo, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Link from 'next/link';
import {
    Button,
} from 'Components/Shared/UI';
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';
import {useRouter} from "next/router";

const languages = [
    {value: 'netherlands', title: 'Netherlands', img: '/images/flags/netherlands.jpg'},
    {value: 'english', title: 'English', img: '/images/flags/england.png'},
    {value: 'deutsch', title: 'Deutsch', img: '/images/flags/german.jpg'}
];

const NotLogged = (props) => {
    const router = useRouter();
    const [language, setLanguage] = useState(languages[0]);
    const [anchorEl, setAnchorEl] = useState(null);

    const classesDropDown = useDropDownPopoverStyles({
        margin: '4px 0 0 0'
    });
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const changeLanguage = useCallback((e) => {
        setLanguage(e);
    }, [language]);

    const languagesLi = useMemo(() => languages.map(e =>
        <li key={e.value} className={language.value === e.value ? 'active-language' : ''} onClick={() => changeLanguage(e)}>
            <img src={e.img} />
            {e.title}
        </li>
    ), [language]);

    const goToRoute = async () => {
        try {
            if (props.page) {
                await router.push(props.page === 'login' ? '/register' : '/login')
            } else {
                // todo do something else
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            {props.page ? <span className="user-question">{props.page === 'register' ? 'Already an account?' : 'Not Account yet?'}</span> : null }
            <div className="language-wrap">
                <img onClick={(event) => setAnchorEl(event.currentTarget)} src={language.img}/>
                <Popover
                    classes={classesDropDown}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    PaperProps={{
                        style: {
                            width: '130px'
                        }
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <ul className="language-dropdown_popover">
                        {languagesLi}
                    </ul>
                </Popover>
            </div>
            {!props.page ? <Link href="/login" prefetch={false}>
                <a className="user_icon">
                    <span className="icon-user"></span>
                </a>
            </Link> : ''}
            <Button
                className="ads-button"
                icon={!props.page ? {className: 'icon-plus', direction: 'left'} : {}}
                size={'md'}
                text={!props.page ? 'Plaats advertentie' : props.page === 'register' ? 'Login' : 'Register'}
                typeButton="primary"
                onClick={() => goToRoute()}
            />
        </>
    )
}
NotLogged.propTypes = {};
export default NotLogged;