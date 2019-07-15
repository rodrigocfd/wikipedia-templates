import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Check from '../app/Check';
import FieldsShown from './FieldsShown';

const FieldChecks: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);
	const fs = store.trackListing.fieldsShown;

	function setFields(d: Partial<FieldsShown>) {
		setStore({
			trackListing: {
				...store.trackListing,
				fieldsShown: { ...fs, ...d }
			}
		});
	}

	return (
		<Wrap>
			<Check label={t`Note`} checked={fs.note}
				onChange={e => setFields({note: e.target.checked})} />
			<Check label={t`Writer`} checked={fs.writer}
				onChange={e => setFields({writer: e.target.checked})} />
			<Check label={t`Lyrics`} checked={fs.lyrics}
				onChange={e => setFields({lyrics: e.target.checked})} />
			<Check label={t`Music`} checked={fs.music}
				onChange={e => setFields({music: e.target.checked})} />
		</Wrap>
	);
};

const Wrap = styled.span`
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
