import React, {useImperativeHandle, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'Components/Shared/UI';
import UseStyles from './styles';
import {useRouter} from 'next/router';

const Update = React.forwardRef((props, ref) => {
    const styles = UseStyles({}, {link: true});
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();

    useImperativeHandle(ref, () => ({

        getData() {
            // return Promise.resolve('');
        }

    }));

    return (
        <div>
            <div className={`${styles['panel-section']} ${isChecked ? 'checked-section' : ''}`}>
                <div className={styles['panel-section_title']}>
                    <Input
                        className="like-title-of_section"
                        theme="dark"
                        label={{title: 'Update', color: '#fff', forId: 'update-extra'}}
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
                            <p>This is a one-off update. Reocurring
                            updates can be planned in the update
                            planner</p>
                            <Button
                                onClick={() => router.push({
                                    pathname: '/my-sexjobs/ads/promote/update/564654684'
                                })}
                                mobileFullWidth={true}
                                margin={[15, 0, 16]}
                                icon={{direction: 'left', className: 'icon-Event'}}
                                text="Plan updates"
                                typeButton="primary"
                                width={250}
                            />
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
Update.propTypes = {
    perDay: PropTypes.number,
};
export default React.memo(Update);