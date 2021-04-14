import React, {useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Select} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import UseStyles from './styles';

const TypeOfWork = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});
    const [typeOfWork, setTypeOfWork] = useState(null);

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(typeOfWork);
        }

    }));

    return (
        <div className={styles['type-of-work-wrapper']}>
            <h4>
                Type of work
            </h4>
            <Select
                onChange={v => setTypeOfWork(v.target.value)}
                margin={[0, 0, 16, 0]}
                value={typeOfWork}
                options={GLOBAL_CONSTANTS.type_of_works}
                rules={{}}
                placeholder="Select the type of your offer"
                size={'md'}
                name="type_of_work"
                fullWidth={true}
            />
        </div>
    )
})
TypeOfWork.propTypes = {}
export default React.memo(TypeOfWork);