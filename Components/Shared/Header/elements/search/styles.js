import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/variables';

export default createUseStyles({
    'search-wrapper': {
        '& .main-search-form': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            '& .search-input': {
                flex: 1,
                '& input': {
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px',
                }
            },
            '& .search-select': {
                '& > div': {
                    borderLeft: '1px solid #D8D8D8',
                    borderRadius: `0 ${variables.$input.$radius} ${variables.$input.$radius} 0`,
                    '& .MuiSvgIcon-root': {
                        top: 'calc(50% - 12px)',
                        right: '90px',
                        fontSize: '24px',
                    }
                },
                '& .MuiSelect-root': {
                    paddingRight: '100px !important',
                    '&:hover': {
                        boxShadow: 'none'
                    }
                },
                '&.select-opened': {
                    '& > div.Mui-focused': {
                        boxShadow: 'none !important',
                        '& .MuiSelect-root': {
                            boxShadow: 'none !important',
                        }
                    }
                }
            },
            '& .search-button': {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                position: 'absolute',
                zIndex: '222',
                right: '0',
            },
        }
    },
})