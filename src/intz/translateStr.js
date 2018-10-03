import React, {Fragment} from 'react';

function translateStr(contextData, str, args) {
	let translatedStr = contextData.locales[contextData.curLang][str];
	if (!translatedStr) {
		return `[${str}]`;
	} else if (!args) {
		return translatedStr;
	}

	let retJsx = [];
	let regex = new RegExp('\\{\\d+\\}', 'g');
	let match = null;
	let prevStartIdx = 0;
	let curChildKey = 0;

	while ((match = regex.exec(translatedStr)) !== null) {
		let token = match[0];
		let replacementIdx = Number(token.substr(1, token.length - 2));
		let tokenIdx = match.index;

		let prevStr = translatedStr.substr(prevStartIdx, tokenIdx - prevStartIdx);
		if (prevStr.length) {
			retJsx.push(prevStr);
		}

		let replacement = args[replacementIdx] || `[MISSING ${replacementIdx}]`;
		retJsx.push(<Fragment key={curChildKey++}>{replacement}</Fragment>);
		prevStartIdx = tokenIdx + token.length;
	}

	let lastPart = translatedStr.substr(prevStartIdx);
	if (lastPart.length) {
		retJsx.push(lastPart);
	}

	return retJsx;
}

export default translateStr;
