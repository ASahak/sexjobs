import React, {useState, useImperativeHandle, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import UseStyles from './styles';

const WorkingHours = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});

    const [workingHours, setWorkingHours] = useState([]);

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(workingHours);
        }

    }));

    const toggleWork = useCallback((checked, item) => {
        setWorkingHours([...workingHours.concat(item).filter(e => checked ? e : e !== item)])
    }, [workingHours])

    return (
        <div className={styles['working-hours-wrapper']}>
            <h4>
                Working Hours
            </h4>
            <ul>
                {GLOBAL_CONSTANTS.working_hours.map(work => <li key={work.value}>
                    <Input
                        theme="dark"
                        events={['change']}
                        onChange={(evt) => toggleWork(evt.target.checked, work)}
                        type="checkbox"
                        label={{title: work.title, color: '#fff', forId: 'working_hours_' + work.value}}
                        margin={[8, 0, 8]}
                    />
                </li>)}
            </ul>
        </div>
    )
})
WorkingHours.propTypes = {}
export default React.memo(WorkingHours);