import React, {FC} from 'react'
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import NameYear from './NameYear';

interface Props {
	name?: string;
	value: NameYear;
	onChange: (value: NameYear) => void;
}

const OtherAlbum: FC<Readonly<Props>> = p => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	function setNameYear(d: Partial<NameYear>) {
		p.onChange({...p.value, ...d});
	}

	return (<>
		<input type="text" size={40} name={p.name && `${p.name}_name`}
			value={p.value.name} autoComplete="off"
			onChange={e => setNameYear({name: e.target.value})} />
		{' '} {t`year`} <InputYear type="number" name={p.name && `${p.name}_year`}
			value={p.value.year}
			onChange={e => setNameYear({year: e.target.value ? +e.target.value : ''})} />
	</>);
};

const InputYear = styled.input`
	width: 75px;
	margin-right: 12px;
`;

const locales: LocaleList = {
	en: {
		'year': 'year'
	},
	pt: {
		'year': 'ano'
	}
};

export default OtherAlbum;
