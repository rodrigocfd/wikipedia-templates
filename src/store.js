import {observable} from 'mobx';

import en from './locales/en';
import pt from './locales/pt';

const loadedJsonLocales = {en, pt};

/**
 * Application unique MobX store.
 */
class Store {
	@observable locale = 'en';

	localeString(val) {
		return loadedJsonLocales[this.locale][val];
	}
}

export default new Store();
