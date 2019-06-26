import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import locales from './locales';

interface Props { }

const Home: FC<Props> = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<div>
			<ul>
				<li><Link to="/cite-web">{t`Cite web`}</Link></li>
				<li><Link to="/coord">{t`Coord`}</Link></li>
				<li><Link to="/infobox-album">{t`Infobox album`}</Link></li>
				<li><Link to="/track-listing">{t`Track listing`}</Link></li>
			</ul>
		</div>
	);
};

export default Home;
