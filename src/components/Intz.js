import React from 'react';
import PropTypes from 'prop-types';

const {Provider, Consumer} = React.createContext();

/**
 * Provider to wrap all the app components.
 */
const IntzProvider = ({children, lang, locales}) => (
	<Provider value={locales[lang]}>
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
const Intz = ({val}) => (
	<Consumer>
		{context => context[val] ? context[val] : `[${val}]`}
	</Consumer>
);

Intz.propTypes = {
	val: PropTypes.string.isRequired
};

export default Intz;
export {IntzProvider};
