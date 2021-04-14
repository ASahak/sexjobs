import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Collapse} from 'reactstrap';
import {Avatar} from 'Components/Shared/UI';
import {GLOBAL_CONSTANTS} from 'utils/constants';

const _advertisers = [
    {
        title: 'Nikita',
        gender: 'female',
        age: 34,
        weight: 65,
        avatarPath: '/images/profileAvatar.jpg',
        isOpen: false,
        id: 1,
    }, {
        id: 2,
        title: 'Mibe',
        gender: 'male',
        age: 34,
        weight: 65,
        avatarPath: '',
        isOpen: false,
    }
]
const Advertisers = (_props) => {
    const [advertisers, setAdvertisers] = useState(_advertisers);
    const styles = UseStyles({}, {link: true});

    const toggleAccordion = useCallback((adv) => {
        adv.isOpen = !adv.isOpen;
        const list = [...advertisers];
        setAdvertisers(list)
    }, [advertisers])

    const findGender = useCallback((val) => {
        return GLOBAL_CONSTANTS.genders.find(e => e.value === val)
    }, [advertisers]);

    return (<div>
        {_advertisers.map(advertiser => <div key={advertiser.id} className={styles['advertiser-container']}>
            <div className={styles['advertiser-header']} onClick={() => toggleAccordion(advertiser)}>
                <div>
                    <Avatar avatarSrc={advertiser.avatarPath} name={advertiser.title} radius={'50%'} width={30} height={30} />
                    <p>{advertiser.title}</p>
                </div>
                <span className={`icon-Accordion-${!advertiser.isOpen ? 'Open' : 'Close'}`}></span>
            </div>
            <Collapse isOpen={advertiser.isOpen}>
                <div className={styles['advertiser-body']}>
                    <span className="icon-Edit"></span>
                    <ul>
                        <li>
                            <span>Gender:</span>
                            <span>{findGender(advertiser.gender)?.title || '-'}</span>
                        </li>
                        <li>
                            <span>Age:</span>
                            <span>{advertiser.age || '-'}</span>
                        </li>
                        <li>
                            <span>Build:</span>
                            <span>{advertiser.build || '-'}</span>
                        </li>
                        <li>
                            <span>Hair Color:</span>
                            <span>{advertiser.hair_color || '-'}</span>
                        </li>
                        <li>
                            <span>Nationality:</span>
                            <span>{advertiser.nationality || '-'}</span>
                        </li>
                        <li>
                            <span>Height:</span>
                            <span>{advertiser.height || '-'}</span>
                        </li>
                        <li>
                            <span>Weight:</span>
                            <span>{advertiser.weight || '-'}</span>
                        </li>
                        <li>
                            <span>Cup Size:</span>
                            <span>{advertiser.cup_size || '-'}</span>
                        </li>
                    </ul>
                </div>
            </Collapse>
        </div>)}
    </div>)
}
Advertisers.propTypes = {};
export default Advertisers;