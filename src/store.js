import {action, observable} from 'mobx';

import en from './locale/en';
import pt from './locale/pt';

const loadedJsonLocales = {en, pt};

/**
 * Application unique MobX store.
 */
class Store {
	@observable locale = loadedJsonLocales['en'];

	@action changeLocale(lang) {
		this.locale = loadedJsonLocales[lang];
	}
}

export default new Store();
