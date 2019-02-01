import React from 'react';
import styled from 'styled-components';
import {DeepReadonly} from 'ts-essentials';

import useLocale from '../../react-use-locale';
import NameYear from './NameYear';

interface Props {
	readonly name?: string;
	value: DeepReadonly<NameYear>;
	onChange: (value: NameYear) => void;
}

/**
 * Previous and next album, with name and year.
 */
function OtherAlbum(p: Props) {
	const t = useLocale('*_InfoboxAlbum');

	function setYear(val?: string) {
		p.onChange && p.onChange({
			...p.value,
			year: val ? +val : ''
		});
	}

	return (<>
		<input type="text" size={40} name={p.name && `${p.name}_name`}
			value={p.value.name}
			onChange={e => p.onChange && p.onChange({...p.value, name: e.target.value})}/>
		{' '} {t`year`} <InputYear type="number" name={p.name && `${p.name}_year`}
			value={p.value.year}
			onChange={e => setYear(e.target.value)}/>
	</>);
}

const InputYear = styled.input`
	width: 75px;
	margin-right: 12px;
`;

export default OtherAlbum;
