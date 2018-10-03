import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import IntzContext from './IntzContext';

/**
 * Will translate one string according to current provider lang.
 */
const Intz = ({str, args}) => (
	<IntzContext.Consumer>
		{contextData => {
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
		}}
	</IntzContext.Consumer>
);

Intz.propTypes = {
	str: PropTypes.string.isRequired,
	args: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element]))
};

export default Intz;
