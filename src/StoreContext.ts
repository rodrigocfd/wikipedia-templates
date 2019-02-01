import {createContext} from 'react';

import {AvailableLangs} from './locales';
import Album, {newAlbum} from './sections/infobox-album/Album';
import Cite, {newCite} from './sections/cite-web/Cite';
import CoordData, {newCoordData} from './sections/coord/CoordData';
import Track from './sections/track-listing/Track';

/**
 * Global app store.
 */
interface Store {
	lang: AvailableLangs; // app-wide current language
	album: Album; // infobox-album
	cite: Cite; // cite-web
	coord: CoordData; // coords
	tracks: Track[]; // track-listing
}

type StoreGetSet = [Store, (s: Store) => void]; // tuple returned by useContext()

export function newStore(): Store {
	return {
		lang: 'en',
		album: newAlbum(),
		cite: newCite(),
		coord: newCoordData(),
		tracks: []
	};
}

const StoreContext = createContext(<StoreGetSet>[newStore(), (s: Store): void => {}]);
export default StoreContext;
