import React from 'react';
import PropTypes from 'prop-types';

import IntzContext from './IntzContext';
import translateStr from './translateStr';

/**
 * Meta information about the internationalization.
 */
const Meta = ({children}) => (
	<IntzContext.Consumer>
		{contextData =>
			children({
				translate: (str, args) => translateStr(contextData, str, args),
				...contextData
			})
		}
	</IntzContext.Consumer>
);

Meta.propTypes = {
	children: PropTypes.func.isRequired
};

export default Meta;
