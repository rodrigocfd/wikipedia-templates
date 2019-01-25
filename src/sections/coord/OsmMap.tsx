import React, {memo} from 'react';
import styled from 'styled-components';

import extractLatLng from './extractLatLng';

interface Props {
	readonly latLng?: string;
}

/**
 * Embeds an OpenStreetMap map centered at the given coordinates.
 */
const OsmMap = memo<Props>(p => {
	let url = '';
	let ll = extractLatLng(p.latLng);
	if (ll !== null) {
		url = 'https://www.openstreetmap.org/export/embed.html?bbox='
			+ `${ll[1]}%2C${ll[0]}%2C` +
			+ `${ll[1]}%2C${ll[0]}&amp;layer=mapnik`;
	}

	return !url ? null : (
		<IframeMap width={700} height={350}
			src={url} scrolling="no"></IframeMap>
	);
});

const IframeMap = styled.iframe`
	margin-top: 20px;
	border: 1px solid #ccc;
`;

export default OsmMap;
