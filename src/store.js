import {observable} from 'mobx';

/**
 * Application unique MobX store.
 */
class Store {
	@observable lang = 'en';
}

export default new Store();
