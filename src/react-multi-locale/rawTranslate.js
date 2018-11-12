/**
 * Low-level translate function.
 */
function rawTranslate(contextData, wildcard, str, ...args) {
	const locale = loadLocales(contextData, wildcard);
	if (!locale) {
		return `[MISSING ${contextData.curLang}]`;
	}

	if (str instanceof Array) {
		str = str[0];
	}

	let translatedStr = (locale.custom || locale.base)[str];
	if (translatedStr === undefined) {
		translatedStr = locale.base[str];
		if (translatedStr === undefined) {
			console.error(`Key not found: "${str}".`);
			return `[${str}]`;
		}
	}

	return args.length ?
		interpolateString(translatedStr, args) : translatedStr;
}


function loadLocales(contextData, wildcard) {
	const {locales, curLang} = contextData;

	const base = locales[curLang];
	if (!base) {
		console.error(`Locale source not found: "${curLang}".`);
		return false;
	}

	const customKey = wildcard.replace('*', curLang);
	if (customKey === curLang) {
		return {base, custom: null};
	}

	const custom = locales[customKey];
	return {base, custom: custom || null};
}


function interpolateString(translatedStr, args) {
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

export default rawTranslate;
