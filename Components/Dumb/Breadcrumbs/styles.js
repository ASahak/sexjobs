import {createUseStyles} from 'react-jss'
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'breadcrumb': {
        listStyleType: 'none',
        padding: '0',
        margin: '0 0 15px 0',
        display: 'flex',
        ...MediaQuery.down({
            display: 'none'
        }).sm,
        '& > li': {
            '&::after': {
                content: '"\\203A"',
                fontSize: '12px',
                margin: '0 5px',
                color: '#fff',
            },
            '&:last-child': {
                '& > a': {
                    cursor: 'text',
                },
                '&::after': {
                    display: 'none',
                }
            },
            '& > a': {
                textTransform: 'capitalize',
                color: '#fff',
                fontSize: '13px',
            }
        }
    }
})