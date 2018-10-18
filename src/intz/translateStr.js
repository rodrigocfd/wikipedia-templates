function translateStr(contextData, str, ...args) {
	if (str instanceof Array) {
		str = str[0];
	}

	let translatedStr = contextData.locales[contextData.curLang][str];
	if (!translatedStr) {
		return `[${str}]`;
	} else if (!args.length) {
		return translatedStr;
	}

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

		let replacement = args[replacementIdx] || `[MISSING ${replacementIdx}]`;
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
