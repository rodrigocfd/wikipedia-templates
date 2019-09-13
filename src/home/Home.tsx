import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useStore from '../store/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import BrowserTitlebar from '../app/BrowserTitlebar';

import en from './en.json';
import pt from './pt.json';

const Home: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, 'Home', {en, pt});

	return (
		<Wrap>
			<BrowserTitlebar title="" />
			<ul>
				<li><Link to="/cite-web">{t`Cite web`}</Link></li>
				<li><Link to="/coord">{t`Coord`}</Link></li>
				<li><Link to="/infobox-album">{t`Infobox album`}</Link></li>
				<li><Link to="/track-listing">{t`Track listing`}</Link></li>
			</ul>
		</Wrap>
	);
};

const Wrap = styled.div`
	& > ul {
		line-height: 150%;
	}
`;

export default Home;
