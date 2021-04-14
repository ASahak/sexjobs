import React, {useCallback, useState} from 'react';
import UseStyles from './styles';
import PromotionUserPanel from 'Components/Ads/SharedComponents/PromotionUserPanel';
import {Button, Switch, TimePicker, Select} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import {Collapse} from 'reactstrap';

const _week = GLOBAL_CONSTANTS.week.map(e => ({...e, ...{
        isOpen: false,
        from: null,
        to: null,
        frequently: null,
    }}));
const frequently = [
    {title: '1x per hour', value: 1},
    {title: '2x per hour', value: 2},
    {title: '3x per hour', value: 3},
]
const UpdatePlan = () => {
    const [week, setWeek] = useState(_week);
    const styles = UseStyles({}, {link: true});

    const someOfTheDayIsChosen = useCallback(() => {
        return week.some(e => e.from && e.to && e.frequently);
    }, [week])

    const changeData = useCallback((day, prop, value) => {
        day[prop] = value;
        const _week = [...week];
        setWeek(_week)
    }, [week])

    return (
        <div className={styles['update-plan-container']}>
            <PromotionUserPanel />
            <div className={styles['update-plan-section']}>
                <h4>Omhoog plaatsen</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime possimus, quia? Commodi, dolores earum eos error esse expedita iure laudantium magni maxime natus perferendis sed suscipit tempore, veniam voluptas voluptate.</p>
                <div className={styles['switchers-wrapper']}>
                    {week.map(day => <div key={day.value}>
                        <div className={styles['switcher-line']}>
                            <p>{day.title}</p>
                            <Switch
                                onChange={(v) => changeData(day, 'isOpen', v.target.checked)}
                                color="default"
                                inputProps={{}}
                            />
                        </div>
                        <Collapse isOpen={day.isOpen}>
                            <div className={styles['switcher-collapse']}>
                                <TimePicker
                                    margin={[0, 8, 16, 0]}
                                    label={{title: 'Van', color: '#fff'}}
                                    change={v => changeData(day, 'from', v.value)}
                                    value={day.from}
                                    placeholder="hh:mm"
                                    width="30%"
                                    size="md"
                                    options={{start: '00:00', interval: 30, end: '24:00'}}
                                />
                                <TimePicker
                                    margin={[0, 8, 16, 8]}
                                    label={{title: 'Tot', color: '#fff'}}
                                    change={v => changeData(day, 'to', v.value)}
                                    value={day.to}
                                    placeholder="hh:mm"
                                    width="30%"
                                    size="md"
                                    options={{start: '00:00', interval: 30, end: '24:00'}}
                                />
                                <Select
                                    placeholder="? x per hour"
                                    label={{title: 'Frequentie', color: '#fff'}}
                                    onChange={v => changeData(day, 'frequently', v.target.value)}
                                    margin={[0, 0, 0, 8]}
                                    value={day.frequently}
                                    options={frequently}
                                    rules={{}}
                                    size={'md'}
                                    width={'60%'}
                                />
                            </div>
                        </Collapse>
                    </div>)}
                </div>

                <Button
                    disabled={!someOfTheDayIsChosen()}
                    icon={{direction: 'left', className: 'icon-Save'}}
                    text="Wijzigingen opslaan"
                    typeButton="primary"
                    width={250}
                    mobileFullWidth={true}
                    margin={[30, 0, 0, 0]}
                />
            </div>
        </div>
    )
}
export default UpdatePlan;