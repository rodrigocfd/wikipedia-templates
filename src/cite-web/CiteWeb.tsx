import React, {FC} from 'react';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Footer from '../app/Footer';
import Form from './Form';
import Output from './Output';

const CiteWeb: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<div>
			<h2>{t`Cite web`}</h2>
			<Form />
			<Output />
			<Footer />
		</div>
	);
};

const locales: LocaleList = {
	en: {
		'Cite web': 'Cite web'
	},
	pt: {
		'Cite web': 'Citar web'
	}
};

export default CiteWeb;
