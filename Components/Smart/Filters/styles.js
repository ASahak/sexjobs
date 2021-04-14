import {createUseStyles} from 'react-jss';
import variables from 'static/styles/jss/abstracts/variables';
import {MediaQuery} from 'static/styles/jss/abstracts/mixins';

export default createUseStyles({
    'appearance_title-extend': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#FFFFFF',
        fontSize: '13px',
        fontWeight: 'bold',
        cursor: 'pointer',
        '& > span': {
            color: '#C3CBD5',
            fontWeight: 'bold',
            transition: '.4s',
            transform: 'rotate(0deg)',
            '-webkit-perspective': '1000',
            '-webkit-backface-visibility': 'hidden',
            '&.list-is-opened': {
                transform: 'rotate(-180deg)',
            },
        }
    },
    'show_more_icon-extend': {
        marginLeft: '10px',
        fontWeight: 900,
        transition: '.4s',
        transform: 'rotate(0deg)',
        '-webkit-perspective': '1000',
        '-webkit-backface-visibility': 'hidden',
    },
    'ul_list-extend': {
        margin: '0',
        listStyleType: 'none',
        padding: '0',
        transition: '.4s',
        overflow: 'hidden',
        '& > li': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FFFFFF',
            fontSize: '13px',
            margin: '10px 0',
            cursor: 'pointer',
        },
    },
    'show_more-btn-extend': {
        color: '#C3CBD5',
        fontSize: '11px',
        margin: '15px 0 0',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        letterSpacing: '.4px',
    },
    'list-items-of-selected-items_extend': {
        margin: '7px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#FFFFFF',
        fontSize: '13px',
        '& > span': {
            fontWeight: '900',
            cursor: 'pointer',
            fontSize: '15px',
            color: 'rgb(195, 203, 213)',
        },
        '&:last-child': {
            marginBottom: '0'
        }
    },
    'container-margin-bottom_extend': {
        marginBottom: '16px',
        ...MediaQuery.down({
            marginBottom: '0px',
        }).sm,
    },
    'main-filters-container': {
        '& .simple-bar_title': {
           '& > h4': {
               width: '100%',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               '& > span': {
                   cursor: 'pointer',
               }
           }
        },
        '& .body-of-filters': {
            ...MediaQuery.up({
                '& .filter-mobile-title': {
                    display: 'none',
                },
                '& .selected-filters-container': {
                    display: 'block',
                },
            }).sm,
            ...MediaQuery.down({
                position: 'fixed',
                top: '0',
                backgroundColor: variables.$darkOpacity50,
                zIndex: '99999',
                left: '-100%',
                transition: '.4s',
                width: '100%',
                opacity: 0.7,
                height: '100vh',
                '& > div.fixed-show-result': {
                    paddingTop: '16px',
                },
                '& > div.main-body-scrollable': {
                    maxHeight: 'calc(100% - 140px)',
                    overflowX: 'hidden',
                    '@media (hover: none)': {
                        '&::-webkit-scrollbar': {
                            width: '0px',
                            backgroundColor: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'transparent',
                        },
                    },
                    '@media (hover: hover)': {
                        '&::-webkit-scrollbar': {
                            width: '5px',
                            backgroundColor: '#07224D',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            borderRadius: '10px',
                            background: variables.$helperTextColor,
                        },
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#C7C7C7 #07224D',
                    },
                },
                '& .selected-filters-container': {
                    display: 'none',
                },
                '& .filter-mobile-title': {
                    '& > h4': {
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: '0',
                        padding: '25px 16px',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        '& > span': {
                            cursor: 'pointer',
                            fontWeight: '400',
                            color: '#C3CBD5',
                        }
                    }
                },
            }).sm,
            '&.mobile-open_filters-wrapper': {
                left: '0',
                opacity: 1,
            },
        },
        '& .checkbox-wrapper': {
            width: '100%',
            '& label': {
                width: '100%',
                justifyContent: 'flex-end',
            }
        },
        // Selected Filters
        '& .selected-filters-container': {
            marginBottom: '16px',
            '& .selected-filters_body': {
                '& .remove-all-filters': {
                    marginBottom: '0',
                    marginTop: '6px',
                    '& > a': {
                        color: '#FFFFFF',
                        fontSize: '11px',
                        textDecoration: 'underline !important',
                        cursor: 'pointer',
                    }
                },
                '& .no-selected-items': {
                    color: '#fff',
                    fontSize: '13px',
                    margin: '0'
                },
                '& > div': {
                    padding: '10px 0',
                    borderBottom: '1px solid #11509F',
                    '&:first-child': {
                        paddingTop: '0',
                    },
                    '&:last-child': {
                        paddingBottom: '0',
                        border: 'none',
                    },
                    '& > div .appearance_deep': {
                        '& > .penis-height': {
                            padding: '0 0 0 16px',
                            '& > p': {
                                extend: 'list-items-of-selected-items_extend',
                            }
                        },
                        '& > h5': {
                            color: 'rgb(255, 255, 255)',
                            paddingLeft: '8px',
                            marginBottom: '0px',
                            marginTop: '10px',
                            fontSize: '13px',
                            fontWeight: 'bold',
                        },
                        '& > ul': {
                            padding: '0 0 0 16px',
                            margin: '10px 0 0 0',
                            listStyleType: 'none',
                            '& > li': {
                                extend: 'list-items-of-selected-items_extend',
                            }
                        },
                    },
                    '& > div > ul': {
                        margin: '0',
                        padding: '0',
                        paddingTop: '10px',
                        '& > li': {
                            extend: 'list-items-of-selected-items_extend',
                            '& > p': {
                                margin: '0',
                            },
                        }
                    },
                    '& > h5': {
                        cursor: 'pointer',
                        color: 'rgb(255, 255, 255)',
                        marginBottom: '0px',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '& > span': {
                            extend: 'show_more_icon-extend',
                            color: 'rgb(195, 203, 213)',
                            '&.dropdown-opened': {
                                transform: 'rotate(-180deg)',
                            },
                        }
                    },
                }
            }
        },
        // Search Mobile
        '& .search-container': {
            display: 'none',
            ...MediaQuery.down({
                display: 'block',
            }).sm,
        },
        // Now Available
        '& .now-available-container': {
            extend: 'container-margin-bottom_extend',
            '& .now-available_body': {
                '& > div': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    '&:last-child': {
                        marginBottom: '0px',
                    },
                    '& > span': {
                        color: '#C3CBD5',
                        fontSize: '12px',
                    }
                }
            }
        },
        // Location
        '& .location-container': {
            extend: 'container-margin-bottom_extend',
            '& .location_body': {
                '& .location_body-postal-code': {
                    paddingBottom: '16px',
                    borderBottom: '2px solid #11509F',
                    '& input': {
                        '&::-webkit-input-placeholder': {
                            color: '#355074 !important'
                        },
                    }
                },
                '& .location_body-list': {
                    '& ul': {
                        extend: 'ul_list-extend',
                        '& > li': {
                            '&:last-child': {
                                marginBottom: '0',
                            },
                            '& > span': {
                                color: '#C3CBD5',
                                fontSize: '12px',
                            }
                        }
                    },
                    '& .popular-locations-wrapper': {
                        '& > p.popular-locations-title': {
                            margin: '12px 0',
                            color: '#FFFFFF',
                            fontSize: '13px',
                            fontWeight: 'bold',
                        },
                    },
                    '& .show-all-locations-btn': {
                        extend: 'show_more-btn-extend',
                        '& > span': {
                           extend: 'show_more_icon-extend',
                        },
                        '&.opened-all-locations': {
                            '& > span': {
                                transform: 'rotate(-180deg)',
                            }
                        },
                    }
                }
            }
        },
        // Gender
        '& .gender-container': {
            extend: 'container-margin-bottom_extend',
            '& .gender_body': {
                padding: '16px 1px'
            }
        },
        // Possibilities
        '& .possibilities-container': {
            extend: 'container-margin-bottom_extend',
            '& .possibilities_body': {
                '& ul': {
                    extend: 'ul_list-extend',
                    '& > li': {
                        margin: '15px 0',
                        '& .checkbox-wrapper': {
                            minWidth: 'initial'
                        },
                        '&:last-child': {
                            marginBottom: '0',
                        },
                        '& > span': {
                            color: '#C3CBD5',
                            fontSize: '12px',
                        }
                    }
                },
                '& .list-wrapped-for-animation': {
                    '& > ul': {
                        paddingTop: '15px',
                    }
                },
                '& .show-all-possibilities-btn': {
                    extend: 'show_more-btn-extend',
                    '& > span': {
                        extend: 'show_more_icon-extend',
                    },
                    '&.opened-all-possibilities': {
                        '& > span': {
                            transform: 'rotate(-180deg)',
                        }
                    },
                }
            }
        },
        // Pictures
        '& .pictures-container': {
            extend: 'container-margin-bottom_extend',
            '& .pictures_body': {
                '& > div': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    '&:last-child': {
                        marginBottom: '0px',
                    },
                    '& > span': {
                        color: '#C3CBD5',
                        fontSize: '12px',
                    }
                }
            }
        },
        // Age
        '& .age-container': {
            extend: 'container-margin-bottom_extend',
            '& .age_body': {
                padding: '16px 11px',
                '& > p': {
                    display: 'flex',
                    margin: 0,
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    color: '#fff',
                }
            }
        },
        // Appearance
        '& .appearance-container': {
            extend: 'container-margin-bottom_extend',
            '& .appearance-build': {
                borderBottom: '1px solid #154188',
                '& > h5': {
                    padding: '0 0 10px 0',
                    margin: '0',
                    extend: 'appearance_title-extend',
                },
                '& ul': {
                    transition: '.4s',
                    marginBottom: 0,
                    extend: 'ul_list-extend',
                    '& > li': {
                        margin: '15px 0',
                        '& > span': {
                            fontSize: '12px',
                            color: '#C3CBD5'
                        }
                    }
                }
            },
            '& .appearance-height': {
                borderBottom: '1px solid #154188',
                '& > h5': {
                    padding: '10px 0',
                    margin: '0',
                    extend: 'appearance_title-extend',
                },
                '& > div > div': {
                    paddingTop: '15px',
                },
                '& p': {
                    display: 'flex',
                    margin: 0,
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    color: '#fff',
                }
            },
            '& .appearance-hair_color': {
                borderBottom: '1px solid #154188',
                '& > h5': {
                    padding: '10px 0',
                    margin: '0',
                    extend: 'appearance_title-extend',
                },
                '& ul': {
                    marginBottom: 0,
                    extend: 'ul_list-extend',
                    '& > li': {
                        margin: '15px 0',
                        '& > span': {
                            fontSize: '12px',
                            color: '#C3CBD5'
                        }
                    }
                }
            },
            '& .appearance-penis': {
                borderBottom: '1px solid #154188',
                '& > h5': {
                    padding: '10px 0',
                    margin: '0',
                    extend: 'appearance_title-extend',
                },
                '& > div > div': {
                    paddingTop: '15px',
                },
                '& p': {
                    display: 'flex',
                    margin: 0,
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    color: '#fff',
                }
            },
            '& .appearance-cup': {
                borderBottom: '1px solid #154188',
                '& > h5': {
                    padding: '10px 0',
                    margin: '0',
                    extend: 'appearance_title-extend',
                },
                '& ul': {
                    marginBottom: 0,
                    extend: 'ul_list-extend',
                    '& > li': {
                        margin: '15px 0',
                        '& > span': {
                            fontSize: '12px',
                            color: '#C3CBD5'
                        }
                    }
                }
            },
            '& .appearance-nationality': {
                '& > h5': {
                    extend: 'appearance_title-extend',
                    borderBottom: '0',
                    padding: '10px 0 0 0',
                    margin: '0',
                },
                '& .show-all-nations-btn': {
                    extend: 'show_more-btn-extend',
                    '& > span': {
                        extend: 'show_more_icon-extend',
                    },
                    '&.opened-all-nations': {
                        '& > span': {
                            transform: 'rotate(-180deg)',
                        }
                    },
                },
                '& > .list-wrapped-for-animation': {
                    '& ul': {
                        '&  > li:last-child': {
                            marginBottom: '0px',
                        }
                    },
                },
                '& ul': {
                    marginBottom: '0',
                    extend: 'ul_list-extend',
                    '& > li': {
                        margin: '15px 0',
                        '& > span': {
                            fontSize: '12px',
                            color: '#C3CBD5'
                        }
                    }
                }
            },
        },
        // Pricing
        '& .pricing-container': {
            extend: 'container-margin-bottom_extend',
            '& .pricing_body': {
                padding: '16px 11px',
                '& > p': {
                    display: 'flex',
                    margin: 0,
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    color: '#fff',
                }
            }
        },
        // Availability
        '& .availability-container': {
            extend: 'container-margin-bottom_extend',
            '& .availability_body': {
                '& ul': {
                    extend: 'ul_list-extend',
                    '& > li': {
                        margin: '15px 0',
                        '&:first-child': {
                            marginTop: '0',
                        },
                        '&:last-child': {
                            marginBottom: '0',
                        },
                        '& > span': {
                            color: '#C3CBD5',
                            fontSize: '12px',
                        }
                    }
                },
            }
        },
        // Speak Languages
        '& .languages-container': {
            extend: 'container-margin-bottom_extend',
            '& .languages_body': {
                '& ul': {
                    extend: 'ul_list-extend',
                    '& > li': {
                        margin: '15px 0',
                        '&:first-child': {
                            marginTop: '0',
                        },
                        '&:last-child': {
                            marginBottom: '0',
                        },
                        '& > span': {
                            color: '#C3CBD5',
                            fontSize: '12px',
                        }
                    }
                },
            }
        },
        // Meeting Places
        '& .meet_places-container': {
            extend: 'container-margin-bottom_extend',
            '& .meet_places_body': {
                '& ul': {
                    extend: 'ul_list-extend',
                    '& > li': {
                        margin: '15px 0',
                        '&:first-child': {
                            marginTop: '0',
                        },
                        '&:last-child': {
                            marginBottom: '0',
                        },
                        '& > span': {
                            color: '#C3CBD5',
                            fontSize: '12px',
                        }
                    }
                },
            }
        },
    }
})