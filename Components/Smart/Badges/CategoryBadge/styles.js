import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow, MediaQuery} from 'static/styles/jss/abstracts/mixins';
import {StickerBadgeSilver, StickerBadgeGold} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    'badge__block': {
        borderRadius: '3px',
        display: 'flex',
        backgroundColor: variables.$filters.$headerBG,
        ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        marginBottom: '16px',
        '& .image-wrapper': {
            position: 'relative',
            '& .cover-photo': {
                borderRadius: '3px 0 0 3px',
                ...MediaQuery.down({
                    width: '110px',
                    height: '130px',
                }).xss,
                ...MediaQuery.between({
                    width: '170px',
                    height: '180px',
                }).xss_xs,
            },
            '& .promotion-icon': {
                zIndex: 2,
                position: 'absolute',
                width: '20px',
                height: '20px',
                top: '0',
                display: 'flex',
            }
        },
    },
    'details__block': {
        padding: '9px 210px 9px 20px',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...MediaQuery.down({
            paddingRight: '20px'
        }).lg,
        ...MediaQuery.down({
            padding: '5px 10px 5px 10px',
            fontSize: '11px',
        }).xs,
        '& .details__block-activation, & .details__block-location': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            fontSize: '13px',
            textAlign: 'center',
            color: variables.$helperTextColor,
            borderLeft: '1px solid ' + variables.$barColor,
            position: 'absolute',
            top: '12px',
            right: 0,
            height: '90%',
            ...MediaQuery.down({
                fontSize: '11px',
            }).xss,
            '& > span': {
                marginBottom: '7px',
                '&.icon-Time': {
                    marginTop: '20px',
                },
                ...MediaQuery.down({
                    marginBottom: '3px',
                }).xss,
            },
            ...MediaQuery.down({
                position: 'initial',
                borderLeft: 'none',
                height: 'auto',
                flexDirection: 'revert',
                alignItems: 'baseline',
                width: 'auto',
                textAlign: 'left',
                justifyContent: 'end',
                '& br': {
                    display: 'none',
                },
                '& .icon-Time, & .icon-Locatie': {
                    marginTop: '0 !important',
                    marginRight: '10px',
                }
            }).lg,
        },
        '& .details__block-activation': {
            right: '100px',
            ...MediaQuery.down({
                display: 'none',
            }).xss,
        },
        '& .title-content': {
            marginBottom: '7px',
            display: 'grid',
            justifyContent: 'flex-start',
            gridTemplateColumns: 'auto auto',
            ...MediaQuery.down({
                fontSize: '13px',
            }).xss,
            '& > b': {
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                width: '100%',
            },
            '& .sticker__badge': {
                '&.sticker__badge--gold': {
                    ...StickerBadgeGold,
                },
                '&.sticker__badge--silver': {
                    ...StickerBadgeSilver,
                },
            },
            ...MediaQuery.down({
                gap: '7px',
                '& > b': {
                    gridColumn: '1 / -1',
                },
                '& .sticker__badge': {
                    margin: '0 !important',
                }
            }).lg,
            ...MediaQuery.down({
                gap: '2px',
                fontSize: '13px',
                marginBottom: '5px',
            }).xss,
        },
        '& .gender-type__block, & .search-type__block': {
            marginBottom: '5px',
            color: variables.$helperTextColor,
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            ...MediaQuery.down({
                marginBottom: '3px',
                fontSize: '11px',
            }).xss,
            '& img, & span': {
                maxWidth: '13px',
                marginRight: '10px'
            }
        },
        '& .labels__block': {
            margin: 0,
            '& > span': {
                borderRadius: '2px',
                backgroundColor: '#094287',
                color: '#98A4B3',
                fontSize: '11px',
                padding: '2px 4px',
            }
        },
        '& .description__block': {
            ...MediaQuery.down({
                display: 'none',
            }).lg,
            color: variables.$helperTextColor,
            fontSize: '13px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical',
            marginBottom: '5px',
            ['@supports ( -moz-appearance:none )']: {
                whiteSpace: 'nowrap',
                height: '57px',
            },
        }
    }
})