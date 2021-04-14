import React from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Image} from 'Components/Shared/UI';
import Link from 'next/link';
import ImageSliderBadge from 'Components/Plugins/Sliders/ImageSliderBadge';

const PersonalBadge = (props) => {
    const {data: {imageSrc, link, title, itemsCount, begin, category, location}, type} = props;
    const styles = UseStyles({}, {link: true});
    const isSliderImage = imageSrc.constructor.name === 'Array';

    return (
        <Link href={link}>
            <a className={`${styles['personal-badge-wrapper']} ${props.type === 'personal' ? 'with-shadow' : ''}`}>
                <div className="image-wrapper">
                    {isSliderImage ? <ImageSliderBadge src={imageSrc} /> : <Image src={imageSrc} defaultSrc={'/images/notFound.png'} />}
                </div>
                <div className='bottom-data'>
                    {type === 'category' ? <>
                        <h4>{title}</h4>
                        <p>
                            <span className="icon-Advertenties"></span>
                            {itemsCount}
                        </p>
                    </>: <>
                        <div className="title-info">
                            <h4>{title}</h4>
                            <p>{begin}</p>
                        </div>
                        <div className="location-info">
                            <p>
                                <span className="icon-Advertenties"></span>
                                {category}
                            </p>
                            <p>
                                <span className="icon-location2"></span>
                                {location}
                            </p>
                        </div>
                    </>}
                </div>
            </a>
        </Link>
    )
}
PersonalBadge.propTypes = {
    type: PropTypes.oneOf(['category', 'personal']).isRequired,
    data: PropTypes.object.isRequired,
}
export default React.memo(PersonalBadge);
