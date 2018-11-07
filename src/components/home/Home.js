import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import withLocale from '../../react-multi-locale';

/**
 * Main component for app route: home.
 */
function Home({t}) {
	return (
		<div>
			<UlList>
				<li><Link to="/cite-web">{t`Cite web`}</Link></li>
				<li><Link to="/track-listing">{t`Track listing`}</Link></li>
			</UlList>
		</div>
	);
}

const UlList = styled.ul`
	line-height: 150%;
`;

export default withLocale('*')(Home);
