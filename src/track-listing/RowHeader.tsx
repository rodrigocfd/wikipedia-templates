import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import {genLocaleFunc2} from '../app/genLocaleFunc';

import en from './en.json';
import pt from './pt.json';

const RowHeader: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc2(store.lang, 'RowHeader', {en, pt});
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

export default RowHeader;
