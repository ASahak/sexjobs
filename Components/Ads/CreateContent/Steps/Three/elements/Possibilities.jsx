import React, {useState, useImperativeHandle, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Switch, Input} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import UseStyles from './styles';

const Possibilities = React.forwardRef((props, ref) => {
    const [possibilities, setPossibilities] = useState([]);
    const [isPossibilities, setIsPossibilities] = useState(false);
    const styles = UseStyles({}, {link: true});

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(possibilities);
        }

    }));

    const togglePos = useCallback((checked, item) => {
        setPossibilities([...possibilities.concat(item).filter(e => checked ? e : e !== item)])
    }, [possibilities])

    return (
        <div className={styles['possibilities-wrapper']}>
            <h4>
                Possibilities
                <p>
                    <Switch
                        onChange={(v) => setIsPossibilities(v.target.checked)}
                        checked={isPossibilities}
                        color="default"
                        inputProps={{}}
                    />
                </p>
            </h4>
            <p>Vul hier in op welke voor plek(ken) je wil afspreken</p>
            {isPossibilities ? <div className="possibilities-section">
                <ul>
                    {GLOBAL_CONSTANTS.possibilities.map(loc => <Input
                        key={loc.value}
                        onChange={(evt) => togglePos(evt.target.checked, loc.value)}
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
Possibilities.propTypes = {}
export default React.memo(Possibilities);