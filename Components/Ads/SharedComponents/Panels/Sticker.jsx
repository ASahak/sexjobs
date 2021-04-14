import React, {useImperativeHandle, useState} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'Components/Shared/UI';
import UseStyles from './styles';
import Form from './elements/Form';

const Sticker = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});

    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState(null);

    useImperativeHandle(ref, () => ({

        getData() {
            // return Promise.resolve(formData);
        }

    }));

    return (
        <div>
            <div className={`${styles['panel-section']} ${isChecked ? 'checked-section' : ''}`}>
                <div className={styles['panel-section_title']}>
                    <Input
                        className="like-title-of_section"
                        theme="dark"
                        label={{title: 'Sticker', color: '#fff', forId: 'sticker-extra'}}
                        type="checkbox"
                        events={['change']}
                        onChange={evt => setIsChecked(evt.target.checked)}
                        margin={[8, 0, 8]}
                    />
                    {props.perDay ? <div className={styles['panel-section_title--paid-value']}>
                        <p>€ {props.perDay}</p>
                        <p>per day</p>
                    </div> : ''}
                </div>
                <div className={styles['panel-section_body']}>
                    {isChecked ? <>
                        <div className="sticker-wrapper_pro">
                            <span>Example</span>
                            <Input
                                label={{title: 'Sticker label', color: '#fff'}}
                                type="text"
                                events={['change']}
                                fullWidth={true}
                                placeholder="Write a catchy text for your sticker"
                                onChange={evt => setFormData(prevState => ({
                                    ...prevState,
                                    stickerLabel: evt.target.value,
                                }))}
                                margin={[0, 0, 16]}
                            />
                        </div>
                        <Form emitInputChanges={(v) => setFormData(v)}/>
                        <div className={styles['total_footer']}>
                            <h4>Total</h4>
                            <span>€ 2.85</span>
                        </div> </> :
                        <ul className="list-of-checked">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                            </li>
                            <li>
                                Accusamus ad aliquam commodi cumque delectus doloremque dolorum ea exercitationem facilis fugiat iste laborum maxime molestiae non quae ratione sed sequi.
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
})
Sticker.propTypes = {
    perDay: PropTypes.number,
};
export default React.memo(Sticker);