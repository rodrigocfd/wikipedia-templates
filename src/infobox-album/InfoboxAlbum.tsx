import React, {FC} from 'react'

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Footer from '../app/Footer';
import Form from './Form';

const InfoboxAlbum: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<div>
			<h2>{t`Infobox album`}</h2>
			<Form />
			<Footer />
		</div>
	);
};

const locales: LocaleList = {
	en: {
		'Infobox album': 'Infobox album'
	},
	pt: {
		'Infobox album': 'Info/Álbum'
	}
};

export default InfoboxAlbum;
