import React, {FC} from 'react';

import useStore from '../store/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import BrowserTitlebar from '../app/BrowserTitlebar';
import Footer from '../app/Footer';
import Form from './Form';
import Output from './Output';
import IframeWebsite from './IframeWebsite';
import {newDataCiteWeb} from '../store/DataCiteWeb';

import en from './en.json';
import pt from './pt.json';

const CiteWeb: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'CiteWeb', {en, pt});

	return (<>
		<BrowserTitlebar title={t`Cite web`} />
		<h2>{t`Cite web`}</h2>
		<Form />
		<Output />
		<IframeWebsite />
		<Footer onClear={() => setStore({citeWeb: newDataCiteWeb()})} />
	</>);
};

export default CiteWeb;
