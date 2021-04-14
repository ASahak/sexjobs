import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Input} from 'Components/Shared/UI';

const Settings = (_props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['settings-page__block']}>
            <p className="sub-title-content">You can receive notifications via e-mail and/or in your My Sexjobs environment. Here you can decide what you
                want to receive via which channel.</p>
            <div className={styles['section__block']}>
                <div className={styles['section-header__block']}>
                    <h4 className="title-content">My Advertisement</h4>
                    <div className={styles['section-header--actions__block']}>
                        <div>
                            <span className="icon-Notification"></span>
                            <span className="desc-text">E-MAIL</span>
                        </div>
                        <div>
                            <span className="icon-Message-_-Mail"></span>
                            <span className="desc-text">MY-SEXJOBS</span>
                        </div>
                    </div>
                </div>
                <div className={styles['section-body__block']}>
                    <div className={styles['section-body--item__block']}>
                        <div className="title-desc__side">
                            <h4 className="title-content">Title</h4>
                            <p className="sub-title-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet distinctio eos impedit nostrum numquam veritatis. Eius maxime odio quo sapiente similique! Ad magni modi omnis placeat sint veniam voluptas?</p>
                        </div>
                        <div className="actions__side">
                            <Input
                                theme="dark"
                                type="checkbox"
                                margin={[8, 0, 8]}
                            />
                            <Input
                                theme="dark"
                                type="checkbox"
                                margin={[8, 0, 8]}
                            />
                        </div>
                    </div>
                    <div className={styles['section-body--item__block']}>
                        <div className="title-desc__side">
                            <h4 className="title-content">Title</h4>
                            <p className="sub-title-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet distinctio eos impedit nostrum numquam veritatis. Eius maxime odio quo sapiente similique! Ad magni modi omnis placeat sint veniam voluptas?</p>
                        </div>
                        <div className="actions__side">
                            <Input
                                theme="dark"
                                type="checkbox"
                                margin={[8, 0, 8]}
                            />
                            <Input
                                theme="dark"
                                type="checkbox"
                                margin={[8, 0, 8]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['section__block']}>
                <div className={styles['section-header__block']}>
                    <h4 className="title-content">Promotion</h4>
                    <div className={styles['section-header--actions__block']}>
                        <div>
                            <span className="icon-Notification"></span>
                            <span className="desc-text">E-MAIL</span>
                        </div>
                        <div>
                            <span className="icon-Message-_-Mail"></span>
                            <span className="desc-text">MY-SEXJOBS</span>
                        </div>
                    </div>
                </div>
                <div className={styles['section-body__block']}>
                    <div className={styles['section-body--item__block']}>
                        <div className="title-desc__side">
                            <h4 className="title-content">Title</h4>
                            <p className="sub-title-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet distinctio eos impedit nostrum numquam veritatis. Eius maxime odio quo sapiente similique! Ad magni modi omnis placeat sint veniam voluptas?</p>
                        </div>
                        <div className="actions__side">
                            <Input
                                theme="dark"
                                type="checkbox"
                                margin={[8, 0, 8]}
                            />
                            <Input
                                theme="dark"
                                type="checkbox"
                                margin={[8, 0, 8]}
                            />
                        </div>
                    </div>
                    <div className={styles['section-body--item__block']}>
                        <div className="title-desc__side">
                            <h4 className="title-content">Title</h4>
                            <p className="sub-title-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet distinctio eos impedit nostrum numquam veritatis. Eius maxime odio quo sapiente similique! Ad magni modi omnis placeat sint veniam voluptas?</p>
                        </div>
                        <div className="actions__side">
                            <Input
                                theme="dark"
                                type="checkbox"
                                margin={[8, 0, 8]}
                            />
                            <Input
                                theme="dark"
                                type="checkbox"
                                margin={[8, 0, 8]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Settings.propTypes = {};
export default Settings;