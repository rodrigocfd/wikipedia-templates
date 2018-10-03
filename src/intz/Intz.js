import React from 'react';
import PropTypes from 'prop-types';

import IntzContext from './IntzContext';
import translateStr from './translateStr';

/**
 * Will translate one string according to current provider lang.
 */
const Intz = ({str, args}) => (
	<IntzContext.Consumer>
		{contextData => translateStr(contextData, str, args)}
	</IntzContext.Consumer>
);

Intz.propTypes = {
	str: PropTypes.string.isRequired,
	args: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element]))
};

export default Intz;
