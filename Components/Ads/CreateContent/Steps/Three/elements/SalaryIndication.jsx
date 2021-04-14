import React, {useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Input, Select, Switch} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';
import UseStyles from './styles';

const SalaryIndication = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});
    const [isSalary, setIsSalary] = useState(false);
    const [salaryIndication, setSalaryIndication] = useState({
        min: null,
        max: null,
        interval: null,
    });

    useImperativeHandle(ref, () => ({

        getFormData() {
            return Promise.resolve(salaryIndication);
        }

    }));

    const changeSalary = (prop, val) => {
        setSalaryIndication(prevState => ({
            ...prevState,
            [prop]: val,
        }))
    }

    return (
        <div className={styles['salary-indication-wrapper']}>
            <h4>
                Salary Indication
                <p>
                    <Switch
                        onChange={(v) => setIsSalary(v.target.checked)}
                        checked={isSalary}
                        color="default"
                        inputProps={{}}
                    />
                </p>
            </h4>
            {isSalary ? <div className="salary-indication-section">
                <div>
                    <Input
                        icon={{direction: 'right', template: <i className="input-icon">€</i>}}
                        type="number"
                        name="min_salary"
                        value={salaryIndication.min}
                        width={'50%'}
                        margin={[0, 8, 0, 0]}
                        events={['change']}
                        onChange={(evt) => changeSalary('min', evt.target.value)}
                        placeholder="Minimum"
                    />
                    <Input
                        icon={{direction: 'right', template: <i className="input-icon">€</i>}}
                        type="number"
                        name="max_salary"
                        value={salaryIndication.max}
                        width={'50%'}
                        margin={[0, 0, 0, 8]}
                        events={['change']}
                        onChange={(evt) => changeSalary('max', evt.target.value)}
                        placeholder="Maximum"
                    />
                </div>
                <Select
                    onChange={v => changeSalary('interval', v.target.value)}
                    margin={[16, 0, 16, 0]}
                    value={salaryIndication.interval}
                    options={GLOBAL_CONSTANTS.salary_indication}
                    rules={{}}
                    placeholder="Salary period"
                    size={'md'}
                    fullWidth={true}
                />
            </div> : ''}
        </div>
    )
})

SalaryIndication.propTypes = {}
export default React.memo(SalaryIndication);