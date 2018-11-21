import React, {FormEvent, Fragment, FunctionComponent, useEffect, useState} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';

interface YearMonthDayProps {
	name: string;
	value?: string;
	onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

/**
 * Year, month and day textboxes, returning formatted date.
 */
const YearMonthDay: FunctionComponent<YearMonthDayProps> =
		({name, value, onChange}: YearMonthDayProps) => {
	const t = useLocale('*_CiteWeb');

	const [year, setYear] = useState('');
	const [month, setMonth] = useState('');
	const [day, setDay] = useState('');

	useEffect(() => {
		if (onChange) {
			onChange({
				target: {
					name: name,
					value: formattedDate()
				}
			});
		}
	});

	function formattedDate(): string {
		const monthNames = [null, t`January`, t`February`, t`March`, t`April`,
			t`May`, t`June`, t`July`, t`August`, t`September`, t`October`,
			t`November`, t`December`];
		let formatted = '';

		if (year && month && day) {
			formatted = t('DateDMY {1} {0}, {2}', day, monthNames[+month], year);
		} else if (year && month && !day) {
			formatted = t('DateMY {0}, {1}', monthNames[+month], year);
		} else if (year && !month && !day) {
			formatted = year;
		} else if (year || month || day) {
			formatted = `${year}-${month}-${day}`;
		}

		return formatted;
	}

	function setToday(): void {
		let today = new Date();
		setYear(today.getFullYear().toString());
		setMonth((today.getMonth() + 1).toString());
		setDay(today.getDate().toString());
	}

	return (
		<Fragment>
			{t`Year`} <InputNum4 type="number" name="yer" value={year}
				onChange={e => setYear(e.target.value)}/>
			{t`Month`} <InputNum2 type="number" name="mon" value={month}
				min="1" max="12" onChange={e => setMonth(e.target.value)}/>
			{t`Day`} <InputNum2 type="number" name="day" value={day}
				min="1" max="31" onChange={e => setDay(e.target.value)}/>
			<button onClick={setToday}>{t`today`}</button>
		</Fragment>
	);
};

const InputNum2 = styled.input`
	width: 50px;
	margin-right: 12px;
`;
const InputNum4 = styled.input`
	width: 75px;
	margin-right: 12px;
`;

export default YearMonthDay;
