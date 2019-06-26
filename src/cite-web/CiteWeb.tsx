import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import locales from './locales';

interface Props { }

const CiteWeb: FC<Props> = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<div>
			<div>{t`Cite web`}</div>
			<div><Link to="/">{t`Home`}</Link></div>
		</div>
	);
};

export default CiteWeb;
