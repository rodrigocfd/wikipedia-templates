import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import Check from '../app/Check';
import FieldsShown from './FieldsShown';

import en from './en.json';
import pt from './pt.json';

const FieldChecks: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'FieldChecks', {en, pt});
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

export default FieldChecks;
