import variables from '../abstracts/variables';
import {MediaQuery, Shadow, SubTitleInsideMainContent, TitleInsideMainContent} from '../abstracts/mixins';
import {CheckedIconBefore, FlexInputsWrapper, MainContent} from '../abstracts/extends';

const style = {
    '@global': {
        '.Toastify': {
            zIndex: 99999,
            ...MediaQuery.down({
                '& .Toastify__toast': {
                    borderRadius: '50px',
                    minHeight: '50px',
                    fontSize: '14px',
                    width: '90%',
                    margin: '0 auto 1rem',
                    textAlign: 'center',
                    opacity: .9,
                    '& .Toastify__close-button': {
                        display: 'none',
                    }
                },
            }).sm,
        },
        '.sticky-top.sticky-mobile': {
            ...MediaQuery.up({
                top: 'auto',
                zIndex: 'initial',
                position: 'initial',
            }).sm,
        },
        '.container': {
            maxWidth: '1320px',
        },
        'a': {
            textDecoration: 'none !important',
        },
        'body': {
            '@media (hover: none)': {
                paddingRight: '0px !important',
            }
        },
        'body, *': {
            margin: '0px',
            boxSizing: 'border-box',
            fontFamily: 'Arial',
        },
        'main': {
            flex: '1 0 auto',
            padding: '16px 8px',
        },
        '#__next': {
            backgroundColor: variables.$bodyColor,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        },
        '.combined-elements-shadow': {
            ...MediaQuery.down({
                ...Shadow('0 2px 4px 0 rgba(0,0,0,0.5)'),
                '& .with-mobile-shadow': {
                    ...Shadow('none !important'),
                },
            }).sm,
        },
        '[class^=\"col-\"]': {
            paddingRight: '8px',
            paddingLeft: '8px',
        },
        '.flex-btns': {
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
        },
        'ul.list-of-checked': {
            listStyleType: 'none',
            paddingLeft: '0',
            '& > li': {
                color: variables.$helperTextColor,
                paddingLeft: '20px',
                position: 'relative',
                fontSize: '13px',
                margin: '5px 0',
                ...CheckedIconBefore,
            }
        },
        '.form-flex-inputs-title': {
            ...TitleInsideMainContent({
                fontSize: '13px',
                marginBottom: '0px',
                paddingBottom: '7px',
            }),
        },
        '.like-helper-text': {
            ...SubTitleInsideMainContent({
                color: variables.$helperTextColor,
                fontSize: '11px',
            }),
        },
        '.like-label-input-filed': {
            marginBottom: '16px',
            position: 'relative',
            '& > h4': {
                fontWeight: '600',
                marginBottom: '0px',
                paddingBottom: '7px',
                fontSize: '13px',
                color: '#fff',
            },
            '& .flexible-wrap': {
                display: 'flex',
                '& .helper-text_bt': {
                    position: 'absolute',
                    bottom: '0',
                    margin: '0',
                    fontSize: '11px',
                    color: 'rgb(199, 199, 199)',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: '14px',
                    justifyContent: 'space-between',
                }
            }
        },
        '.flex-inputs': {
            ...FlexInputsWrapper,
        },
        '.like-form-secondary-title, .title-content': {
            ...TitleInsideMainContent(),
        },
        '.sub-title-content': {
            ...SubTitleInsideMainContent(),
        },
        '.main-content-of-section': {
            ...MainContent,
        },
        'span[class^=\"icon-\"]': {
            '&[data-icon-active=\"true\"]': {
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
                }
            }
        },
        'img': {
            '&.till-loading': {
                objectFit: 'contain !important',
                transform: 'scale(.4)',
            },
        },
        '#loader-infinite': {
            margin: '30px 0',
            fontSize: '15px',
            fontWeight: '600',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            '& > img': {
                maxWidth: '20px',
                marginRight: '10px',
            }
        },
        '.popover-container': {
            marginTop: '13px',
            padding: '10px',
        }
    },
};
export default style;