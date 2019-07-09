import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';

const IframeWebsite: FC = () => {
	const [store] = useStore();

	const hasHttp: boolean = store.citeWeb.url.startsWith('http://') ||
		store.citeWeb.url.startsWith('https://');
	const lenMoreThan10: boolean = store.citeWeb.url.length > 10;

	const theUrl: string = (hasHttp && lenMoreThan10) ?
		store.citeWeb.url : '';

	return (
		theUrl
			? <IframeContents src={theUrl} frameBorder={0} />
			: null
	);
};

const IframeContents = styled.iframe`
	width: 90%;
	height: 400px;
	margin-top: 18px;
	border: 1px solid #ddd;
`;

export default IframeWebsite;
