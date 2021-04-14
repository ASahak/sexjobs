import React, {useState, useImperativeHandle, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Switch, Input} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import UseStyles from './styles';

const TypeOfLocation = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});

    const [locations, setLocations] = useState([]);
    const [isLocation, setIsLocation] = useState(false);

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(locations);
        }

    }));

    const toggleLoc = useCallback((checked, item) => {
        setLocations([...locations.concat(item).filter(e => checked ? e : e !== item)])
    }, [locations])

    return (
        <div className={styles['type-of-location-wrapper']}>
            <h4>
                Type of location
                <p>
                    <Switch
                        onChange={(v) => setIsLocation(v.target.checked)}
                        checked={isLocation}
                        color="default"
                        inputProps={{}}
                    />
                </p>
            </h4>
            <p>Vul hier in op welke voor plek(ken) je wil afspreken</p>
            {isLocation ? <div className="type-of-location-section">
                <ul>
                    {GLOBAL_CONSTANTS.type_of_locations.map(loc => <Input
                        key={loc.value}
                        onChange={(evt) => toggleLoc(evt.target.checked, loc.value)}
                        events={['change']}
                        theme="dark"
                        type="checkbox"
                        margin={[15, 0, 15, 0]}
                        label={{title: loc.title, color: '#fff', forId: 'for-id-day_' + loc.value}}
                    />)}
                </ul>
            </div> : ''}
        </div>
    )
})
TypeOfLocation.propTypes = {}
export default React.memo(TypeOfLocation);