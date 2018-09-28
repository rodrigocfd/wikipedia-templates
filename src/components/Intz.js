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
			if (!contextData.locales[contextData.lang][str]) {
				return `[${str}]`;
			}

			if (args) {
				let retJsx = [];
				let regex = new RegExp('\\{\\d+\\}', 'g');
				let match = null;
				let prevStartIdx = 0;
				let curChildKey = 0;

				while ((match = regex.exec(str)) !== null) {
					let token = match[0];
					let replacementIdx = Number(token.substr(1, token.length - 2));
					let tokenIdx = match.index;
					let prevStr = str.substr(prevStartIdx, tokenIdx - prevStartIdx);

					if (prevStr.length) {
						retJsx.push(<Fragment key={curChildKey++}>{prevStr}</Fragment>);
					}

					retJsx.push(<Fragment key={curChildKey++}>{args[replacementIdx]}</Fragment>);
					prevStartIdx = tokenIdx + token.length;
				}

				let lastPart = str.substr(prevStartIdx);
				if (lastPart.length) {
					retJsx.push(<Fragment key={curChildKey++}>{lastPart}</Fragment>);
				}

				return retJsx;
			}

			return contextData.locales[contextData.lang][str];
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
