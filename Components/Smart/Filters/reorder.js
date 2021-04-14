import NowAvailable from './components/NowAvailable';
import Location from './components/Location';
import Gender from './components/Gender';
import Possibilities from './components/Possibilities';
import Pictures from './components/Pictures';
import Age from './components/Age';
import Appearance from './components/Appearance';
import Pricing from './components/Pricing';
import Availability from './components/Availability';
import SpeakLanguages from './components/SpeakLanguages';
import MeetingPlace from './components/MeetingPlace';
import SelectedFilters from './components/SelectedFilters';
import Search from './components/Search';

export default {
    'search': <Search key="search" />,
    'now_available': <NowAvailable key="now_available" />,
    'location': <Location key="location" />,
    'gender': <Gender key="gender" />,
    'possibilities': <Possibilities key="possibilities" />,
    'pictures': <Pictures key="pictures" />,
    'age': <Age key="age" />,
    'appearance': <Appearance key="appearance" />,
    'pricing': <Pricing key="pricing" />,
    'availability': <Availability key="availability" />,
    'languages': <SpeakLanguages key="languages" />,
    'meet_places': <MeetingPlace key="meet_places" />,
    'selected_filters': <SelectedFilters key="selected_filters" />,
};