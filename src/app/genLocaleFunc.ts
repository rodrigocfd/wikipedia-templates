import Lang from './Lang';
import LocaleList from './LocaleList';

export type LocaleFunc = (str: string | TemplateStringsArray,
	...args: (string | number)[]) => string;

/**
 * Returns the function used to retrieve string from locale key.
 */
function genLocaleFunc(curLang: Lang, locales: LocaleList): LocaleFunc {
	function t(key: string | TemplateStringsArray,
			...args: (string | number)[]): string {
		const curLocale = locales[curLang];
		let theKey = (key instanceof Array) ? key[0] : key;
		if (theKey === '') {
			return '';
		}
		const ret = curLocale[theKey];
		if (ret === undefined) {
			console.error(`Key not found: "${theKey}".`);
			return `[${theKey}]`;
		}
		return ret;
	}
	return t;
}

export default genLocaleFunc;
