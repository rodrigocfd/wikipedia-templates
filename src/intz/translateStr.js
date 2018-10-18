/**
 * Low-level translate function.
 */
function translateStr(contextData, whichLocale, str, ...args) {
	const localeKey = whichLocale.replace('*', contextData.curLang);
	const localeFile = contextData.locales[localeKey];
	if (!localeFile) {
		console.error(`Locale source not found: "${localeKey}".`);
		return `[MISSING ${localeKey}]`;
	}

	if (str instanceof Array) {
		str = str[0];
	}

	const translatedStr = localeFile[str];
	if (!translatedStr) {
		console.error(`Key not found: "${str}".`);
		return `[${str}]`;
	} else if (!args.length) {
		return translatedStr;
	}

	return interpolateString(translatedStr, args);
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

		let replacement = args[replacementIdx]
		if (!replacement) {
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

export default translateStr;
