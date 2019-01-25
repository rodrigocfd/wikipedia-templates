import React, {memo} from 'react';
import styled from 'styled-components';

import extractLatLng from './extractLatLng';

interface Props {
	readonly latLng?: string;
}

/**
 * Displays a Google Maps link pointing to the given coordinates.
 */
const GoogleMapsLink = memo<Props>(p => {
	let url = '';
	let ll = extractLatLng(p.latLng);
	if (ll !== null) {
		url = `http://maps.google.com/maps?ll=${ll[0]},${ll[1]}`
			+ `&spn=0.01,0.01&q=${ll[0]},${ll[1]}`;
	}

	return !url ? null : (
		<DivLink>
			<a href={url}>{url}</a>
		</DivLink>
	);
});

const DivLink = styled.div`
	margin-top: 20px;
`;

export default GoogleMapsLink;
