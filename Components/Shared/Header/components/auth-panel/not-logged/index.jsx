import React, {useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Link from 'next/link';
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';
import HeaderBtn from 'Components/Dumb/HeaderButton';
import {LANGUAGES_OF_WEBSITE} from 'utils/constants';

const NotLogged = (props) => {
    const [language, setLanguage] = useState(LANGUAGES_OF_WEBSITE[0]);
    const [anchorEl, setAnchorEl] = useState(null);

    const classesDropDown = useDropDownPopoverStyles({
        margin: '16px 0 0 -10px'
    });
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const changeLanguage = useCallback((e) => {
        setLanguage(e);
        setAnchorEl(null);
    }, [language]);

    const languagesLi = useMemo(() => LANGUAGES_OF_WEBSITE.map(e =>
        <li key={e.value} className={language.value === e.value ? 'active-language' : ''} onClick={() => changeLanguage(e)}>
            <img src={e.imgPath} alt="avatar"/>
            {e.title}
        </li>
    ), [language]);

    return (
        <>
            {props.page ? <span className="user-question">{props.page === 'register' ? 'Already an account?' : 'Not Account yet?'}</span> : null }
            <div className="language-wrap" data-icon-active={open}>
                <img alt="avatar" onClick={(event) => setAnchorEl(event.currentTarget)} src={language.imgPath}/>
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
                    <span className="icon-My-Account"></span>
                </a>
            </Link> : ''}
            <HeaderBtn />
        </>
    )
}
NotLogged.defaultProps = {
    page: '',
}
NotLogged.propTypes = {
    page: PropTypes.string,
};
export default NotLogged;
