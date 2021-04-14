import {createUseStyles} from 'react-jss'
import variables from 'static/styles/jss/abstracts/variables';
import {Shadow} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles( {
    'input-styles_extend': {
        fontFamily: 'Arial',
        boxSizing: 'border-box',
        width: '100%',
        position: 'relative',
        borderRadius: variables.$input.$radius,
        border: 'none',
        zIndex: 2,
        display: 'flex',
        transitionProperty: 'margin-bottom, box-shadow',
        '&:hover': {
            ...variables.$input.$hover,
        },
        '&:focus': {
            ...variables.$input.$focus,
        },
        '&::-webkit-input-placeholder': {
            color: variables.$input.$placeholderColor
        },
        '&:read-only': {
            backgroundColor: variables.$input.$readOnly,
            pointerEvents: 'none',
            color: variables.$input.$readOnlyColor + ' !important'
        }
    },
    'radio-checkbox_extend': {
        '& .checkbox-wrap': {
            display: 'flex',
            marginRight: '13px',
        },
        '& label': {
            paddingBottom: '0 !important',
            marginBottom: '0 !important',
            fontSize: variables.$input.$fontSize,
            display: 'inline-flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: 400,
            '& a': {
                color: variables.$labelLink,
            }
        },
        '& input': {
            opacity: '0',
            position: 'absolute',
            zIndex: '22',
        },
        marginBottom: variables.$input.$marginBottom,
        display: 'flex',
        flexDirection: 'row-reverse !important',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '&.error-field': {
            '& .checkbox-wrap': {
                '&::after': {
                    borderColor: variables.$danger,
                }
            },
            '& label': {
                color: 'inherit !important',
            },
            '& .input-icon': {
                display: 'none',
            }
        },
        '&.md-parent-wrapper': {
            '& .input-element-wrapper': {
                height: '18px',
                '& .checkbox-wrap, & > input': {
                    width: '18px !important',
                    height: '18px',
                    minWidth: '18px',
                    minHeight: '18px',
                },
            }
        },
        '&.sm-parent-wrapper': {
            '& .input-element-wrapper': {
                height: '14px',
                '& .checkbox-wrap, & > input': {
                    width: '14px !important',
                    height: '14px',
                    minWidth: '14px',
                    minHeight: '14px',
                },
            }
        },
    },
    'input-wrap': {
        userSelect: 'none',
        '& .input-element-wrapper': {
            display: 'flex',
        },
        '& input[type=\"number\"]::-webkit-outer-spin-button, & input[type=\"number\"]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: '10px',
        },
        '& input[type=\"number\"]': {
            '-moz-appearance': 'textfield',
        },
        '&.material-input-wrapper': {
            '&.error-field': {
                '& .MuiInputBase-root': {
                    '& > input': {
                        boxShadow: 'none !important',
                        borderBottom: '2px solid ' + variables.$danger,
                    },
                    '&::before, &::after': {
                        display: 'none',
                    }
                }
            },
            '& .MuiFormControl-root': {
                width: '100%',
            },
            '& .MuiInputBase-input': {
                transition: '.4s',
            },
            '& .MuiInputBase-root': {
                fontSize: '15px',
            },
            '& .MuiInputBase-root.Mui-disabled': {
                backgroundColor: 'rgba(0,0,0,0.04)',
                '&::before': {
                    borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                }
            },
            '& .MuiInput-underline:not(.Mui-disabled):after': {
                borderBottom: '2px solid #3378D1',
            },
            '& .MuiInput-underline:not(.Mui-disabled):before': {
                borderBottom: '2px solid #D8D8D8',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottom: '2px solid #D8D8D8',
            },
        },
        position: 'relative',
        width: 'fit-content',
        fontFamily: 'Arial',
        height: 'fit-content',
        '& label': {
            fontWeight: '600',
            paddingBottom: '7px',
            marginBottom: '0',
            color: props => props.labelColor,
        },
        '& .input-icon': {
            position: 'absolute',
            right: '7px',
            zIndex: '22',
            lineHeight: 'normal',
            fontSize: variables.$input.$iconSize + 'px',
            transform: props => props.iconTop,
        },
        '& .error-line': {
            fontFamily: 'Arial',
            position: 'absolute',
            left: '0',
            bottom: '0px',
            display: 'inline-block',
            transition: 'all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fontSize: '11px',
            lineHeight: '14px',
            color: variables.$danger,
            width: '100%',
        },

        // Helper Text
        '& .bottom-wrap': {
            lineHeight: '14px',
            position: 'absolute',
            bottom: '0px',
            fontSize: '11px',
            color: variables.$helperTextColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            '& .helper-text': {
                margin: '0px'
            },
            '& .counter': {
                marginLeft: 'auto',
            }
        },
        '&:not(.material-input-wrapper)': {
            '& .input-element-wrapper:hover input': {
                ...variables.$input.$hover,
            },
            // Input
            '& input': {
                transition: props => props.transition,
                extend: 'input-styles_extend',
                marginBottom: props => props.marginBottom,
                backgroundColor: props => props.backgroundColor,
                border: props => props.border,
            },
            '& input[type=\"checkbox\"], & input[type=\"radio\"]': {
                cursor: 'pointer',
                margin: '0',
                minWidth: 'fit-content !important',
                padding: '0 !important',
            },
            '& input[type=\"checkbox\"] + .selected-half-part::before': {
                content: '""',
                display: 'block',
                backgroundColor: 'rgb(197, 197, 197)',
                width: '50%',
                height: '50%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            },
            '& input:disabled': {
                backgroundColor: variables.$input.$disabledColor,
            },
            '& input[type=\"color\"]': { // todo need to know if we will have an input color or no?
                padding: variables.$input.$padding,
            },
        },
        '& input.input-md': {
            padding: variables.$input.$md.$padding,
            fontSize: variables.$input.$md.$fontSize + 'px',
        },
        '& input.input-sm': {
            fontSize: variables.$input.$sm.$fontSize + 'px',
            padding: variables.$input.$sm.$padding,
        },
        '& input.input-xsm': {
            padding: variables.$input.$xsm.$padding,
            fontSize: variables.$input.$xsm.$fontSize + 'px',
        },

        //textarea
        '& textarea': {
            extend: 'input-styles_extend',
            marginBottom: props => props.marginBottom,
            backgroundColor: props => props.backgroundColor,
            border: props => props.border,
            resize: 'none',
            '&::-webkit-scrollbar': {
                width: '5px',
                backgroundColor: 'rgb(196 50 50 / 0%)',
            },
            '&::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'rgb(108 81 81 / 30%) 0px 0px 6px inset',
                borderRadius: '4px',
                margin: '1px',
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                '-webkit-box-shadow': 'rgb(212 134 134 / 30%) 0px 0px 6px inset',
            }
        },
        '& textarea:disabled': {
            backgroundColor: variables.$input.$disabledColor,
        },
        '& textarea.textarea-md': {
            padding: variables.$input.$md.$padding,
            fontSize: variables.$input.$md.$fontSize + 'px',
        },
        '& textarea.textarea-xsm': {
            padding: variables.$input.$xsm.$padding,
            fontSize: variables.$input.$xsm.$fontSize + 'px',
        },
        '& textarea.textarea-sm': {
            fontSize: variables.$input.$sm.$fontSize + 'px',
            padding: variables.$input.$sm.$padding,
        },

        '& label.label-md': {
            fontSize: variables.$input.$md.$fontSize + 'px',
        },
        '& label.label-sm': {
            fontSize: variables.$input.$sm.$fontSize + 'px',
        },
        '& label.label-xsm': {
            fontSize: variables.$input.$xsm.$fontSize + 'px',
        },
        '&.error-field': {
            '& label': {
                color: variables.$danger + ' !important',
            },
            '& .input-element-wrapper input, & .input-element-wrapper textarea': {
                marginBottom: props => props.marginBottom,
                ...Shadow('0 0 1px 1px '+ variables.$danger + ' inset !important'),
                paddingRight: '25px !important',
            },
            '& i.error-icon': {
                color: variables.$danger +  ' !important',
            }
        },
    },
    'with-icon': {
        '& input, & textarea': {
            paddingRight: '25px !important',
        },
        '& i[class^=\"icon-\"]': {
            '&.toggle-password': {
                cursor: 'pointer',
            },
            '&.clickable': {
                cursor: 'pointer',
            },
            '&.icon-eye-blocked': {
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '20px',
                    height: '1px',
                    backgroundColor: variables.$input.$iconColor,
                    transform: 'rotate(-45deg)',
                    left: '-3px',
                    top: '7px',
                }
            },
            color: variables.$input.$iconColor,
        }
    },
    'wrap-with-checkbox': {
        border: 'none !important',
        color: props => props.labelColor,
        '&:not(.material-input-wrapper)': {
            extend: 'radio-checkbox_extend',
            '& .checkbox-wrap': {
                position: 'relative',
                '&:not(.selected-half-part)::before': {
                    display: 'none',
                    content: '""',
                    top: '0px',
                    bottom: '3px',
                    left: '0',
                    margin: 'auto',
                    right: '0',
                    width: '6px',
                    height: '12px',
                    border: 'solid white',
                    borderWidth: '0 2px 2px 0',
                    '-webkit-transform': 'rotate(45deg)',
                    '-ms-transform': 'rotate(45deg)',
                    transform: 'rotate(45deg)',
                    position: 'absolute',
                    zIndex: '2',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    border: '2px solid ' + variables.$input.$checkbox.$borderColor,
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    borderRadius: variables.$input.$radius,
                },
            },

        }
    },
    'wrap-with-radio': {
        border: 'none !important',
        color: props => props.labelColor,
        '&:not(.material-input-wrapper)': {
            extend: 'radio-checkbox_extend',
            '& .checkbox-wrap': {
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&::before': {
                    content: '""',
                    border: '2px solid ' + variables.$input.$checkbox.$borderColor,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    boxSizing: 'border-box',
                },
                '&::after': {
                    display: 'none',
                    content: '""',
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    boxSizing: 'border-box',
                },
            },
        }
    },
    'theme-light': {
        '&:not(.material-input-wrapper)': {
            '& textarea': {
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#EFEFEF',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgb(199, 199, 199)',
                },
            },
            '& input, & textarea': {
                backgroundColor: variables.$input.$theme.$light,
            },
            // CheckBox
            '& input[type=\"checkbox\"]': {
                '&:checked + .checkbox-wrap::before': {
                    display: 'block',
                },
                '&:checked + .checkbox-wrap::after': {
                    backgroundColor: variables.$input.$checkbox.$onLightBG,
                    borderColor: variables.$input.$checkbox.$onLightBG,
                }
            },
            // Radio
            '& input[type=\"radio\"]': {
                '&:checked + .checkbox-wrap::before': {
                    borderColor: variables.$input.$checkbox.$onLightBG,
                },
                '&:checked + .checkbox-wrap::after': {
                    display: 'block',
                    backgroundColor: variables.$input.$checkbox.$onLightBG,
                },
            },
        }
    },
    'theme-dark': {
        '&:not(.material-input-wrapper)': {
            border: '1px solid ' + variables.$input.$darkBorderColor,
            '& textarea': {
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#07224D',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#98A4B3',
                },
            },
            '& input, & textarea': {
                backgroundColor: variables.$input.$theme.$dark,
                color: variables.$input.$theme.$darkColor,
            },
            '& .input-icon': {
                color: variables.$input.$theme.$darkColor + '!important',
            },
            // CheckBox
            '& input[type=\"checkbox\"]': {
                '&:checked + .checkbox-wrap::before': {
                    display: 'block',
                    borderColor: variables.$baseColor,
                },
                '&:checked + .checkbox-wrap::after': {
                    backgroundColor: variables.$input.$checkbox.$onDarkBG,
                    borderColor: variables.$input.$checkbox.$onDarkBG,
                },
            },

            // Radio
            '& input[type=\"radio\"]': {
                '&:checked + .checkbox-wrap::before': {
                    borderColor: variables.$input.$checkbox.$onDarkBG,
                },
                '&:checked + .checkbox-wrap::after': {
                    display: 'block',
                    backgroundColor: variables.$input.$checkbox.$onDarkBG,
                },
            },
        }
    },
    'transparent-input-wrap': {
        '&:not(.material-input-wrapper)': {
            flexDirection: 'row !important',
            alignItems: 'center',
            borderBottom: '2px solid ' + variables.$input.$transparentInput.$borderColor,
            padding: '4px 0',
            height: 'auto',
            '& .input-icon': {
                color: variables.$input.$theme.$darkColor + '!important',
            },
            '& .bottom-wrap': {
                left: '110px',
                width: 'calc(100% - 110px)',
                bottom: '1px',
                '& p.helper-text': {
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                },
                '& p.helper-text + .counter': {
                    marginLeft: '10px',
                }
            },
            '&.error-field': {
                borderBottom: '2px solid ' + variables.$danger,
                transition: 'all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
                paddingBottom: props => props.marginBottom,
                '& .error-line': {
                    bottom: '0px',
                    left: '110px',
                    width: 'calc(100% - 110px)',
                },
                '& .input-element-wrapper input, & .input-element-wrapper textarea': {
                    ...Shadow('none !important'),
                }
            },
            '& label': {
                padding: '0px !important',
                width: '110px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
            },
            '& .input-element-wrapper': {
                width: 'calc(100% - 110px)',
                '& textarea, & input': {
                    width: '100%',
                    border: 'none !important',
                    background: 'none !important',
                    margin: '0 !important',
                    paddingLeft: '0 !important',
                    '&:read-only': {
                        color: '#fff !important'
                    }
                },
                '&:hover input, &:hover textarea': {
                    ...Shadow('none !important'),
                },
                '& input:focus, & textarea:focus': {
                    ...Shadow('none !important'),
                }
            }
        },
    }
})