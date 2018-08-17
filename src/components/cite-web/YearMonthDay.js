import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
				<Txt val="Year"/> <InputNum4 type="number" innerRef={e => this.txYer = e} onChange={this.changed}/>
				<Txt val="Month"/> <InputNum2 type="number" min="1" max="12" innerRef={e => this.txMon = e} onChange={this.changed}/>
				<Txt val="Day"/> <InputNum2 type="number" min="1" max="31" innerRef={e => this.txDay = e} onChange={this.changed}/>
			</Fragment>
		);
	}
}

const InputNum2 = styled.input`
	width: 50px;
	margin-right: 12px;
`;
const InputNum4 = styled.input`
	width: 75px;
	margin-right: 12px;
`;

export default YearMonthDay;
