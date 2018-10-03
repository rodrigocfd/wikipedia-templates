import React from 'react';
import PropTypes from 'prop-types';

import IntzContext from './IntzContext';

/**
 * Meta information about the internationalization.
 */
const Meta = ({children}) => (
	<IntzContext.Consumer>
		{contextData => children(contextData)}
	</IntzContext.Consumer>
);

Meta.propTypes = {
	children: PropTypes.func.isRequired
};

export default Meta;
