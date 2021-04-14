import {MediaQuery, Shadow, SubTitleInsideMainContent} from './mixins';
import variables from "./variables";

const FlexInputsWrapper = {
    alignItems: 'baseline',
    display: 'flex',
    ...MediaQuery.down({
        '&.mobile-full-inputs': {
            flexDirection: 'column',
            '& > div': {
                width: '100% !important',
                marginRight: '0 !important',
                marginLeft: '0 !important',
            }
        }
    }).sm,
}

const CheckedIconBefore = {
    '&::before': {
        content: '""',
        top: '3px',
        left: '4px',
        width: '6px',
        height: '12px',
        border: 'solid',
        borderWidth: '0 2px 2px 0',
        '-webkit-transform': 'rotate(45deg)',
        '-ms-transform': 'rotate(45deg)',
        transform: 'rotate(45deg)',
        position: 'absolute',
        zIndex: '2',
    }
}

const MainContent = {
    padding: '0px',
    marginBottom: '25px',
    ...MediaQuery.up({
        '&:not(.no-background)': {
            padding: '20px',
            backgroundColor: variables.$blue_30,
            ...Shadow('0 3px 6px 0 rgba(0,0,0,0.15)'),
        }
    }).sm,
}

const AddListIconAddExtend = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    '& .input-field-wrapper': {
        width: 'calc(100% - 60px)',
        position: 'relative',
        '& > p': {
            position: 'absolute',
            top: 0,
            right: 0,
            ...SubTitleInsideMainContent({
                fontWeight: '600',
            })
        }
    },
    '& .icon-Add': {
        width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: variables.$primaryColor,
            borderRadius: '50%',
            color: '#fff',
            cursor: 'pointer',
            marginTop: '26px',
            '&[aria-disabled=\"true\"]': {
            backgroundColor: '#375e90',
                pointerEvents: 'none',
        }
    }
};

const IconActiveState = {
    position: 'relative',
    '&::after': {
        position: 'absolute',
        content: '""',
        width: 'calc(100% + 15px)',
        height: 'calc(100% + 15px)',
        background: variables.$iconActiveBG,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        borderRadius: '50%',
        zIndex: '-1',
    },
    '&:hover::after': {
        opacity: '0.3',
    }
}

const StickerBadgeSilver = {
    backgroundColor: '#0A2955',
    color: '#FCF200',
    margin: '0px 3px',
    fontSize: '12px',
    padding: '2px 7px',
    textTransform: 'uppercase',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
}

const StickerBadgeGold = {
    backgroundColor: '#CD3A3A',
    color: '#FCF200',
    margin: '0px 3px',
    fontSize: '12px',
    padding: '2px 7px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
}

export {
    FlexInputsWrapper,
    CheckedIconBefore,
    MainContent,
    AddListIconAddExtend,
    StickerBadgeSilver,
    StickerBadgeGold,
    IconActiveState,
}