import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import TextAreaOut from '../app/TextAreaOut';
import extractLatLng from './extractLatLng';
import {newDegMinSec} from './DegMinSec';

const Output: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

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

const locales: LocaleList = {
	en: {
		'Coord': 'Coord',
		'E': 'E',
		'N': 'N',
		'S': 'S',
		'W': 'W'
	},
	pt: {
		'Coord': 'Coor dms',
		'E': 'L',
		'N': 'N',
		'S': 'S',
		'W': 'O'
	}
};

export default Output;
