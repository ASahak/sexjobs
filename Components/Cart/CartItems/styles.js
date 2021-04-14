import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {SubTitleInsideMainContent, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';
import {StickerBadgeSilver} from 'static/styles/jss/abstracts/extends';

export default createUseStyles({
    'cart-list-container': {
        '& .cart-list-container__item': {
            borderTop: '1px solid ' + variables.$barColor,
            padding: '15px 0',
            '& p': {
                ...SubTitleInsideMainContent({
                    marginBottom: '0px',
                    color: variables.$helperTextColor,
                }),
            },
            '& h4': {
                ...TitleInsideMainContent({
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '7px',
                }),
                '& > span': {
                    display: 'flex',
                    alignItems: 'center',
                    '&.cart-list-container__item-left': {
                        flex: 1,
                    }
                },
                '& .icon-Delete': {
                    color: variables.$iconColor,
                    fontSize: '20px',
                    marginLeft: '15px',
                    cursor: 'pointer',
                },
                '& img': {
                    maxWidth: '17px',
                    marginLeft: '10px',
                },
                '& .sticker-badge': {
                    ...StickerBadgeSilver,
                },
            }
        }
    },
    'cart-list-container__checkbox-wrapper': {
        padding: '20px 0',
        borderTop: '2px solid ' + variables.$barColor,
        borderBottom: '2px solid ' + variables.$barColor,
    },
    'cart-list-container__total': {
        margin: '30px 0',
        '& h3': {
            textAlign: 'right',
            ...TitleInsideMainContent({
                fontSize: '26px'
            }),
        },
    },
})