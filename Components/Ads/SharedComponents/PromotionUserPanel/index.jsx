import React from 'react';
import UseStyles from './styles';
import {Avatar} from 'Components/Shared/UI';

const PromotionUserPanel = () => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['ad-details-list']}>
            <div className={styles['ad-details-panel']}>
                <Avatar avatarSrc={'/images/profileAvatar.jpg'} radius={'4px'} width={50} height={50} />
                <div>
                    <h4>Real Playgirl - B(I) ond Girl</h4>
                    <p>Dames van pleizer</p>
                </div>
            </div>
        </div>
    )
}
export default PromotionUserPanel;