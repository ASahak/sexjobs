import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import MenuList from 'dummyData/MySJMenuList';
import ActiveLink from 'hoc/ActiveLink';

const MySJMenu = (props) => {
    const styles = UseStyles({}, {link: true});
    const list = MenuList.map(list => <li key={list.title} onClick={(e) => props.handleClick(e)}>
        <ActiveLink activeClassName="active-link-menu" href={list.link} as={list.link} exact={list.exact}>
            <a>
                <span className={list.icon}></span>
                {list.title}
            </a>
        </ActiveLink>
    </li>)

    return (
        <div className={`${styles['main-wrapper-sj-menu']} external-binding-menu`} ref={props.refBind}>
            {!props.dialog && <div className="sj-menu_title">
                <h3>Mijn Sexjobs</h3>
            </div>}
            <div className={`sj-main-list ${props.dialog ? 'side-bar-dialog' : 'side-bar'}`}>
                <h4>{props.userName}</h4>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    )
}
MySJMenu.defaultProps = {
    dialog: true,
    userName: 'Name',
    handleClick: () => void(0),
};
MySJMenu.propTypes = {
    refBind: PropTypes.object,
    userName: PropTypes.string,
    dialog: PropTypes.bool,
    handleClick: PropTypes.func,
}
export default MySJMenu;