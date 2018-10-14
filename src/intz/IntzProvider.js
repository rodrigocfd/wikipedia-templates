import React from 'react';
import PropTypes from 'prop-types';

import IntzContext from './IntzContext';

/**
 * Provider to wrap all the app components.
 */
const IntzProvider = ({children, lang, locales}) => (
	<IntzContext.Provider value={{curLang: lang, locales}}>
		{children}
	</IntzContext.Provider>
);

IntzProvider.propTypes = {
	children: PropTypes.node,
	lang: PropTypes.string.isRequired,
	locales: PropTypes.object.isRequired
};

export default IntzProvider;
