import React from 'react';
import PropTypes from 'prop-types';
import {inject} from 'mobx-react';

import Txt from './Txt';

/**
 * Changes the current locale file.
 */
@inject('store')
class ChangeLanguage extends React.Component {
	static propTypes = {
		store: PropTypes.any.isRequired
	};

	changeTo = (lang) => {
		this.props.store.changeLocale(lang);
	}

	render() {
		return (
			<div>
				<Txt val="Language"/>
				<button onClick={e => this.changeTo('en')}>EN</button>
				<button onClick={e => this.changeTo('pt')}>PT</button>
			</div>
		);
	}
}

export default ChangeLanguage;
