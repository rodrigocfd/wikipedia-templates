import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import useStore from '../app/ContextStore';
import useLocale from '../app/useLocale';
import locales from './locales';

interface Props { }

const CiteWeb: FC<Props> = () => {
	const [store] = useStore();
	const t = useLocale(store.lang, locales);

	return (
		<div>
			<div>{t`Cite web`}</div>
			<div><Link to="/">{t`Home`}</Link></div>
		</div>
	);
};

export default CiteWeb;
