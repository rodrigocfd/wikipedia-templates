import React, {FC} from 'react';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import PageTitle from '../app/PageTitle';
import Footer from '../app/Footer';
import Form from './Form';
import Output from './Output';
import IframeWebsite from './IframeWebsite';
import {newCiteWebData} from './CiteWebData';

const CiteWeb: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (<>
		<PageTitle title={t`Cite web`} />
		<h2>{t`Cite web`}</h2>
		<Form />
		<Output />
		<IframeWebsite />
		<Footer onClear={() => setStore({citeWeb: newCiteWebData()})} />
	</>);
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
