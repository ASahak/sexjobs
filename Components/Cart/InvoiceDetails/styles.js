import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {SubTitleInsideMainContent} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'invoice-details-container': {
        position: 'relative',
        '& .details-edit-btn-wrapper': {
            display: 'flex',
            justifyContent: 'space-between',
            '& p': {
                textAlign: 'right',
                cursor: 'pointer',
                '& span': {
                    marginRight: '10px',
                },
                ...SubTitleInsideMainContent({
                    color: variables.$iconColor,
                }),
            },
            '& ul': {
                listStyleType: 'none',
                padding: '0',
                margin: '0',
                '& li': {
                    ...SubTitleInsideMainContent({
                        marginBottom: '5px',
                    }),
                }
            }
        },
    }
})