import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';

const Home: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<Wrap>
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

const locales = {
	en: {
		'Cite web': 'Cite web',
		'Coord': 'Coord',
		'Infobox album': 'Infobox album',
		'Track listing': 'Track listing'
	},
	pt: {
		'Cite web': 'Citar web',
		'Coord': 'Coor dms',
		'Infobox album': 'Info/Álbum',
		'Track listing': 'Lista de faixas'
	}
};

export default Home;
