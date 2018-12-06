import React, {memo} from 'react';
import styled from 'styled-components';

import extractLatLng from './extractLatLng';

interface Props {
	latLng?: string;
}

/**
 * Displays a Google Maps link pointing to the given coordinates.
 */
const GoogleMapsLink = memo<Props>(({latLng}) => {
	let url = '';
	let ll = extractLatLng(latLng);
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
