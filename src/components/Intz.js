import React from 'react';
import PropTypes from 'prop-types';

const {Provider, Consumer} = React.createContext();

/**
 * Provider to wrap all the app components.
 */
const IntzProvider = ({children, lang, locales}) => (
	<Provider value={{lang, locales}}>
		{children}
	</Provider>
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
	<Consumer>
		{context => context.locales[context.lang][str] ?
			context.locales[context.lang][str] : `[${str}]`}
	</Consumer>
);

Intz.propTypes = {
	str: PropTypes.string.isRequired
};

/**
 * Meta information about the internationalization.
 */
const IntzMeta = ({children}) => (
	<Consumer>
		{context => children(context)}
	</Consumer>
);

IntzMeta.propTypes = {
	children: PropTypes.func.isRequired
};

export default Intz;
export {IntzProvider, IntzMeta};
