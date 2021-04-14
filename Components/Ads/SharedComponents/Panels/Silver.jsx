import React, { useImperativeHandle, useState} from 'react';
import PropTypes from 'prop-types';
import { Input } from 'Components/Shared/UI';
import UseStyles from './styles';
import Form from './elements/Form';

const Silver = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});

    const [formData, setFormData] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

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
                        label={{title: 'Silver', color: '#fff', forId: 'silver-extra'}}
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
Silver.propTypes = {
    perDay: PropTypes.number,
};
export default React.memo(Silver);