import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

interface Props {
	latLng?: string;
}

/**
 * Displays a Google Maps link pointing to the given coordinates.
 */
const GoogleMapsLink: FunctionComponent<Props> =
		({latLng}: Props) => {

	function formatUrl(): string {
		if (!latLng) {
			return '';
		}
		const ll = latLng.split(',');
		return `http://maps.google.com/maps?ll=${ll[0]},${ll[1]}`
			+ `&spn=0.01,0.01&q=${ll[0]},${ll[1]}`;
	}

	return !latLng ? null : (
		<DivLink>
			<a href={formatUrl()}>{formatUrl()}</a>
		</DivLink>
	);
};

const DivLink = styled.div`
	margin-top: 20px;
`;

export default GoogleMapsLink;
