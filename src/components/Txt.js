import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

/**
 * Ouputs a text from the current locale file, defined in app store.
 */
@inject('store')
@observer
class Txt extends React.Component {
	static propTypes = {
		store: PropTypes.any.isRequired,
		val: PropTypes.string.isRequired
	};

	render() {
		let {store, val} = this.props;
		return store.locale[val] ?
			store.locale[val] :
			`KEY "${val}" NOT FOUND`;
	}
}

export default Txt;
