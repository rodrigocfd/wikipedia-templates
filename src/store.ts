import {createStore, Dispatch, Reducer} from 'redux';

export interface CustomAction {
	type: 'setLang';
	val: any;
}

export interface StateProps {
	lang: string;
}

export interface DispatchProps {
	dispatch: Dispatch<CustomAction>;
}

/**
 * To be used with connect() function when dispatch is needed.
 */
export const mapDispatchToProps =
	(dispatch: Dispatch<CustomAction>) => ({dispatch});

/**
 * Initial state for application unique Redux store.
 */
const initialState: StateProps = {
	lang: 'en'
};

/**
 * Reducer for application unique Redux store.
 */
const reducer: Reducer<StateProps, CustomAction> =
		(state: StateProps = initialState, action: CustomAction) => {
	switch (action.type) {
	case 'setLang':
		return {...state, lang: action.val};
	default:
		return state;
	}
};

export default createStore(reducer, initialState);
