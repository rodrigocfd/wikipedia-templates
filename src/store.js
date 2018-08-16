import {action, observable} from 'mobx';

import en from './locales/en';
import pt from './locales/pt';

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
