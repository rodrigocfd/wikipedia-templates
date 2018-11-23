import React, {Fragment, FunctionComponent, useEffect, useState} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import DayMonthYear from './DayMonthYear';

interface Props {
	name?: string;
	value: DayMonthYear;
	onChange?: (value: DayMonthYear) => void;
}

/**
 * Year, month and day textboxes, returning formatted date.
 */
const YearMonthDay: FunctionComponent<Props> =
		({name, value, onChange}: Props) => {
	const t = useLocale('*_CiteWeb');

	const [date, setDate] = useState(value);

	useEffect(() => {
		onChange && onChange(date);
	}, [date]);

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
				onChange={e => setDate({...date, year: +e.target.value})}/>
			{t`Month`} <InputNum2 type="number" min="1" max="12"
				value={date.month} name={name && `${name}_month`}
				onChange={e => setDate({...date, month: +e.target.value})}/>
			{t`Day`} <InputNum2 type="number" min="1" max="31"
				value={date.day} name={name && `${name}_day`}
				onChange={e => setDate({...date, day: +e.target.value})}/>
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
