import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import Link from 'next/link';
import {Avatar} from 'Components/Shared/UI';
import {formatDistanceStrict} from 'date-fns';

const CategoryBadge = (props) => {
    const {data: {adPromotion, imageSrc, sticker, link, title, gender, description, labels, bumpDate, search, location}} = props;
    const styles = UseStyles({}, {link: true});

    const getPromotion = useMemo(() => {
        return adPromotion ? (<div className="promotion-icon">
            {adPromotion === 'silver' ? <img src="/images/icons/silver_icon.svg" alt="gold"/> : adPromotion === 'gold' ? <img src="/images/icons/gold_icon.svg" alt="gold"/> : ''}
        </div>) : null;
    }, [adPromotion]);

    const getSticker = useMemo(() => {
        return sticker ? (<span className={`sticker__badge sticker__badge--${adPromotion}`}>
            {sticker}
        </span>) : null;
    }, [sticker, adPromotion]);

    const getGenderType = useMemo(() => {
        return gender ? (<p className="gender-type__block">
            <img src={'/images/icons/' + gender.type + '.svg'} alt="gender-icon"/>
            {gender.advertiser}
        </p>) : null;
    }, [gender]);

    const getLabels = useMemo(() => {
        return labels?.length ? <p className="labels__block">
            {labels.map(l => <span key={l}>{l}</span>)}
        </p> : ''
    }, [labels])

    const searchKey = useMemo(() => {
        return search ? <p className="search-type__block">
            <span className="icon-Advertenties"></span>
            {search}
        </p> : ''
    }, [search])

    return (
        <Link href={link}>
            <a className={`${styles['badge__block']}`}>
                <div className="image-wrapper">
                    {getPromotion}
                    <Avatar
                        className="cover-photo"
                        avatarSrc={imageSrc}
                        defaultSrc={'/images/notFound.png'}
                        height={200}
                        width={200}
                        name={title}
                        radius={0}/>
                </div>
                <div className={styles['details__block']}>
                    <div>
                        <h4 className="title-content">
                            <b>
                                {title}&nbsp;
                            </b>
                            {getSticker}
                        </h4>
                        {getGenderType}
                        {searchKey}
                        <div className="details__block-activation">
                            <span className="icon-Time"></span>
                            {formatDistanceStrict(
                                new Date(bumpDate),
                                new Date(),
                                {
                                    includeSeconds: true,
                                },
                            )}
                            <br/>
                            &nbsp;ago
                        </div>
                        <div className="details__block-location">
                            <span className="icon-Locatie"></span>
                            {location}
                        </div>
                        <p className="description__block">{description}</p>
                    </div>
                    {getLabels}
                </div>
            </a>
        </Link>
    )
}
CategoryBadge.propTypes = {
    data: PropTypes.object.isRequired,
};
export default React.memo(CategoryBadge);