import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'settings-page__block': {},
    'section__block': {
        marginBottom: '40px',
        '&:last-child': {
            marginBottom: '0px',
            '& $section-body--item__block': {
                '&:last-child': {
                    borderBottom: 'none',
                }
            }
        },
    },
    'section-header__block': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid ' + variables.$barColor,
        padding: '10px 0',
        marginBottom: '15px',
        '& h4': {
            flex: 1,
            marginBottom: '0',
            fontSize: '20px'
        }
    },
    'section-header--actions__block': {
        display: 'flex',
        width: '160px',
        justifyContent: 'space-around',
        ...MediaQuery.down({
            width: '90px',
        }).sm,
        '& > div': {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#fff',
            '& span': {
                fontSize: '20px',
            },
            '& .desc-text': {
                fontSize: '10px',
                fontWeight: 600,
                marginTop: '5px',
                ...MediaQuery.down({
                    display: 'none',
                }).sm,
            }
        }
    },
    'section-body--item__block': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid ' + variables.$barColor,
        padding: '10px 0',
        '& .title-desc__side': {
            paddingRight: '3vw',
            flex: 1,
            ...MediaQuery.down({
                paddingRight: '5vw',
            }).sm,
            '& h4': {
                marginBottom: '5px',
            }
        },
        '& .actions__side': {
            display: 'flex',
            width: '160px',
            justifyContent: 'space-around',
            ...MediaQuery.down({
                width: '90px',
            }).sm,
            '& .checkbox-wrap': {
                marginRight: '0',
            }
        }
    },
})