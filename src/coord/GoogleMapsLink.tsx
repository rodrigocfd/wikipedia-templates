import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import extractLatLng from './extractLatLng';

const GoogleMapsLink: FC = () => {
	const [store] = useStore();

	let url = '';
	const ll = extractLatLng(store.coord.latLng);

	if (ll !== null) {
		url = `http://maps.google.com/maps?ll=${ll[0]},${ll[1]}`
			+ `&spn=0.01,0.01&q=${ll[0]},${ll[1]}`;
	}

	return !url ? null : (
		<Wrap>
			<a target="_blank" href={url}>{url}</a>
		</Wrap>
	);
};

const Wrap = styled.div`
	margin-top: 20px;
`;

export default GoogleMapsLink;
