import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import withLocale from '../../react-multi-locale';

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

export default withLocale('*_CiteWeb')(OutParam);
