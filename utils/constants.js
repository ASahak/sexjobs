const GLOBAL_CONSTANTS = {
    bodyPaddingRight: '15px',
    speakLanguages: [
        {title: 'Dutch', value: 'dutch'},
        {title: 'English', value: 'english'},
        {title: 'German', value: 'german'},
        {title: 'French', value: 'french'},
        {title: 'Spanish', value: 'spanish'},
        {title: 'Other', value: 'other'},
    ],
    possibilities: [
        {title: 'Aftrekken', value: 'aftrekken'},
        {title: 'Anaal', value: 'anaal'},
        {title: 'Beffen', value: 'beffen'},
        {title: 'Bisex', value: 'bisex'},
        {title: 'Deepthroat', value: 'deepthroat'},
        {title: 'Klaarkomen in mond', value: 'klaarkomen-in-mond'},
        {title: 'Klaarkomen op gezicht', value: 'klaarkomen-op-gezicht'},
        {title: 'Klaarkomen op borsten', value: 'klaarkomen-op-borsten'},
        {title: 'Pijpen', value: 'pijpen'},
        {title: 'Pijpen zonder condoom', value: 'pijpen-zonder-condoom'},
        {title: 'Squirten', value: 'squirten'},
        {title: 'Trio m/m', value: 'trio-m-m'},
        {title: 'Trio m/v', value: 'trio-m-v'},
        {title: 'Tussen borsten (Russisch)', value: 'tussen-borsten'},
        {title: 'Vingeren', value: 'vingeren'},
        {title: 'Vluggertje', value: 'vluggertje'},
        {title: 'Zoenen', value: 'zoenen'},
    ],
    months: [
        {title: 'January', value: 1},
        {title: 'February', value: 2},
        {title: 'March', value: 3},
        {title: 'April', value: 4},
        {title: 'May', value: 5},
        {title: 'June', value: 6},
        {title: 'July', value: 7},
        {title: 'August', value: 8},
        {title: 'September', value: 9},
        {title: 'October', value: 10},
        {title: 'November', value: 11},
        {title: 'December', value: 12},
    ],
    genders: [
        {title: 'Man', value: 'male'},
        {title: 'Woman', value: 'female'},
        {title: 'Shemale', value: 'shemale'},
    ],
    hairColors: [
        {title: 'Blonde', value: 'blonde'},
        {title: 'Brown', value: 'brown'},
        {title: 'Black', value: 'black'},
        {title: 'Red', value: 'red'},
        {title: 'Gray', value: 'gray'},
        {title: 'None', value: 'none'},
        {title: 'Other', value: 'other'},
    ],
    build: [
        {title: 'Normal', value: 'normal'},
        {title: 'Athletic', value: 'athletic'},
        {title: 'Slim', value: 'slim'},
        {title: 'Chubby', value: 'chubby'},
        {title: 'Fat', value: 'fat'},
    ],
    cupSize: [
        {title: 'A', value: 'a'},
        {title: 'AA', value: 'aa'},
        {title: 'B', value: 'b'},
        {title: 'C', value: 'c'},
        {title: 'D', value: 'd'},
        {title: 'DD', value: 'dd'},
        {title: 'E', value: 'e'},
        {title: 'F', value: 'f'},
        {title: 'G', value: 'g'},
    ],
    nationality: [
        {title: 'Netherlands', value: 'netherlands'},
        {title: 'Belgium', value: 'belgium'},
    ],
    countries: [
        {title: 'Netherlands', value: 'netherlands'},
        {title: 'Belgium', value: 'belgium'},
    ],
    week: [
        {title: 'Monday', value: 1},
        {title: 'Tuesday', value: 2},
        {title: 'Wednesday', value: 3},
        {title: 'Thursday', value: 4},
        {title: 'Friday', value: 5},
        {title: 'Saturday', value: 6},
        {title: 'Sunday', value: 0},
    ],
    type_of_locations: [
        {title: 'BDSM Studio', value: 'bdsm'},
        {title: 'Buitenlucht', value: 'buitenlucht'},
        {title: 'Cardate', value: 'cardate'},
        {title: 'Club', value: 'club'},
        {title: 'Op locatie (Escort)', value: 'op-locatie'},
        {title: 'Privehuis', value: 'privehuis'},
        {title: 'Thuisontvangst', value: 'thuisontvangst'},
    ],
    event_types: [
        {title: 'Gangbang', value: 'gangbang'},
        {title: 'Erotish uitgaan', value: 'erotish-uitgaan'},
        {title: 'Barebang', value: 'barebang'},
        {title: 'Bukkake', value: 'bukkake'},
    ],
    type_of_works: [
        {title: 'Work 1', value: 'wokr1'},
        {title: 'Work 2', value: 'wokr2'},
        {title: 'Work 3', value: 'wokr3'},
        {title: 'Work 4', value: 'wokr4'},
    ],
    type_of_employment: [
        {title: 'Contract', value: 'contract'},
        {title: 'Freelance', value: 'freelance'},
        {title: 'Commissions', value: 'commissions'},
    ],
    working_hours: [
        {title: 'Morning', value: 'morning'},
        {title: 'Afternoon', value: 'afternoon'},
        {title: 'Evening', value: 'evening'},
        {title: 'Night', value: 'night'},
        {title: 'Flexible', value: 'flexible'},
    ],
    salary_indication: [
        {title: 'Per month', value: 'month'},
        {title: 'Per week', value: 'week'},
        {title: 'Per day', value: 'day'},
    ],
    adsImagesMaxCount: 20,
}
const FILTERS = {
    filterTypes: [
        'name',
        'category_search',
        'now_available',
        'city',
        'awayFromMe',
        'possibilities',
        'with_picture',
        'age',
        'build',
        'iAm',
        'iAmLooking',
        'height',
        'hair_color',
        'penis',
        'cup',
        'nationality',
        'price',
        'availability',
        'speak_languages',
        'meeting_places'],
    ageDefaultValue: [21, 65],
    appearance: {
        build: [],
        height: [1.2, 2.1],
        hair_color: [],
        penis: [10, 50],
        cup: [],
        nationality: [],
    },
    gender: {
        iAm: '',
        iAmLooking: '',
    },
    price: [0, 250],
    search: {
        name: '',
        category: {title: 'All Categories', value: '*'}
    },
    appearanceTitles: {
        build: "Build",
        height: "Height",
        hair_color: "Hair color",
        penis: "Penis length",
        cup: "Cup size",
        nationality: "Nationality",
    }
}

const PAGE_NAMES = ['login', 'register', 'reset-password', 'verification'];

const UI = {
    toastTypes: ['info', 'warning', 'error', 'success'],
    button: {
        types: ['cta', 'default', 'primary', 'alt', 'white-bg', 'alert'],
    }
}

const BREAKPOINTS = {
    keys: {
        xss: 480,
        xs: 576,
        sm: 767,
        md: 991,
        lg: 1200,
        xl: 1920,
    },
};

const DEVICE_CHECKING = {
    mobile: 767,
    tablet: [768, 991],
    desktop: 992,
}

const VALIDATORS = {
    WEBSITE_PATTERN                  : /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g,
    EMAIL_PATTERN                   : /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i,
    UPPERCASE_LOWERCASE_PATTERN     : /([a-z].*[A-Z])|([A-Z].*[a-z])/,
    DIGIT_PATTERN                   : /\d+/i,
}

const STATUSES = {
    0: {
        color: '#989898',
        text: 'Offline',
    }, 1: {
        color: '#3DCB4D',
        text: 'Online',
    }, 2: {
        color: '#989898',
        text: 'Expired',
    }, 3: {
        color: '#F89E04',
        text: 'Waiting for moderation',
    }, 4: {
        color: '#989898',
        text: 'Passed event',
    }
};
const ACCOUNT_ROLE_TYPES = [
    {title: 'In Person', value: 'person'},
    {title: 'Suppose', value: 'suppose'},
    {title: 'Company', value: 'company'},
];

const CREATE_AD_PROGRESS_STEPS = [
    {title: 'Gegevens', key: 'one'},
    {title: 'Categorie', key: 'two'},
    {title: 'Advertentie', key: 'three'},
    {title: 'Fotos', key: 'four'},
    {title: 'Plaatsen', key: 'five'},
];

const PRICES = {
    category: {
        'lady-pleasure': 0.95,
        'gangbang': 0.5,
        'erotic-massage': 0.1,
        'sm': 1.95,
        'cam-telephone-sex': 1.90,
        'man': 2.95,
        'free-sex-contact': 0,
        'payment-in-nature': 0,
        'erotic-vacancies': 10,
        'sex-articles': 0,
        'miscellaneous': 10,
        'gay-bi': 1,
    },
    duration: [
        {title: '1h', value: 1},
        {title: '2h', value: 2},
        {title: '3h', value: 3},
        {title: '4h', value: 4},
    ],
    audience: [
        {title: '1h', value: 1},
        {title: '2h', value: 2},
        {title: '3h', value: 3},
        {title: '4h', value: 4},
    ]
}

const LANGUAGES_OF_WEBSITE = [
    {value: 'netherlands', title: 'Netherlands', imgPath: '/images/flags/netherlands.jpg'},
    {value: 'english', title: 'English', imgPath: '/images/flags/england.png'},
    {value: 'deutsch', title: 'Deutsch', imgPath: '/images/flags/german.jpg'}
];

const ADVERTISEMENTS = {
    periodCountOptions: [
        {title: '3', value: 3},
        {title: '4', value: 4},
        {title: '5', value: 5},
        {title: '6', value: 6},
    ],
    periodIntervalOptions: [
        {title: 'Day', value: 1},
        {title: 'Week', value: 2},
        {title: 'Month', value: 3},
    ]
};

const COUNTRY_CODES = [
    {key: 'nl', phoneCode: '(+31) 99 99999999', title: 'Netherlands', value: 'nl', flagSrc: '/images/flags/nl.png'},
    {key: 'be', phoneCode: '(+32) 9999 99 99 99', title: 'Belgium', value: 'be', flagSrc: '/images/flags/be.png'},
    {key: 'de', phoneCode: '(+49) 99999 9999999', title: 'Germany', value: 'de', flagSrc: '/images/flags/de.png'},
]

export {
    COUNTRY_CODES,
    UI,
    BREAKPOINTS,
    DEVICE_CHECKING,
    GLOBAL_CONSTANTS,
    FILTERS,
    VALIDATORS,
    PAGE_NAMES,
    STATUSES,
    ACCOUNT_ROLE_TYPES,
    CREATE_AD_PROGRESS_STEPS,
    PRICES,
    LANGUAGES_OF_WEBSITE,
    ADVERTISEMENTS,
}