import {ManyLocales, SingleLocale} from './model';

interface UsableLocale {
	base: SingleLocale;
	custom?: SingleLocale;
}

/**
 * Low-level translate function.
 */
export default function rawTranslate(curLang: string, locales: ManyLocales,
		wildcard: string, str: string | TemplateStringsArray,
		...args: (string | number)[]): string {
	const locale = loadLocales(curLang, locales, wildcard);
	if (locale === null) {
		return `[MISSING ${curLang}]`;
	}

	let userStr = (str instanceof Array) ? str[0] : str;

	let translatedStr = (locale.custom || locale.base)[userStr];
	if (translatedStr === undefined) {
		translatedStr = locale.base[userStr];
		if (translatedStr === undefined) {
			console.error(`Key not found: "${userStr}".`);
			return `[${userStr}]`;
		}
	}

	return args.length ?
		interpolateString(translatedStr, args) : translatedStr;
}

function loadLocales(curLang: string, locales: ManyLocales,
		wildcard: string): UsableLocale | null {
	const base: SingleLocale = locales[curLang];
	if (!base) {
		console.error(`Locale source not found: "${curLang}".`);
		return null;
	}

	const customKey: string = wildcard.replace('*', curLang);
	if (customKey === curLang) {
		return {base};
	}

	const custom: SingleLocale = locales[customKey];
	return {base, custom: custom || undefined};
}

function interpolateString(translatedStr: string,
		args: (string | number)[]): string {
	let finalStr = '';
	let regex = new RegExp('\\{\\d+\\}', 'g');
	let match = null;
	let prevStartPos = 0;

	while ((match = regex.exec(translatedStr)) !== null) {
		let token = match[0];
		let tokenPos = match.index;
		let replacementIdx = Number(token.substr(1, token.length - 2));

		let prevStr = translatedStr.substr(prevStartPos, tokenPos - prevStartPos);
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

	let lastPart = translatedStr.substr(prevStartPos);
	if (lastPart.length) {
		finalStr += lastPart;
	}

	return finalStr;
}
