import {createContext} from 'react';
import {DeepReadonly} from 'ts-essentials';

import {AvailableLangs} from './locales';
import InfoboxAlbumData, {newInfoboxAlbumData} from './sections/infobox-album/InfoboxAlbumData';
import CiteWebData, {newCiteWebData} from './sections/cite-web/CiteWebData';
import CoordData, {newCoordData} from './sections/coord/CoordData';
import Track from './sections/track-listing/Track';

/**
 * Global app store.
 */
interface StoreBase {
	lang: AvailableLangs; // app-wide current language
	album: InfoboxAlbumData; // infobox-album
	cite: CiteWebData; // cite-web
	coord: CoordData; // coords
	tracks: Track[]; // track-listing
}

type Store = DeepReadonly<StoreBase>; // store is immutable

type StoreGetSet = [Store, (s: Store) => void]; // tuple returned by useContext()

export function newStore(): Store {
	return {
		lang: 'en',
		album: newInfoboxAlbumData(),
		cite: newCiteWebData(),
		coord: newCoordData(),
		tracks: []
	};
}

const StoreContext = createContext(<StoreGetSet>[newStore(), (s: Store): void => {}]);
export default StoreContext;
