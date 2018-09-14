import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Intz from '../Intz';

/**
 * Outputs a single Wikipedia template parameter, if value is given.
 */
const OutParam = ({name, val}) =>
	val ?
		<Fragment> |<Intz val={name}/>={val}</Fragment> :
		null;

OutParam.propTypes = {
	name: PropTypes.string.isRequired,
	val: PropTypes.any
};

export default OutParam;
