import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Intz from '../../intz';

/**
 * Outputs a single Wikipedia template parameter, if value is given.
 */
const OutParam = ({name, val}) =>
	val ?
		<Fragment> |<Intz str={name}/>={val}</Fragment> :
		null;

OutParam.propTypes = {
	name: PropTypes.string.isRequired,
	val: PropTypes.any
};

export default OutParam;
