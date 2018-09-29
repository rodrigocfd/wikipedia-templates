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
		const monthNames = [null, <Intz str="January"/>, <Intz str="February"/>, <Intz str="March"/>,
			<Intz str="April"/>, <Intz str="May"/>, <Intz str="June"/>, <Intz str="July"/>, <Intz str="August"/>,
			<Intz str="September"/>, <Intz str="October"/>, <Intz str="November"/>, <Intz str="December"/>];

		let yer = this.txtYer.value;
		let mon = this.txtMon.value;
		let day = this.txtDay.value;

		if (yer && mon && day) {
			return <Intz str="Date {1} {0}, {2}" args={[day, monthNames[mon], yer]}/>;
		} else if (yer && !mon && !day) {
			return yer;
		}

		return (yer || mon || day) ? `${yer}-${mon}-${day}` : '';
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

	setToday = () => {
		let today = new Date();
		this.txtYer.value = today.getFullYear();
		this.txtMon.value = today.getMonth() + 1;
		this.txtDay.value = today.getDate();
		this.changed();
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
				<button onClick={this.setToday}>today</button>
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
