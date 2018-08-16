import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import Txt from './Txt';

/**
 * Changes the current locale file.
 */
const ChangeLanguage = ({store}) => (
	<div>
		<Txt val="Language"/>
		{['en', 'pt'].map((lang) =>
			store.locale === lang ?
				lang.toUpperCase() :
				<button key={lang} onClick={e => store.locale = lang}>
					{lang.toUpperCase()}
				</button>
		)}
	</div>
);

ChangeLanguage.propTypes = {
	store: PropTypes.any.isRequired
};

export default inject('store')(
	observer(ChangeLanguage)
);
