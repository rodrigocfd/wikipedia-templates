import React, {Fragment, memo, useEffect, useState} from 'react';
import styled from 'styled-components';

import useLocale from '../react-use-locale';
import DayMonthYear, {newDayMonthYear, sameDayMonthYear} from './DayMonthYear';

interface Props {
	name?: string;
	value: DayMonthYear;
	onChange?: (value: DayMonthYear) => void;
}

function areEqual(prevProps: Props, nextProps: Props): boolean {
	return sameDayMonthYear(prevProps.value, nextProps.value);
}

/**
 * Year, month and day textboxes, returning formatted date.
 */
const YearMonthDay = memo<Props>(({name, value, onChange}) => {
	const t = useLocale('*');

	const [date, setDate] = useState(value);

	useEffect(() => {
		onChange && onChange(date);
	}, [date]);

	function setDateField(fieldName: string, val?: string) {
		setDate({
			...date,
			[fieldName]: val ? +val : ''
		});
	}

	function setToday() {
		const now = new Date();
		setDate({
			day: now.getDate(),
			month: now.getMonth() + 1,
			year: now.getFullYear()
		});
	}

	return (
		<Fragment>
			{t`Year`} <InputNum4 type="number"
				value={date.year} name={name && `${name}_year`}
				onChange={e => setDateField('year', e.target.value)}/>
			{t`Month`} <InputNum2 type="number" min={1} max={12}
				value={date.month} name={name && `${name}_month`}
				onChange={e => setDateField('month', e.target.value)}/>
			{t`Day`} <InputNum2 type="number" min={1} max={31}
				value={date.day} name={name && `${name}_day`}
				onChange={e => setDateField('day', e.target.value)}/>
			<button onClick={setToday}>{t`today`}</button>
			{' '} <button onClick={() => setDate(newDayMonthYear())}>{t`clear`}</button>
		</Fragment>
	);
}, areEqual);

const InputNum2 = styled.input`
	width: 50px;
	margin-right: 12px;
`;
const InputNum4 = styled.input`
	width: 75px;
	margin-right: 12px;
`;

export default YearMonthDay;
