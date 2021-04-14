import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'progress-tracker-container': {
        display: 'flex',
        backgroundColor: variables.$barColor,
        height: '48px',
        marginBottom: '16px',
        ...MediaQuery.down({
            marginTop: props => props.marginTopMobile,
        }).sm,
        '& .tracker-step': {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.6)',
            cursor: props => props.pointer,
            padding: '12px 14px',
            fontSize: '16px',
            transition: '0.3s ease 0s',
            fontWeight: 'bold',
            flex: 1,
            position: 'relative',
            ...MediaQuery.down({
                backgroundColor: '#072955',
            }).sm,
            maxWidth: props => `${props.maxWidth}%`,
            ...MediaQuery.between({
                fontSize: '13px',
                padding: '12px 10px 12px 20px',
            }).md_lg,
            ...MediaQuery.between({
                fontSize: '14px',
                padding: '12px 10px 12px 20px',
            }).sm_md,
            '& .step-title': {
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                maxWidth: 'calc(100% - 40px)',
                ...MediaQuery.between({
                    maxWidth: 'calc(100% - 20px)',
                }).sm_lg,
                ...MediaQuery.down({
                   display: 'none',
                }).sm,
            },
            '& .step-index': {
                '&::after': {
                    content: '"."',
                    marginRight: '7px',
                    ...MediaQuery.down({
                        display: 'none'
                    }).sm,
                }
            },
            '&::after': {
                transition: '0.3s ease 0s',
                top: '0',
                right: '-15px',
                content: '""',
                position: 'absolute',
                borderTop: '24px solid transparent',
                borderLeft: '15px solid #11509F',
                borderBottom: '24px solid transparent',
            },
            '&::before': {
                transition: '0.3s ease 0s',
                top: '0px',
                right: '-13px',
                zIndex: '3',
                content: '""',
                position: 'absolute',
                borderTop: '24px solid transparent',
                borderLeft: '13px solid ' + variables.$barColor,
                borderBottom: '24px solid transparent',
                ...MediaQuery.down({
                    borderLeft: '13px solid rgb(10 41 85)',
                }).sm,
            },
            '&.active-tracker-tab': {
                color: '#B0F2F1',
                backgroundColor: '#072955',
                '&::before': {
                    borderLeft: '13px solid #0a2955',
                },
                '&::after': {
                    borderLeft: '15px solid #0a2955',
                },
                ...MediaQuery.down({
                    paddingLeft: '24px',
                    backgroundColor: '#153F8F',
                    '&::before': {
                        borderLeft: '13px solid #153F8F',
                        top: '0',
                        borderBottom: '24px solid transparent',
                        borderTop: '24px solid transparent',
                    },
                }).sm,
            },
            '&:last-child': {
                '&::after, &::before': {
                    display: 'none',
                }
            }
        }
    }
})