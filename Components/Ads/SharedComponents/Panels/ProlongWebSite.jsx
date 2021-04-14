import React, {useImperativeHandle, useState} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'Components/Shared/UI';
import UseStyles from './styles';
import Form from './elements/Form';

const ProlongWebSite = React.forwardRef((props, ref) => {
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
                        label={{title: props.label, color: '#fff', forId: 'prolong-website-extra'}}
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
                            <Form
                                emitInputChanges={(v) => setFormData(v)}
                                description={props.description || ''}
                                withoutStarting={!props.withStartingTime}/>
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
ProlongWebSite.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    withStartingTime: PropTypes.bool,
    perDay: PropTypes.number,
};
export default React.memo(ProlongWebSite);