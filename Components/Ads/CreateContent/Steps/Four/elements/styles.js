import {createUseStyles} from 'react-jss';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';
import variables from 'static/styles/jss/abstracts/variables';

export default createUseStyles({
    'ads-dialog-wrapper': {},
    'my-ads-images-list': {
        display: 'flex',
        flexWrap: 'wrap',
        width: '400px',
        // justifyContent: 'space-between',
        ...MediaQuery.down({
            width: '100%',
            maxHeight: '50vh',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
                width: '0px',
                backgroundColor: 'transparent',
            },
        }).sm,
        '& > div': {
            cursor: 'pointer',
            height: '120px',
            width: 'calc(33.33333% - 8px)',
            border: '2px solid #CBCCCC',
            padding: '0 10px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '12px',
            marginRight: '12px',
            ...MediaQuery.up({
                '&:nth-child(3n)': {
                    marginRight: '0px',
                },
            }).sm,
            '&.added-image': {
                border: '2px solid ' + variables.$blue_30,
                '&::after': {
                    content: 'attr(data-index)',
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    color: '#fff',
                    width: '20px',
                    height: '20px',
                    background: variables.$blue_30,
                    borderRadius: '50%',
                    textAlign: 'center',
                    fontSize: '13px',
                }
            },
            '&.already-uploaded': {
                '&::before': {
                    content: '""',
                    width: '100%',
                    height: '100%',
                    background: '#e3e0e099',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    borderRadius: '10px',
                }
            },
            ...MediaQuery.down({
                width: 'calc(50% - 6px)',
                '&:nth-child(2n)': {
                    marginRight: '0px',
                },
            }).sm,
            '& img': {
                maxWidth: '100%',
                maxHeight: '100%',
            }
        },
    },
})