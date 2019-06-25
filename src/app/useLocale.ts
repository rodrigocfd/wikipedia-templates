import Lang from './Lang';
import LocaleBatch from './LocaleBatch';

type TrFunc = (str: string | TemplateStringsArray,
	...args: (string | number)[]) => string;

/**
 * Returns the function used to retrieve string from locale key.
 */
function useLocale(curLang: Lang, locales: LocaleBatch): TrFunc {
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

export default useLocale;
