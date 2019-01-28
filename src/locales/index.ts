import {ManyLocales} from '../react-use-locale';

import en from './en.json';
import pt from './pt.json';
import en_InfoboxAlbum from './en_InfoboxAlbum.json';
import pt_InfoboxAlbum from './pt_InfoboxAlbum.json';
import en_CiteWeb from './en_CiteWeb.json';
import pt_CiteWeb from './pt_CiteWeb.json';
import en_Coord from './en_Coord.json';
import pt_Coord from './pt_Coord.json';
import en_TrackListing from './en_TrackListing.json';
import pt_TrackListing from './pt_TrackListing.json';

/**
 * App locales, files imported as JSON.
 * Grouped to ease the load in App component.
 */
const locales: ManyLocales = {
	en, pt,
	en_InfoboxAlbum, pt_InfoboxAlbum,
	en_CiteWeb, pt_CiteWeb,
	en_Coord, pt_Coord,
	en_TrackListing, pt_TrackListing
};
export default locales;

/**
 * Names of available languages.
 */
export interface LangDescription {
	id: string;
	name: string;
}
export const langDescriptions: LangDescription[] = [
	{id: 'en', name: 'English'},
	{id: 'pt', name: 'Portuguese'}
];

export type AvailableLangs = 'en' | 'pt';
