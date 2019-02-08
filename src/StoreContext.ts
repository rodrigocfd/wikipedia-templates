import {createContext} from 'react';
import {DeepReadonly} from 'ts-essentials';

import {AvailableLangs} from './locales';
import InfoboxAlbumData, {newInfoboxAlbumData} from './sections/infobox-album/InfoboxAlbumData';
import CiteWebData, {newCiteWebData} from './sections/cite-web/CiteWebData';
import CoordData, {newCoordData} from './sections/coord/CoordData';
import TrackListingData, {newTrackListingData} from './sections/track-listing/TrackListingData';

/**
 * Global app store.
 */
interface StoreBase {
	lang: AvailableLangs; // app-wide current language
	album: InfoboxAlbumData;
	cite: CiteWebData;
	coord: CoordData;
	trackListing: TrackListingData;
}

type Store = DeepReadonly<StoreBase>; // store is immutable

type StoreGetSet = [Store, (s: Store) => void]; // tuple returned by useContext()

export function newStore(): Store {
	return {
		lang: 'en',
		album: newInfoboxAlbumData(),
		cite: newCiteWebData(),
		coord: newCoordData(),
		trackListing: newTrackListingData()
	};
}

const StoreContext = createContext(<StoreGetSet>[newStore(), (s: Store): void => {}]);
export default StoreContext;
