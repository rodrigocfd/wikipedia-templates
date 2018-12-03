import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

interface Props { }

/**
 * Footer to be shown in all pages.
 */
const AppFooter: FunctionComponent<Props> = () => {

	return (
		<DivBottom>
			<a href="https://github.com/rodrigocfd/wikipedia-templates">GitHub</a>
		</DivBottom>
	);
};

const DivBottom = styled.div`
	padding: 16px 18px;
	font-size: 80%;
	position: fixed
	bottom: 0;
	right: 0;
`;

export default AppFooter;
