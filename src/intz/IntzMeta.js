import React from 'react';
import PropTypes from 'prop-types';

import IntzContext from './IntzContext';
import translateStr from './translateStr';

/**
 * Meta information about the internationalization.
 */
const IntzMeta = ({children}) => (
	<IntzContext.Consumer>
		{contextData =>
			children({
				translate: (str, args) => translateStr(contextData, str, args),
				...contextData
			})
		}
	</IntzContext.Consumer>
);

IntzMeta.propTypes = {
	children: PropTypes.func.isRequired
};

export default IntzMeta;
