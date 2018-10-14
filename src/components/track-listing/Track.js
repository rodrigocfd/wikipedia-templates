import React from 'react';
import styled from 'styled-components';

const Track = () => (
	<DivWrap>
		<div>Title</div>
		<div>Writer</div>
		<div>Length</div>
	</DivWrap>
);

const DivWrap = styled.div`
	padding: 6px 0;
`;

export default Track;
