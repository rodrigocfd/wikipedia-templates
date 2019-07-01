import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import DayMonthYear, {newDayMonthYear} from './DayMonthYear';

interface Props {
	readonly name?: string;
	readonly value: DayMonthYear;
	readonly onChange: (value: DayMonthYear) => void;
}

/**
 * Displays fields for year, month and day, receiving and returning
 * a DayMonthYear object.
 */
const YearMonthDay: FC<Props> = p => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	function setDateField(fieldName: string, val?: string) {
		p.onChange({
			...p.value,
			[fieldName]: val ? +val : ''
		});
	}

	function setToday() {
		const now = new Date();
		p.onChange({
			day: now.getDate(),
			month: now.getMonth() + 1,
			year: now.getFullYear()
		});
	}

	return (<>
		{t`Year`} <InputNum4 type="number"
			value={p.value.year} name={p.name && `${p.name}_year`}
			onChange={e => setDateField('year', e.target.value)} />
		{t`Month`} <InputNum2 type="number" min={1} max={12}
			value={p.value.month} name={p.name && `${p.name}_month`}
			onChange={e => setDateField('month', e.target.value)} />
		{t`Day`} <InputNum2 type="number" min={1} max={31}
			value={p.value.day} name={p.name && `${p.name}_day`}
			onChange={e => setDateField('day', e.target.value)} />
		<button onClick={setToday}>{t`today`}</button>
		{' '} <button onClick={() => p.onChange(newDayMonthYear())}>{t`clear`}</button>
	</>);
};

const InputNum2 = styled.input`
	width: 50px;
	margin-right: 12px;
`;
const InputNum4 = styled.input`
	width: 75px;
	margin-right: 12px;
`;

const locales = {
	en: {
		'Year': 'Year',
		'Month': 'Month',
		'Day': 'Day',
		'today': 'today',
		'clear': 'clear'
	},
	pt: {
		'Year': 'Ano',
		'Month': 'Mês',
		'Day': 'Dia',
		'today': 'hoje',
		'clear': 'limpar'
	}
};

export default YearMonthDay;
