import React, {memo, useContext, useEffect} from 'react';

import useLocale from '../../react-use-locale';
import StoreContext from '../../StoreContext';
import SectionFooter from '../SectionFooter';
import Form from './Form';
import Iframe from './Iframe';
import Output from './Output';
import Cite, {newCite} from './Cite';

interface Props { }

/**
 * Main component for app route: cite-web.
 */
const CiteWeb = memo<Props>(() => {
	const [store, setStore] = useContext(StoreContext);
	const t = useLocale('*_CiteWeb');

	useEffect(() => {
		document.title = t`Cite web` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Cite web`}</h2>
			<Form cite={store.cite} onChange={(ci: Cite) => setStore({...store, cite: ci})}/>
			<Output cite={store.cite}/>
			<Iframe cite={store.cite}/>
			<SectionFooter onClear={() => setStore({...store, cite: newCite()})}/>
		</div>
	);
});

export default CiteWeb;
