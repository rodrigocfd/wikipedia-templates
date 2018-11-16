import {useContext} from 'react';

import LocaleContext from './LocaleContext';
import rawTranslate from './rawTranslate';

/**
 * Hook that returns a function to translate strings.
 */
function useLocale(wildcard) {
	const {curLang, locales} = useContext(LocaleContext);

	return [
		(str, ...args) =>
			rawTranslate(curLang, locales, wildcard, str, ...args),
		curLang
	];
}

export default useLocale;
