import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import NameYear from './NameYear';

import en from './en.json';
import pt from './pt.json';

interface Props {
	name?: string;
	value: NameYear;
	onChange: (value: NameYear) => void;
}

const OtherAlbum: FC<Readonly<Props>> = p => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, 'OtherAlbum', {en, pt});

	function setNameYear(d: Partial<NameYear>) {
		p.onChange({...p.value, ...d});
	}

	return (
		<div>
			<input type="text" size={40} name={p.name && `${p.name}_name`}
				value={p.value.name} autoComplete="off"
				onChange={e => setNameYear({name: e.target.value})} />
			{' '} {t`year`} <InputYear type="number" name={p.name && `${p.name}_year`}
				value={p.value.year}
				onChange={e => setNameYear({year: e.target.value ? +e.target.value : ''})} />
		</div>
	);
};

const InputYear = styled.input`
	width: 75px;
	margin-right: 12px;
`;

export default OtherAlbum;
