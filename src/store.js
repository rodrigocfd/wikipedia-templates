import {createStore} from 'redux';

/**
 * Application unique Redux store.
 */
const initialState = {
	lang: 'en'
};

function reducer(state, {type, val}) {
	switch (type) {
	case 'setLang':
		return {...state, lang: val};
	default:
		return state;
	}
}

export default createStore(reducer, initialState);
