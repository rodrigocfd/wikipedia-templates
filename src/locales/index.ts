import en from './en.json';
import pt from './pt.json';
import en_CiteWeb from './en_CiteWeb.json';
import pt_CiteWeb from './pt_CiteWeb.json';
import en_TrackListing from './en_TrackListing.json';
import pt_TrackListing from './pt_TrackListing.json';

/**
 * App locales, files imported as JSON.
 * Grouped to ease the load in App component.
 */
const locales = {
	en, en_CiteWeb, en_TrackListing,
	pt, pt_CiteWeb, pt_TrackListing
};

/**
 * Names of available languages.
 */
const langDescriptions = [
	{id: 'en', name: 'English'},
	{id: 'pt', name: 'Portuguese'}
];

export default locales;
export {langDescriptions};
