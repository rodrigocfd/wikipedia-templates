import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import NameYear from './NameYear';

interface Props {
	name?: string;
	value: NameYear;
	onChange?: (value: NameYear) => void;
}

/**
 * Previous and next album, with name and year.
 */
const OtherAlbum = memo<Props>(p => {
	const t = useLocale('*_InfoboxAlbum');

	function setYear(val?: string) {
		p.onChange && p.onChange({
			...p.value,
			year: val ? +val : ''
		});
	}

	return (<>
		<input type="text" size={40} name={name && `${name}_name`}
			value={p.value.name}
			onChange={e => p.onChange && p.onChange({...p.value, name: e.target.value})}/>
		{' '} {t`year`} <InputYear type="number" name={name && `${name}_year`}
			value={p.value.year}
			onChange={e => setYear(e.target.value)}/>
	</>);
});

const InputYear = styled.input`
	width: 75px;
	margin-right: 12px;
`;

export default OtherAlbum;
