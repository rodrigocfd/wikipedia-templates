import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Txt from '../Txt';

/**
 * Outputs a single Wikipedia template parameter, if value is given.
 */
const OutParam = ({name, val}) =>
	val ?
		<Fragment> | <Txt val={name}/>={val}</Fragment> :
		null;

OutParam.propTypes = {
	name: PropTypes.string.isRequired,
	val: PropTypes.any
};

export default OutParam;
