import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

interface Props {
	latLng?: string;
}

/**
 * Embeds an OpenStreetMap map centered at the given coordinates.
 */
const OsmMap: FunctionComponent<Props> =
		({latLng}: Props) => {

	function formatSrc() {
		if (!latLng) {
			return '';
		}
		const ll = latLng.split(',');
		return 'https://www.openstreetmap.org/export/embed.html?bbox='
			+ `${ll[1]}%2C${ll[0]}%2C` +
			+ `${ll[1]}%2C${ll[0]}&amp;layer=mapnik`;
	}

	return !latLng ? null : (
		<IframeMap width={700} height={350}
			src={formatSrc()} scrolling="no"></IframeMap>
	);
};

const IframeMap = styled.iframe`
	margin-top: 20px;
	border: 1px solid #ccc;
`;

export default OsmMap;
