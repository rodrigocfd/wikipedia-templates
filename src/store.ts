import {createStore, Dispatch, Reducer} from 'redux';

export interface ReduxAction {
	type: 'setLang';
	val: any;
}

export interface ReduxState {
	lang: string;
}

export interface ReduxDispatch {
	dispatch: Dispatch<ReduxAction>;
}

export type ReduxStateDispatch = ReduxState & ReduxDispatch;

/**
 * To be used with connect() function when dispatch is needed.
 */
export const mapDispatchToProps =
	(dispatch: Dispatch<ReduxAction>) => ({dispatch});

/**
 * Initial state for application unique Redux store.
 */
const initialState: ReduxState = {
	lang: 'en'
};

/**
 * Reducer for application unique Redux store.
 */
const reducer: Reducer<ReduxState, ReduxAction> =
		(state: ReduxState = initialState, action: ReduxAction) => {
	switch (action.type) {
	case 'setLang':
		return {...state, lang: action.val};
	default:
		return state;
	}
};

export default createStore(reducer, initialState);
