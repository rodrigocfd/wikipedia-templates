import {createStore, Dispatch, Reducer} from 'redux';

export interface Action {
	type: 'setLang';
	val: any;
}

export interface StateProps {
	lang: string;
}

export interface DispatchProps {
	dispatch: Dispatch<Action>;
}

/**
 * To be used with connect() function when dispatch is needed.
 */
export const mapDispatchToProps =
	(dispatch: Dispatch<Action>) => ({dispatch});

/**
 * Initial state for application unique Redux store.
 */
const initialState: StateProps = {
	lang: 'en'
};

/**
 * Reducer for application unique Redux store.
 */
const reducer: Reducer<StateProps, Action> =
		(state: StateProps = initialState, action: Action) => {
	switch (action.type) {
	case 'setLang':
		return {...state, lang: action.val};
	default:
		return state;
	}
};

export default createStore(reducer, initialState);
