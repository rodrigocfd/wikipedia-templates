import {useContext} from 'react';

import LocaleContext from './LocaleContext';
import rawTranslate from './rawTranslate';

type tFunc = (str: string | TemplateStringsArray,
	...args: (string | number)[]) => string;

/**
 * Hook that returns a function to translate strings.
 */
export default function useLocale(wildcard: string): tFunc {
	const {curLang, locales} = useContext(LocaleContext);

	function t(str: string | TemplateStringsArray,
			...args: (string | number)[]): string {
		return rawTranslate(curLang, locales, wildcard, str, ...args);
	}

	return t;
}
