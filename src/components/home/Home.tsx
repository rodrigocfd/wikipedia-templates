import React, {FunctionComponent, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';

interface Props { }

/**
 * Main component for app route: home.
 */
const Home: FunctionComponent<Props> = () => {
	const t = useLocale('*');

	useEffect(() => {
		document.title = t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<UlList>
				<li><Link to="/cite-web">{t`Cite web`}</Link></li>
				<li><Link to="/coord">{t`Coord`}</Link></li>
				<li><Link to="/track-listing">{t`Track listing`}</Link></li>
			</UlList>
		</div>
	);
};

const UlList = styled.ul`
	line-height: 150%;
`;

export default Home;
