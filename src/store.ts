import {createStore, Dispatch, Reducer} from 'redux';

import Cite, {newCite} from './components/cite-web/Cite';
import Track from './components/track-listing/Track';

/**
 * Initial state for application unique Redux store.
 */
export interface State {
	lang: string;
	cite: Cite;
	tracks: Track[];
}

const initialState: State = {
	lang: 'en',
	cite: newCite(),
	tracks: []
};

/**
 * Generic action and dispatch.
 */
export type PossibleActionTypes = 'setLang' | 'setCite' | 'setTracks';

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
		case 'setCite':   return {...state, cite: action.val};
		case 'setTracks': return {...state, tracks: action.val};
		default: return state;
	}
};

export default createStore(reducer, initialState);
