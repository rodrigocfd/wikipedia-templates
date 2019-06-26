import React from 'react';

import Lang from './Lang';
import CiteWebData from '../cite-web/CiteWebData';

/**
 * Global app context store.
 */
export interface Store {
	lang: Lang;
	citeWeb: CiteWebData;
};

/**
 * Tuple returned by useContext hook.
 */
type SetStoreFunc = (s: Store) => void;
export type ContextGetSetTuple = [Readonly<Store>, SetStoreFunc];

/**
 * Creates a new store with default values and pushes it onto useState hook
 * of current component; intended to be used at your root component.
 * Return value can be passed to ContextStore.Provider.
 */
export function newStore(): ContextGetSetTuple {
	return React.useState(<Store>{
		lang: 'pt',
		citeWeb: {}
	});
};

/**
 * Context object, to be passed to useContext hook.
 */
export const ContextStore = React.createContext(
	<ContextGetSetTuple>[<Store>{}, (s: Store): void => {}]);

/**
 * Syntactic sugar to useContext hook, with partial setStore function.
 */
type SetPartialStoreFunc = (p: Partial<Store>) => void;

export default function useStore(): [Readonly<Store>, SetPartialStoreFunc] {
	const [store, setStore] = React.useContext(ContextStore);
	function setPartialStore(p: Partial<Store>) {
		setStore({...store, ...p});
	}
	return [store, setPartialStore];
};
