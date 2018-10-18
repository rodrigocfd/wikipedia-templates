import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withIntz from '../../intz';
import sameObject from '../../sameObject';

/**
 * Year, month and day textboxes, returning formatted date.
 */
@withIntz()
class YearMonthDay extends React.PureComponent {
	static propTypes = {
		name: PropTypes.string,
		onChange: PropTypes.func
	};

	state = {
		yer: '',
		mon: '',
		day: ''
	};

	componentDidUpdate(prevProps, prevState) {
		if (sameObject(prevProps, this.props) &&
			sameObject(prevState, this.state)) return;

		const {t} = this.props;
		const {yer, mon, day} = this.state;
		const monthNames = [null, t`January`, t`February`, t`March`, t`April`,
			t`May`, t`June`, t`July`, t`August`, t`September`, t`October`,
			t`November`, t`December`];
		let formatted = '';

		if (yer && mon && day) {
			formatted = t('DateDMY {1} {0}, {2}', day, monthNames[mon], yer);
		} else if (yer && mon && !day) {
			formatted = t('DateMY {0}, {1}', monthNames[mon], yer);
		} else if (yer && !mon && !day) {
			formatted = yer;
		} else if (yer || mon || day) {
			formatted = `${yer}-${mon}-${day}`;
		}

		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: formatted
				}
			});
		}
	}

	setToday = () => {
		let today = new Date();
		this.setState({
			yer: today.getFullYear(),
			mon: today.getMonth() + 1,
			day: today.getDate()
		});
	}

	changed = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const {yer, mon, day} = this.state;
		const {t} = this.props;
		return (
			<Fragment>
				{t`Year`} <InputNum4 type="number" name="yer" value={yer}
					onChange={this.changed}/>
				{t`Month`} <InputNum2 type="number" name="mon" value={mon}
					min="1" max="12" onChange={this.changed}/>
				{t`Day`} <InputNum2 type="number" name="day" value={day}
					min="1" max="31" onChange={this.changed}/>
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

export default YearMonthDay;
