import React, {useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import UseStyles from './styles';

const TypeOfEmployment = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});
    const [typeOfEmployment, setTypeOfEmployment] = useState(null);

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(typeOfEmployment);
        }

    }));

    return (
        <div className={styles['type-of-employment-wrapper']}>
            <h4>
                Type of Employment
            </h4>
            <ul>
                {GLOBAL_CONSTANTS.type_of_employment.map(emp => <li key={emp.value}>
                    <Input
                        theme="dark"
                        events={['change']}
                        onChange={(evt) => setTypeOfEmployment(evt.target.id)}
                        type="radio"
                        name="employment_type"
                        label={{title: emp.title, color: '#fff', forId: 'employment_type_' + emp.value}}
                        margin={[8, 0, 8]}
                    />
                </li>)}
            </ul>
        </div>
    )
})
TypeOfEmployment.propTypes = {}
export default React.memo(TypeOfEmployment);