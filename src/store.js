import {observable, decorate} from 'mobx';

/**
 * Application unique MobX store.
 */
class Store {
	lang = 'en';
}

decorate(Store, {
	lang: observable
});

export default new Store();
