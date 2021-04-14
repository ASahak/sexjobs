import {createUseStyles} from 'react-jss';
import {SubTitleInsideMainContent, TitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'category-container': {
        paddingTop: '16px',
        '& > h4': {
            ...TitleInsideMainContent({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '& > span': {
                    color: '#a6b2c1',
                    fontWeight: '400',
                    fontSize: '12px',
                }
            }),
        },
        '& > p': {
            ...SubTitleInsideMainContent(),
        },
    },
    'labels-container': {
        display: 'flex',
        flexWrap: 'wrap',
    }
})