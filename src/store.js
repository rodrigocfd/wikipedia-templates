import {createStore} from 'vuex';

export default createStore({
	state: {
		lang: 'en',
	},
	getters: {

	},
	mutations: {
		setLang(state, val) {
			state.lang = val;
		},
	},
});