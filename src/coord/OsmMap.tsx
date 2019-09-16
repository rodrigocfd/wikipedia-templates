import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/useStore';
import extractLatLng from './extractLatLng';

const OsmMap: FC = () => {
	const [store] = useStore();

	let url = '';
	const ll = extractLatLng(store.coord.latLng);

	if (ll !== null) {
		url = 'https://www.openstreetmap.org/export/embed.html?bbox='
			+ `${ll[1]}%2C${ll[0]}%2C` +
			+ `${ll[1]}%2C${ll[0]}&amp;layer=mapnik`;
	}

	return !url ? null : (
		<IframeOsmMap width={700} height={350} src={url} scrolling="no" />
	);
};

const IframeOsmMap = styled.iframe`
	margin-top: 20px;
	border: 1px solid #ccc;
`;

export default OsmMap;
