import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Intz from '../Intz';

/**
 * Year, month and day textboxes, returning formatted date.
 */
class YearMonthDay extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		onChange: PropTypes.func
	};

	txtYer = null;
	txtMon = null;
	txtDay = null;

	formatDateString() {
		if (this.txtYer.value && this.txtMon.value && this.txtDay.value) {
			return <Intz str="Date {1} {0}, {2}"
				args={[this.txtDay.value, this.txtMon.value, this.txtYer.value]}/>;
		}
		return (this.txtYer.value || this.txtMon.value || this.txtDay.value) ?
			`${this.txtYer.value}-${this.txtMon.value}-${this.txtDay.value}` : '';
	}

	changed = () => {
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: this.formatDateString()
				}
			});
		}
	}

	render() {
		return (
			<Fragment>
				<Intz str="Year"/> <InputNum4 type="number"
					innerRef={e => this.txtYer = e} onChange={this.changed}/>
				<Intz str="Month"/> <InputNum2 type="number" min="1" max="12"
					innerRef={e => this.txtMon = e} onChange={this.changed}/>
				<Intz str="Day"/> <InputNum2 type="number" min="1" max="31"
					innerRef={e => this.txtDay = e} onChange={this.changed}/>
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
