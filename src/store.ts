import {createStore, Dispatch, Reducer} from 'redux';

import Track from './components/track-listing/Track';

/**
 * Initial state for application unique Redux store.
 */
export interface State {
	lang: string;
	tracks: Track[];
}

const initialState: State = {
	lang: 'en',
	tracks: []
};

/**
 * Generic action and dispatch.
 */
export type PossibleActionTypes = 'setLang' | 'setTracks';

export interface Action {
	type: PossibleActionTypes;
	val: any;
}

export type DispatchNowFunc =
	(type: PossibleActionTypes, val: any) => Action;

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
	case 'setLang':
		return {...state, lang: action.val};
	case 'setTracks':
		return {...state, tracks: action.val};
	default:
		return state;
	}
};

export default createStore(reducer, initialState);
