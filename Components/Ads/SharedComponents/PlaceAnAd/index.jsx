import React from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from 'Components/Shared/UI';
import UseStyles from './styles';
import {useRouter} from 'next/router';

const PlaceAnAd = (props) => {
    const router = useRouter();
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['place-an-ad']}>
            <div>
                {props.ifThereAreAds ? <Input
                    key={props.isChecked.isFullSelected}
                    attr={{...(props.isChecked.isFullSelected && {checked: true})}}
                    halfSelected={props.isChecked.halfPart}
                    events={['change']}
                    onChange={(evt) => {
                        props.toggleAll(evt.target.checked)
                    }}
                    type="checkbox"
                /> : ''}
                <Button
                    disabled={(!props.isChecked.halfPart && !props.isChecked.isFullSelected)}
                    icon={{direction: 'right', className: 'icon-pencil'}}
                    text="Geselecteerde items..."
                    typeButton="primary"
                />
            </div>
            <Button
                className="place-an-ad_btn"
                icon={{direction: 'left', className: 'icon-Add'}}
                text="Plaats een advertentie"
                typeButton="cta"
                onClick={() => router.push({
                    pathname: '/my-sexjobs/ads/create',
                })}
            />
        </div>
    )
}
PlaceAnAd.defaultProps = {
    isChecked: {},
}
PlaceAnAd.propTypes = {
    toggleAll: PropTypes.func.isRequired,
    ifThereAreAds: PropTypes.bool,
    isChecked: PropTypes.object,
}
export default React.memo(PlaceAnAd);