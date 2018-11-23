import React, {Fragment, FunctionComponent, useEffect, useState} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';

interface Props {
	name?: string;
	value?: Date;
	onChange?: (value: Date) => void;
}

/**
 * Year, month and day textboxes, returning formatted date.
 */
const YearMonthDay: FunctionComponent<Props> =
		({name, value, onChange}: Props) => {
	const t = useLocale('*_CiteWeb');

	const [date, setDate] = useState(undefined);

	useEffect(() => {
		onChange && onChange(date);
	}, [date]);

	function genName(suffix: string): string | undefined {
		return name ? `${name}_${suffix}` : undefined;
	}

	return (
		<Fragment>
			{t`Year`} <InputNum4 type="number" name={genName('year')}
				value={date ? date.getFullYear()}
				onChange={e => setDate(new Date(
					+e.target.value, date.getMonth(), date.getDate()))}/>
			{t`Month`} <InputNum2 type="number" name={genName('month')}
				min="1" max="12" value={date.getMonth() + 1}
				onChange={e => setDate(new Date(
					date.getFullYear(), +e.target.value - 1, date.getDate()))}/>
			{t`Day`} <InputNum2 type="number" name={genName('day')}
				min="1" max="31" value={date.getDate()}
				onChange={e => setDate(new Date(
					date.getFullYear(), date.getMonth(), +e.target.value))}/>
			<button onClick={() => setDate(new Date())}>{t`today`}</button>
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
