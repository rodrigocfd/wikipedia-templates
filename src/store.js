import {observable} from 'mobx';

/**
 * Application unique MobX store.
 */
class Store {
	@observable lang = 'pt';
}

export default new Store();
