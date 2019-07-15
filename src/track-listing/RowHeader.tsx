import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';

const RowHeader: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);
	const fs = store.trackListing.fieldsShown;

	return !store.trackListing.tracks.length ? null : (
		<Wrap>
			<div>#</div>
			<div>{t`Title`}</div>
			{fs.note   && <div>{t`Note`}</div>}
			{fs.writer && <div>{t`Writer`}</div>}
			{fs.lyrics && <div>{t`Lyrics`}</div>}
			{fs.music  && <div>{t`Music`}</div>}
			<div>{t`Duration`}</div>
		</Wrap>
	);
};

const Wrap = styled.div`
	margin-top: 18px;

	& > div:first-of-type {
		display: inline-block;
		width: 24px;
		margin-right: 8px;
		text-align: right;
	}
	& > div {
		display: inline-block;
		margin: 0 4px;
		width: 180px;
	}
	& > div:last-of-type {
		width: 70px;
	}
`;

const locales: LocaleList = {
	en: {
		'Title': 'Títle',
		'Note': 'Note',
		'Writer': 'Writer',
		'Lyrics': 'Lyrics',
		'Music': 'Music',
		'Duration': 'Duration'
	},
	pt: {
		'Title': 'Título',
		'Note': 'Nota',
		'Writer': 'Escritor',
		'Lyrics': 'Letra',
		'Music': 'Música',
		'Duration': 'Duração'
	}
};

export default RowHeader;
