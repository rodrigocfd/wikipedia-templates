import {useContext} from 'react';

import LocaleContext from './LocaleContext';
import rawTranslate from './rawTranslate';

/**
 * Hook that returns a function to translate strings.
 */
function useLocale(wildcard) {
	const contextData = useContext(LocaleContext);

	return [
		(str, ...args) =>
			rawTranslate(contextData, wildcard, str, ...args),
		contextData.curLang
	];
}

export default useLocale;
