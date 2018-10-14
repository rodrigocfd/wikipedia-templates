import React from 'react';
import PropTypes from 'prop-types';

import IntzContext from './IntzContext';

/**
 * Provider to wrap all the app components.
 */
const Provider = ({children, lang, locales}) => (
	<IntzContext.Provider value={{curLang: lang, locales}}>
		{children}
	</IntzContext.Provider>
);

Provider.propTypes = {
	children: PropTypes.node,
	lang: PropTypes.string.isRequired,
	locales: PropTypes.object.isRequired
};

export default Provider;
