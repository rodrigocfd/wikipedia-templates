import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import DeepReadonly from '../../DeepReadonly';
import StaticTextarea from '../StaticTextarea';
import {newDegMinSec} from './DegMinSec';
import CoordData from './CoordData';
import extractLatLng from './extractLatLng';

interface Props {
	readonly name?: string;
	coords: DeepReadonly<CoordData>;
}

/**
 * Outputs the formatted latitude and longitude.
 */
const Output = memo<Props>(p => {
	const t = useLocale('*_Coord');

	let fmt = '';
	let ll = extractLatLng(p.coords.latLng);
	if (ll !== null) {
		let lat = newDegMinSec(ll[0]);
		let lng = newDegMinSec(ll[1]);

		fmt = '{{' + t`Coord`
			+ `|${lat.d}|${lat.m}|${lat.s}`
			+ '|' + (lat.dec < 0 ? t`S` : t`N`)
			+ `|${lng.d}|${lng.m}|${lng.s}`
			+ '|' + (lng.dec < 0 ? t`W` : t`E`)
			+ `|display=${p.coords.display}`
			+ '}}';
	}

	return (
		<div>
			<StaticTextareaOut name={p.name} value={fmt}/>
		</div>
	);
});

const StaticTextareaOut = styled(StaticTextarea)`
	width: 700px;
	height: 50px;
	margin-top: 20px;
`;

export default Output;
