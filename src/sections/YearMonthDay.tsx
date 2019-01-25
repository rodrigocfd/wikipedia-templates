import React, {Fragment, memo} from 'react';
import styled from 'styled-components';

import useLocale from '../react-use-locale';
import DayMonthYear, {newDayMonthYear} from './DayMonthYear';

interface Props {
	name?: string;
	value: DayMonthYear;
	onChange?: (value: DayMonthYear) => void;
}

/**
 * Year, month and day textboxes, returning formatted date.
 */
const YearMonthDay = memo<Props>(p => {
	const t = useLocale('*');

	function setDateField(fieldName: string, val?: string) {
		p.onChange && p.onChange({
			...p.value,
			[fieldName]: val ? +val : ''
		});
	}

	function setToday() {
		const now = new Date();
		p.onChange && p.onChange({
			day: now.getDate(),
			month: now.getMonth() + 1,
			year: now.getFullYear()
		});
	}

	function setClear() {
		p.onChange && p.onChange(newDayMonthYear());
	}

	return (
		<Fragment>
			{t`Year`} <InputNum4 type="number"
				value={p.value.year} name={name && `${name}_year`}
				onChange={e => setDateField('year', e.target.value)}/>
			{t`Month`} <InputNum2 type="number" min={1} max={12}
				value={p.value.month} name={name && `${name}_month`}
				onChange={e => setDateField('month', e.target.value)}/>
			{t`Day`} <InputNum2 type="number" min={1} max={31}
				value={p.value.day} name={name && `${name}_day`}
				onChange={e => setDateField('day', e.target.value)}/>
			<button onClick={setToday}>{t`today`}</button>
			{' '} <button onClick={setClear}>{t`clear`}</button>
		</Fragment>
	);
});

const InputNum2 = styled.input`
	width: 50px;
	margin-right: 12px;
`;
const InputNum4 = styled.input`
	width: 75px;
	margin-right: 12px;
`;

export default YearMonthDay;
