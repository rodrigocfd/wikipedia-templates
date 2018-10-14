import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Intz from '../../intz';

/**
 * Main component for app route: home.
 */
const Home = () => (
	<div>
		<UlList>
			<li><Link to="/cite-web"><Intz str="Cite web"/></Link></li>
			<li><Link to="/track-listing"><Intz str="Track listing"/></Link></li>
		</UlList>
	</div>
);

const UlList = styled.ul`
	line-height: 150%;
`;

export default Home;
