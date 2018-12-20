import React, {memo, Fragment} from 'react';
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
const OtherAlbum = memo<Props>(({name, value, onChange}) => {
	const t = useLocale('*_InfoboxAlbum');

	function setYear(val?: string) {
		onChange && onChange({
			...value,
			year: val ? +val : ''
		});
	}

	return (
		<Fragment>
			<input type="text" size={40} name={name && `${name}_name`}
				value={value.name}
				onChange={e => onChange && onChange({...value, name: e.target.value})}/>
			{' '} {t`year`} <InputYear type="number" name={name && `${name}_year`}
				value={value.year}
				onChange={e => setYear(e.target.value)}/>
		</Fragment>
	);
});

const InputYear = styled.input`
	width: 75px;
	margin-right: 12px;
`;

export default OtherAlbum;
