import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

/**
 * Ouputs a text from the current locale file, defined in app store.
 */
const Txt = ({store, val}) =>
	store.locale[val] ?
		store.locale[val] :
		`KEY "${val}" NOT FOUND`;

Txt.propTypes = {
	store: PropTypes.any.isRequired,
	val: PropTypes.string.isRequired
};

export default inject('store')(
	observer(Txt)
);