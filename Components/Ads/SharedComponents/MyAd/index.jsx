import React, {useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Input, Image, Button, Avatar, SimpleDialog} from 'Components/Shared/UI';
import {STATUSES} from 'utils/constants';
import {Collapse} from 'reactstrap';
import Link from 'next/link';
import {format} from 'date-fns';
import usePrevious from 'hooks/use-previous-state';
import Popover from "@material-ui/core/Popover";
import {useDropDownPopoverStyles} from 'Components/Shared/UI/makeStylesUI';
import {useRouter} from 'next/router';

const MyAds = (props) => {
    const router = useRouter();
    const styles = UseStyles({}, {link: true});
    const {
        title,
        category,
        avatarSrc,
        position,
        status,
        accountType,
        advertisers,
        viewed,
        installed,
        activeAds,
        labels} = props.data;
    const [anchorEl, setAnchorEl] = useState(null);
    const [detailsToggle, setDetailsToggle] = useState(false);
    const [activeAdsToggle, setActiveAdsToggle] = useState(false);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(null);
    const classesDropDown = useDropDownPopoverStyles({
        margin: '10px 0 0 0px'
    });

    const openPopover = Boolean(anchorEl);
    const id = openPopover ? 'my-ad-popover' : undefined;

    const prevTitleConfirmDialog = usePrevious(confirmDialogOpen);

    const cancelAd = () => {
        setConfirmDialogOpen(null);
    }

    const _activeAds = useMemo(() => {
        if (!activeAds) return null;
        return activeAds.reduce((acc, item) => {
            acc[item.type] = [...(acc[item.type] || [])].concat(item)
            return acc;
        }, {})
    }, [activeAds])

    const labelBadges = useCallback(() => {
        return (
            <div>
                {labels.map(label => <span key={label}>{label}</span>)}
            </div>
        )
    }, [labels]);

    const advertisersList = useCallback(() => {
        return advertisers.map(user => <li key={user.email}>
            <Avatar
                width={40}
                height={40}
                avatarSrc={user.avatarSrc}
                name={user.title}
            />
            <div className="advertiser-details_ad">
                <h4>{user.title}</h4>
                <p>{user.email === props.loggedUser.email ? 'you' : user.email}</p>
            </div>
        </li>)
    }, [advertisers, props.loggedUser]);

    const listActiveAds = useCallback((prop, title) => {
        return _activeAds[prop].map((item, index) => <li key={item.type + index}>
            {format(item.start, 'EE dd MMM, hh:MM')} - {format(item.end, 'EE dd MMM, hh:MM')}
            <span className="icon-Delete" onClick={() => setConfirmDialogOpen(title)}></span>
        </li>)
    }, [_activeAds, activeAds])

    const stickers = useCallback(() => {
        const _stickers = (_activeAds.sticker || []).reduce((acc, item) => {
            (item.stickers || []).forEach(e => {
                if (acc.indexOf(e) === -1) acc.push(e)
            })
            return acc;
        }, [])
        return _stickers.map(el => <span className="sticker-badge" key={el}>{el}</span>)
    }, [_activeAds, activeAds]);

    return (
        <div className={styles['ad-container_with-checkbox']}>
            {props.mobileSelect ? <div
                className={`mobile-checkbox_ad ${props.checked ? 'selected-mobile_ad' : ''}`}
                onClick={() => props.toggleChecked(!props.checked, props.data.id)}>
                    <span className="icon-Check-alt"></span>
            </div> : <Input
                className="checkbox-wrapper-for_DT"
                key={props.checked}
                attr={{...(props.checked && {checked: true})}}
                events={['change']}
                onChange={(evt) => {
                    props.toggleChecked(evt.target.checked, props.data.id)
                }}
                type="checkbox"
            />}
            <div className={styles['ad-container_ad']}>
                <div className={styles['ad-top_panel']}>
                    <div className="position-top_ad">
                        <p>
                            Positie:
                            {position}
                        </p>
                        <p>
                            {STATUSES[status].text}
                            <span className="status-badge_ad" style={{backgroundColor: STATUSES[status].color}}></span>
                        </p>
                    </div>
                    <div className="left-side_ad">
                        <div className="image-wrapper_ad">
                            <div className="image-parent_ad">
                                <Image defaultSrc="/images/icons/upload.png" src={avatarSrc}/>
                            </div>
                            <div className="title-wrapper_ad">
                                <h4>{title}</h4>
                                <p>{category}</p>
                            </div>
                        </div>
                        <div className="details-container_ad">
                            <p onClick={() => setDetailsToggle(!detailsToggle)}>
                                {detailsToggle ? 'Hide Details' : 'Show Details'}
                                <span className={`icon-Accordion-Open ${detailsToggle ? 'show-details_ad' : ''}`}></span>
                            </p>
                            <Collapse isOpen={detailsToggle}>
                                {accountType === 'company' ? <div className="advertisers_ad">
                                    <span>Van: </span>
                                    <ul>
                                        {advertisersList()}
                                    </ul>
                                </div> : ''}
                                <div className="labels-details_ad">
                                    <p>Label(s): </p>
                                    {labelBadges()}
                                </div>
                                <div className="status-details_ad">
                                    <p>Status: </p>
                                    <div>
                                        <span className="status-badge_ad" style={{backgroundColor: STATUSES[status].color}}></span>
                                        {STATUSES[status].text}
                                    </div>
                                </div>
                                <div className="position-details_ad">
                                    <p>Positie: </p>
                                    <span>{position}</span>
                                </div>
                                <div className="viewed-details_ad">
                                    <p>Bekeken: </p>
                                    <span>{viewed}</span>
                                </div>
                                <div className="date-details_ad">
                                    <p>Plaatsing: </p>
                                    <span>{installed}</span>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div className="actions-wrapper_ad">
                        <Button
                            onClick={(e) => setAnchorEl(e.currentTarget)}
                            icon={{direction: 'left', className: 'icon-Accordion-Open'}}
                            typeButton="default"
                            text={"Acties"}
                            fullWidth={true}
                            margin={[0, 0, 10, 0]}
                            size="sm"
                        />
                        <Button
                            size="sm"
                            onClick={() => router.push({
                                pathname: 'ads/edit/564654684'
                            })}
                            icon={{direction: 'left', className: 'icon-UpdatePlan-ad'}}
                            typeButton="default"
                            text={"Update"}
                            fullWidth={true}
                            margin={[0, 0, 10, 0]}
                        />
                        <Button
                            onClick={() => router.push({
                                pathname: 'ads/promote/564654684'
                            })}
                            size="sm"
                            icon={{direction: 'left', className: 'icon-Star'}}
                            typeButton="primary"
                            text={"Extra opvallen"}
                            fullWidth={true}
                            margin={[0, 0, 10, 0]}
                        />
                    </div>
                </div>
                <div className={styles['ad-active-ads_panel']}>
                    {_activeAds ? <div className="active-ads_container">
                        <div className={`panel-header_active-ads ${activeAdsToggle ? 'show-more_ads' : ''}`} onClick={() => setActiveAdsToggle(!activeAdsToggle)}>
                            Actieve producten ({Object.keys(_activeAds).length})
                            <span className="icon-Accordion-Open"></span>
                        </div>
                        <Collapse isOpen={activeAdsToggle}>
                            <div className="active-ads-list">
                                {_activeAds.hasOwnProperty('gold') ? <div>
                                    <h4>Golden advertisements</h4>
                                    <ul>
                                        {listActiveAds('gold', 'Gold')}
                                    </ul>
                                </div> : ''}
                                {_activeAds.hasOwnProperty('silver') ? <div>
                                    <h4>Silver advertisements</h4>
                                    <ul>
                                        {listActiveAds('silver', 'Silver')}
                                    </ul>
                                </div> : ''}
                                {_activeAds.hasOwnProperty('sticker') ? <div>
                                    <h4>Opvalsticker
                                        <p>
                                            {stickers()}
                                        </p>
                                        <span className="icon-Edit"></span>
                                    </h4>
                                    <ul>
                                        {listActiveAds('sticker', 'Opvalsticker')}
                                    </ul>
                                </div> : ''}
                            </div>
                        </Collapse>
                        <SimpleDialog
                            onClose={() => setConfirmDialogOpen(null)}
                            open={!!confirmDialogOpen}
                            title={`Cancel ${confirmDialogOpen || prevTitleConfirmDialog} Ad?`}
                            onOk={() => cancelAd()}
                            actions={{
                                ok: 'Confirm'
                            }}
                        >
                            <div className={styles['confirm-cancel-dialog_ad']}>
                                <p>Are your sure you want to cancel the following {confirmDialogOpen || prevTitleConfirmDialog} ad:</p>
                                <p>5 days left</p>
                                <p>When you cancel this {confirmDialogOpen || prevTitleConfirmDialog} advertisement you will receive 35 credits back</p>
                            </div>
                        </SimpleDialog>
                    </div> : ''}
                </div>
            </div>
            <Popover
                id={id}
                classes={classesDropDown}
                open={openPopover}
                anchorEl={anchorEl}
                PaperProps={{
                    className: 'actions-dropdown-ad',
                    style: {
                        width: 150,
                    }
                }}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <div>
                    {/*todo this is hard code*/}
                    <Link href="ads/view/564654684">
                        <a>View</a>
                    </Link>
                    <a>Edit</a>
                    <a>Block</a>
                </div>
            </Popover>
        </div>
    )
}
MyAds.defaultProps = {
    data: {},
    checked: false,
    mobileSelect: false,
    loggedUser: {},
    toggleChecked: () => void(0),
}
MyAds.propTypes = {
    data: PropTypes.object,
    loggedUser: PropTypes.object,
    checked: PropTypes.bool,
    mobileSelect: PropTypes.bool,
    toggleChecked: PropTypes.func,
}
export default React.memo(MyAds);