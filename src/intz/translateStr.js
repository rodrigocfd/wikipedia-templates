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
	let prevStartPos = 0;
	let curChildKey = 0;

	while ((match = regex.exec(translatedStr)) !== null) {
		let token = match[0];
		let tokenPos = match.index;
		let replacementIdx = Number(token.substr(1, token.length - 2));

		let prevStr = translatedStr.substr(prevStartPos, tokenPos - prevStartPos);
		if (prevStr.length) {
			retJsx.push(prevStr);
		}

		let replacement = args[replacementIdx] || `[MISSING ${replacementIdx}]`;
		retJsx.push(<Fragment key={curChildKey++}>{replacement}</Fragment>);
		prevStartPos = tokenPos + token.length;
	}

	let lastPart = translatedStr.substr(prevStartPos);
	if (lastPart.length) {
		retJsx.push(lastPart);
	}

	return retJsx;
}

export default translateStr;
