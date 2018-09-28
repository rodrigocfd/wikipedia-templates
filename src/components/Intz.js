import React from 'react';
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
const Intz = ({str}) => (
	<ContextConsumer>
		{contextData => contextData.locales[contextData.lang][str] ?
			contextData.locales[contextData.lang][str] : `[${str}]`}
	</ContextConsumer>
);

Intz.propTypes = {
	str: PropTypes.string.isRequired
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
