import {Shadow} from 'static/styles/jss/abstracts/mixins';

export default {
    $baseColor: '#153F8F',
    $danger: '#FB2A2A',
    $baseRed: '#ED1C24',
    $baseDark: '#0B0E2A',
    $iconActiveBG: '#072043',
    $blue_30: '#1B519C',
    $lightBlue: '#104991',
    $bodyColor: '#003f8f',
    $darkOpacity50: '#00224D',
    $primaryColor: '#3378D1',
    $contentBlueColor: '#1B509F',
    $barColor: '#003271',
    $bgInfo: '#B8E5EF',
    $bgInfo50: '#DBF2F8',
    $bgError: '#E24C4B',
    $bgError50: 'rgb(240 165 164)',
    $bgWarning: '#DDCD56',
    $bgWarning50: '#FDF6B3',
    $bgSuccess: '#36AE88',
    $borderGrey: '#b4b4b4',
    $bgSuccess50: 'rgb(154 214 195)',
    $helperTextColor: '#C7C7C7',
    $labelLink: '#97D8E2',
    $iconColor: '#C3C4C4',
    $darkBlueBorder: '#154288',
    $filters: {
        $headerBG: '#11509F',
        $bodyBG: '#003271',
    },
    $button: {
        $radius: '2px',
        $padding: '11px 16px',
        $cta: {
            $bg: 'linear-gradient(180deg, #7AD100 0%, #5C9E00 100%)',
            $color: '#fff',
            $border: 'none',
            $hover: {
                background: 'linear-gradient(180deg, #89e802 0%, #68af04 100%)',
            },
            $disabled: {
                opacity: 0.9,
                background: 'linear-gradient(180deg, #3F8945 0%, #307145 100%)',
            }
        },
        $primary: {
            $bg: '#3378D1',
            $color: '#fff',
            $border: 'none',
            $hover: {
                backgroundColor: '#5B92DA'
            },
            $disabled: {
                opacity: 0.6,
            }
        },
        $default: {
            $bg: '#072955',
            $color: '#fff',
            $border: 'none',
            $hover: {
                backgroundColor: '#375276'
            },
            $disabled: {
                opacity: 0.6,
                background: '#072955',
            }
        },
        $alt: {
            $bg: 'transparent',
            $color: '#C3CBD5',
            $border: '#C3CBD5',
            $hover: {
                borderColor: '#fff',
                color: '#fff',
            },
            $disabled: {
                opacity: 0.6,
            }
        },
        $whiteBG: {
            $bg: '#fff',
            $color: '#3378D1',
            $border: '2px solid #3378D1',
            $hover: {
                opacity: .9
            },
            $disabled: {
                opacity: 0.5,
            }
        },
        $alert: {
            $bg: '#CD3A3A',
            $color: '#fff',
            $border: 'none',
            $hover: {
                backgroundColor: '#D66061'
            },
            $disabled: {
                opacity: 0.6,
            }
        },
        $md: {
            $padding: '11.5px 16px',
        },
        $sm: {
            $padding: '7px 10px',
        },
        $xs: {
            $padding: '4.5px 7px',
        },
    },
    $input: {
        $readOnly: '#DDD9D9',
        $readOnlyColor: 'rgb(98, 103, 109)',
        $iconColor: '#62676D',
        $darkBorderColor: '#11509F',
        $iconSize: 16,
        $marginBottom: '20px',
        $hover: {
            ...Shadow('0 0 1px 1px #C3CBD5'),
        },
        $focus: {
            outline: 'none',
            ...Shadow('0px 0px 1px 2px #B0F2F1 inset !important'),
        },
        $disabledColor: '#e7e7e7',
        $radius: '2px',
        $baseColor: '#37415c',
        $fontSize: 13,
        $padding: '13px 10px',
        $placeholderColor: '#C5C5C5',
        $md: {
            $fontSize: 13,
            $padding: '11.5px 10px',
        },
        $sm: {
            $padding: '10px',
            $fontSize: 12,
        },
        $xsm: {
            $padding: '5px 10px',
            $fontSize: 11,
        },
        $theme: {
            $light: '#fff',
            $dark: '#0A2955',
            $darkColor: '#C3CBD5',
        },
        $checkbox: {
            $borderColor: '#C5C5C5',
            $onLightBG: '#3378D1',
            $onDarkBG: '#B0F2F1',
        },
        $transparentInput: {
            $borderColor: '#B4B4B4',
            $errorDefaultHeight: 16,
        }
    },
    $select: {
        $emptyTextColor: '#C7C7C7',
        $textColor: '#000',
        $borderColor: '#fff',
        $paddingItem: '12px',
        $selected: {
            $color: '#fff',
            $bgColor: '#3378D1',
        },
        $dropdown: {
            $listItem: {
                $iconColor: '#98A4B3',
                $md: {
                    $padding: '0 10px',
                    $margin: '12px 0',
                    $iconRight: '8px',
                    $size: '25px',
                    $iconSize: '18px',
                },
                $sm: {
                    $padding: '0 8px',
                    $margin: '8px 0',
                    $iconRight: '6px',
                    $size: '20px',
                    $iconSize: '14px',
                },
                $xsm: {
                    $padding: '0 6px',
                    $margin: '6px 0',
                    $iconRight: '5px',
                    $size: '15px',
                    $iconSize: '10px',
                }
            },
        },
        $dark: {
            $selected: {
                $color: '#C3CBD5',
                $bgColor: '#0b0e2a',
            },
            $borderColor: '#1B509F',
            $textColor: '#C3CBD5',
            $emptyTextColor: '#fff7f773',
        },
    },
    $datepicker: {
        $iconColor: '#C7C7C7',
        $textColor: '#000',
        $actionsColor: '#3378D1',
        $weekColor: 'rgba(0,0,0,0.38)',
        $md: {
            $iconSize: '18px',
        },
        $sm: {
            $iconSize: '16px',
        },
        $xsm: {
            $iconSize: '14px',
        },
        $dark: {
            $weekColor: 'rgba(195,203,213,0.3)',
            $textColor: '#C3CBD5',
            $actionsColor: '#B0F2F1',
        },
    }
}