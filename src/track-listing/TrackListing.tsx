import React, {FC} from 'react'

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Footer from '../app/Footer';

const TrackListing: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (<>
		<h2>{t`Track listing`}</h2>
		<Footer />
	</>);
};

const locales: LocaleList = {
	en: {
		'Track listing': 'Track listing'
	},
	pt: {
		'Track listing': 'Lista de faixas'
	}
};

export default TrackListing;
