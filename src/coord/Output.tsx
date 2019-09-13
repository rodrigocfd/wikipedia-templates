import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import TextAreaOut from '../app/TextAreaOut';
import extractLatLng from './extractLatLng';
import {newDegMinSec} from './DegMinSec';

import en from './en.json';
import pt from './pt.json';

const Output: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, 'Output', {en, pt});

	let fmt = '';
	const ll: [number, number] | null = extractLatLng(store.coord.latLng);

	if (ll !== null) {
		const lat = newDegMinSec(ll[0]);
		const lng = newDegMinSec(ll[1]);

		fmt = '{{' + t`Coord`
			+ `|${lat.d}|${lat.m}|${lat.s}`
			+ '|' + (lat.dec < 0 ? t`S` : t`N`)
			+ `|${lng.d}|${lng.m}|${lng.s}`
			+ '|' + (lng.dec < 0 ? t`W` : t`E`)
			+ `|display=${store.coord.display}`
			+ '}}';
	}

	return (
		<div>
			<TextAreaCoord value={fmt} />
		</div>
	);
};

const TextAreaCoord = styled(TextAreaOut)`
	width: 700px;
	height: 50px;
	margin-top: 20px;
`;

export default Output;
