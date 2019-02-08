import React, {memo} from 'react';
import styled from 'styled-components';
import {DeepReadonly} from 'ts-essentials';

import CiteWebData from './CiteWebData';

interface Props {
	readonly name?: string;
	cite: DeepReadonly<CiteWebData>;
}

/**
 * Renders the URL into an iframe.
 */
const Iframe = memo<Props>(p => {
	let theUrl = '';

	if (p.cite.url &&
		(p.cite.url.startsWith('http://') || p.cite.url.startsWith('https://')) &&
		p.cite.url.length > 10)
	{
		theUrl = p.cite.url;
	}

	return (
		!theUrl ? null :
			<DispIframe src={theUrl} name={p.name} frameBorder={0}></DispIframe>
	);
});

const DispIframe = styled.iframe`
	width: 90%;
	height: 400px;
	margin-top: 18px;
	border: 1px solid #ddd;
`;

export default Iframe;
