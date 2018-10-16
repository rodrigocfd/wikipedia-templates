import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withIntz from '../../intz';

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
		const {t} = this.props;
		const monthNames = [null, t`January`, t`February`, t`March`, t`April`,
			t`May`, t`June`, t`July`, t`August`, t`September`, t`October`,
			t`November`, t`December`];

		let yer = this.txtYer.value;
		let mon = this.txtMon.value;
		let day = this.txtDay.value;

		if (yer && mon && day) {
			return t('DateDMY {1} {0}, {2}', [day, monthNames[mon], yer]);
		} else if (yer && mon && !day) {
			return t('DateMY {0}, {1}', [monthNames[mon], yer]);
		} else if (yer && !mon && !day) {
			return yer;
		}

		return (yer || mon || day) ? `${yer}-${mon}-${day}` : '';
	}

	changed = () => {
console.log('oi ch')
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
		const {t} = this.props;
		return (
			<Fragment>
				{t`Year`} <InputNum4 type="number"
					innerRef={e => this.txtYer = e} onChange={this.changed}/>
				{t`Month`} <InputNum2 type="number" min="1" max="12"
					innerRef={e => this.txtMon = e} onChange={this.changed}/>
				{t`Day`} <InputNum2 type="number" min="1" max="31"
					innerRef={e => this.txtDay = e} onChange={this.changed}/>
				<button onClick={this.setToday}>{t`today`}</button>
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

export default withIntz(YearMonthDay);
