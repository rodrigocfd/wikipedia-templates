import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const {Provider: ContextProvider, Consumer: ContextConsumer} = React.createContext();

/**
 * Provider to wrap all the app components.
 */
const IntzProvider = ({children, lang, locales}) => (
	<ContextProvider value={{lang, locales}}>
		{children}
	</ContextProvider>
);

IntzProvider.propTypes = {
	children: PropTypes.node,
	lang: PropTypes.string.isRequired,
	locales: PropTypes.object.isRequired
};

/**
 * Will translate one string according to current provider lang.
 */
const Intz = ({str, args}) => (
	<ContextConsumer>
		{contextData => {
			let translatedStr = contextData.locales[contextData.lang][str];
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
	</ContextConsumer>
);

Intz.propTypes = {
	str: PropTypes.string.isRequired,
	args: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element]))
};

/**
 * Meta information about the internationalization.
 */
const IntzMeta = ({children}) => (
	<ContextConsumer>
		{contextData => children(contextData)}
	</ContextConsumer>
);

IntzMeta.propTypes = {
	children: PropTypes.func.isRequired
};

export default Intz;
export {IntzProvider, IntzMeta};
