import {useContext} from 'react';

import LocaleContext from './LocaleContext';
import rawTranslate from './rawTranslate';

/**
 * Hook that returns a function to translate strings.
 */
function useLocale(wildcard) {
	const {curLang, locales} = useContext(LocaleContext);

	function t(str, ...args) {
		return rawTranslate(curLang, locales, wildcard, str, ...args);
	}

	return t;
}

export default useLocale;
