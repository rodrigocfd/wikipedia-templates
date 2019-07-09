import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Check from '../app/Check';
import Fields from './Fields';

const FieldChecks: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);
	const f = store.trackListing.fields;

	function setFields(d: Partial<Fields>) {
		setStore({
			trackListing: {
				...store.trackListing,
				fields: { ...f, ...d }
			}
		});
	}

	return (
		<Wrap>
			<Check label={t`Note`} checked={f.notes}
				onChange={e => setFields({notes: e.target.checked})} />
			<Check label={t`Writer`} checked={f.writer}
				onChange={e => setFields({ writer: e.target.checked})} />
			<Check label={t`Lyrics`} checked={f.lyrics}
				onChange={e => setFields({lyrics: e.target.checked})} />
			<Check label={t`Music`} checked={f.music}
				onChange={e => setFields({music: e.target.checked})} />
		</Wrap>
	);
};

const Wrap = styled.div`
	& > label {
		margin-right: 12px;
	}
`;

const locales: LocaleList = {
	en: {
		'Note': 'Note',
		'Writer': 'Writer',
		'Lyrics': 'Lyrics',
		'Music': 'Music'
	},
	pt: {
		'Note': 'Nota',
		'Writer': 'Escritor',
		'Lyrics': 'Letra',
		'Music': 'Música'
	}
};

export default FieldChecks;
