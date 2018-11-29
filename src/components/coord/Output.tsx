import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import {newDegMinSec} from './DegMinSec';
import CoordData from './CoordData';

interface Props {
	name?: string;
	coords: CoordData;
}

/**
 * Outputs the formatted latitude and longitude.
 */
const Output: FunctionComponent<Props> =
		({name, coords}: Props) => {
	const t = useLocale('*_Coord');

	function isNumber(s: string | null | undefined): boolean {
		return s !== undefined &&
			s !== null &&
			s.length > 0 &&
			!isNaN(parseFloat(s));
	}

	function extractLatLng(): [number, number] | null {
		if (coords.latLng === '') {
			return null;
		}

		let ll: string[] = coords.latLng.split(',');
		if (ll.length !== 2) {
			return null;
		}

		ll[0] = ll[0].trim();
		ll[1] = ll[1].trim();
		if (!isNumber(ll[0]) || !isNumber(ll[1])) {
			return null;
		}

		return [parseFloat(ll[0]), parseFloat(ll[1])];
	}

	function formatOutput(): string {
		let ll = extractLatLng();
		if (ll === null) {
			return '';
		}

		let lat = newDegMinSec(ll[0]);
		let lng = newDegMinSec(ll[1]);

		return '{{' + t`Coord`
			+ `|${lat.d}|${lat.m}|${lat.s}`
			+ '|' + (lat.dec < 0 ? t`S` : t`N`)
			+ `|${lng.d}|${lng.m}|${lng.s}`
			+ '|' + (lng.dec < 0 ? t`W` : t`E`)
			+ `|display=${coords.display}`
		+ '}}';
	}

	return (
		<div>
			<TextareaOut name={name} value={formatOutput()} readOnly
				onClick={e => e.currentTarget.select()}></TextareaOut>
		</div>
	);
};

const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	width: 700px;
	height: 60px;
	margin-top: 20px;
	padding: 10px;
`;

export default Output;
