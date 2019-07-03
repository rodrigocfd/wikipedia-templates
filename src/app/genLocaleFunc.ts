import {Lang} from './Lang';

/**
 * Describes the locales and its keys/values.
 */
export interface LocaleList {
	[lang: string]: {
		[key: string]: string;
	}
};

type StringOrTaggedTemplate = string | TemplateStringsArray;

export type LocaleFunc = (str: StringOrTaggedTemplate,
	...args: (string | number)[]) => string;

/**
 * Returns the function used to retrieve string from locale key.
 */
export default function genLocaleFunc(curLang: Lang,
		locales: LocaleList): LocaleFunc {

	function t(key: StringOrTaggedTemplate,
			...args: (string | number)[]): string {

		const curLocale = locales[curLang];
		const theKey = (key instanceof Array) ? key[0] : key;
		if (theKey === '') {
			return '';
		}
		const ret = curLocale[theKey];
		if (ret === undefined) {
			console.error(`Key not found: "${theKey}".`);
			return `[${theKey}]`;
		}
		return args.length ? interpolateString(ret, args) : ret;
	}

	return t;
};

function interpolateString(translatedStr: string,
		args: (string | number)[]): string {

	let finalStr = '';
	const regex = new RegExp('\\{\\d+\\}', 'g');
	let match = null;
	let prevStartPos = 0;

	while ((match = regex.exec(translatedStr)) !== null) {
		const token = match[0];
		const tokenPos = match.index;
		const replacementIdx = Number(token.substr(1, token.length - 2));

		const prevStr = translatedStr.substr(prevStartPos,
			tokenPos - prevStartPos);
		if (prevStr.length) {
			finalStr += prevStr;
		}

		let replacement = args[replacementIdx];
		if (replacement === undefined) {
			console.error(`Interpolation {${replacementIdx}} for "${translatedStr}" not found.`);
			replacement = `[MISSING ${replacementIdx}]`
		}
		finalStr += replacement;
		prevStartPos = tokenPos + token.length;
	}

	const lastPart = translatedStr.substr(prevStartPos);
	if (lastPart.length) {
		finalStr += lastPart;
	}

	return finalStr;
}
