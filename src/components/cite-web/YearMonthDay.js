import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Txt from '../Txt';

/**
 * Year, month and day textboxes, returning formatted date.
 */
class YearMonthDay extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		onChange: PropTypes.func
	}

	txYer = null;
	txMon = null;
	txDay = null;

	changed = () => {
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: this.txYer.value + '-' + this.txMon.value + '-' + this.txDay.value
				}
			});
		}
	}

	render() {
		return (
			<Fragment>
				<Txt val="Year"/> <input type="number" ref={e => this.txYer = e} onChange={this.changed}/>
				<Txt val="Month"/> <input type="number" min="1" max="12" ref={e => this.txMon = e} onChange={this.changed}/>
				<Txt val="Day"/> <input type="number" min="1" max="31" ref={e => this.txDay = e} onChange={this.changed}/>
			</Fragment>
		);
	}
}

export default YearMonthDay;
