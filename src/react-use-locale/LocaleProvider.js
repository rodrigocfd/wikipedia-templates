import React from 'react';
import PropTypes from 'prop-types';

import LocaleContext from './LocaleContext';

/**
 * Provider to wrap all the app components.
 */
const LocaleProvider = ({children, lang, locales}) => (
	<LocaleContext.Provider value={{curLang: lang, locales}}>
		{children}
	</LocaleContext.Provider>
);

LocaleProvider.propTypes = {
	children: PropTypes.node,
	lang: PropTypes.string.isRequired,
	locales: PropTypes.object.isRequired
};

export default LocaleProvider;
