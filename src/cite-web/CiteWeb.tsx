import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import Form from './Form';

const CiteWeb: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<div>
			<h2>{t`Cite web`}</h2>
			<Form />
			<div><Link to="/">{t`Home`}</Link></div>
		</div>
	);
};

const locales = {
	en: {
		'Cite web': 'Cite web'
	},
	pt: {
		'Cite web': 'Citar web'
	}
};

export default CiteWeb;
