import {createStore, Dispatch, Reducer} from 'redux';

export type PossibleActionTypes = 'setLang';

export interface Action {
	type: PossibleActionTypes;
	val: any;
}

export interface StateProps {
	lang: string;
}

export interface DispatchProps {
	dispatchNow: (type: PossibleActionTypes, val: any) => Action;
}

/**
 * All members are injected, use destructuring to pick the ones you need.
 */
export const mapStateToProps = (state: StateProps): StateProps => state;

/**
 * dispatchNow() abbreaviates dispatch() call.
 */
export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	dispatchNow: (type: PossibleActionTypes, val: any) =>
		dispatch({type, val})
});

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
