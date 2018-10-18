import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import withIntz from '../../intz';

/**
 * Main component for app route: home.
 */
const Home = ({t}) => (
	<div>
		<UlList>
			<li><Link to="/cite-web">{t`Cite web`}</Link></li>
			<li><Link to="/track-listing">{t`Track listing`}</Link></li>
		</UlList>
	</div>
);

const UlList = styled.ul`
	line-height: 150%;
`;

export default withIntz('*')(Home);
