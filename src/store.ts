import {createStore, Dispatch, Reducer} from 'redux';

import {Langs} from './locales';
import Album, {newAlbum} from './sections/infobox-album/Album';
import Cite, {newCite} from './sections/cite-web/Cite';
import CoordData, {newCoordData} from './sections/coord/CoordData';
import Track from './sections/track-listing/Track';

/**
 * Initial state for application unique Redux store.
 */
export interface State {
	lang: Langs; // app-wide current language
	album: Album; // infobox-album
	cite: Cite; // cite-web
	coords: CoordData; // coords
	tracks: Track[]; // track-listing
}

const initialState: State = {
	lang: 'en',
	album: newAlbum(),
	cite: newCite(),
	coords: newCoordData(),
	tracks: []
};

/**
 * Generic action and dispatch.
 */
export type PossibleActionTypes = 'setLang' |
	'setAlbum' | 'setCite' | 'setCoords' | 'setTracks';

export interface Action {
	type: PossibleActionTypes;
	val: any;
}

export interface DispatchProps {
	dispatchNow: (type: PossibleActionTypes, val: any) => Action;
}

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	dispatchNow: (type: PossibleActionTypes, val: any) =>
		dispatch({type, val})
});

/**
 * Reducer for application unique Redux store.
 */
const reducer: Reducer<State, Action> =
		(state: State = initialState, action: Action) => {
	switch (action.type) {
		case 'setLang':   return {...state, lang: action.val};
		case 'setAlbum':  return {...state, album: action.val};
		case 'setCite':   return {...state, cite: action.val};
		case 'setCoords': return {...state, coords: action.val};
		case 'setTracks': return {...state, tracks: action.val};
		default: return state;
	}
};

export default createStore(reducer, initialState);
