import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import withIntz from '../../intz';

/**
 * Outputs a single Wikipedia template parameter, if value is given.
 */
const OutParam = ({t, name, val}) =>
	val ?
		<Fragment> |{t(name)}={val}</Fragment> :
		null;

OutParam.propTypes = {
	name: PropTypes.string.isRequired,
	val: PropTypes.any
};

export default withIntz('*_CiteWeb')(OutParam);
