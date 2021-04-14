import PopularCategories from 'dummyData/PopularCategories';
import SuggestedData from 'dummyData/SuggestedData';
import Locations from 'dummyData/Locations';
import Possibilities from 'dummyData/Possibilities';
import Appearance from 'dummyData/Appearance';
import Availability from 'dummyData/Availability';
import SpeakLanguages from 'dummyData/SpeakLanguages';
import MeetingPlaces from 'dummyData/MeetingPlaces';
import MyAds from 'dummyData/MyAds';

const fetchPopularCategories = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(PopularCategories)
    })
}

const fetchSuggestedItems = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(SuggestedData)
    })
}

const fetchLocations = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(Locations)
    })
}

const fetchPossibilities = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(Possibilities)
    })
}

const fetchWithPicturesResultsCount = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve({
            is: 1200,
            withOut: 128,
        })
    })
}

const fetchAppearance = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(Appearance)
    })
}

const fetchPrice = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve({
            min: 0,
            max: 250,
        })
    })
}

const fetchAvailability = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(Availability)
    })
}

const fetchSpeakLanguages = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(SpeakLanguages)
    })
}

const fetchMeetingPlaces = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(MeetingPlaces)
    })
}

const fetchMyAds = () => {
    // Todo need to make server call for fetching current data
    return new Promise((resolve, _reject) => {
        resolve(MyAds)
    })
}

export default {
    fetchPopularCategories,
    fetchSuggestedItems,
    fetchLocations,
    fetchPossibilities,
    fetchWithPicturesResultsCount,
    fetchAppearance,
    fetchPrice,
    fetchAvailability,
    fetchSpeakLanguages,
    fetchMeetingPlaces,
    fetchMyAds,
}