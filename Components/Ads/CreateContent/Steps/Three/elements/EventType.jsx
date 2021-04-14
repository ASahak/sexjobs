import React, {useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import UseStyles from './styles';

const EventType = React.forwardRef((props, ref) => {
    const [eventType, setEventType] = useState(null);
    const styles = UseStyles({}, {link: true});

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(eventType);
        }

    }));

    return (
        <div className={styles['event-type-wrapper']}>
            <h4>
                Event Type
            </h4>
            <div className="event-type-section">
                <ul>
                    {GLOBAL_CONSTANTS.event_types.map(event => <Input
                        key={event.value}
                        theme="dark"
                        events={['change']}
                        onChange={(evt) => setEventType(evt.target.id)}
                        type="radio"
                        name="event_type"
                        label={{title: event.title, color: '#fff', forId: 'event_type_' + event.value}}
                        margin={[8, 0, 8]}
                    />)}
                </ul>
            </div>
        </div>
    )
})
EventType.propTypes = {}
export default React.memo(EventType);