import React from 'react';
import styled from 'styled-components';

import withIntz from '../../intz';

const Track = ({t}) => (
	<DivWrap>
		<div>{t`Title`}</div>
		<div>{t`Writer`}</div>
		<div>{t`Length`}</div>
	</DivWrap>
);

const DivWrap = styled.div`
	padding: 6px 0;
`;

export default withIntz('*_TrackListing')(Track);
