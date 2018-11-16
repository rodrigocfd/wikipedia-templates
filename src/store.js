import {createStore} from 'redux';

/**
 * Application unique Redux store.
 */
const initialState = {
	lang: 'en'
};

function reducer(state, {type, payload}) {
	switch (type) {
	case 'setLang':
		return {...state, lang: payload.lang};
	default:
		return state;
	}
}

export default createStore(reducer, initialState);
