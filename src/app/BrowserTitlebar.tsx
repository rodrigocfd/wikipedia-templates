import {FC, useEffect} from 'react';

import useStore from './ContextStore';
import genLocaleFunc, {LocaleList} from './genLocaleFunc';

interface Props {
	title: string;
}

const BrowserTitlebar: FC<Readonly<Props>> = p => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	useEffect(() => {
		document.title = p.title + (p.title && ' - ') + t`Wikipedia Templates`;
	}, [t]);

	return null;
};

const locales: LocaleList = {
	en: {
		'Wikipedia Templates': 'Wikipedia Templates'
	},
	pt: {
		'Wikipedia Templates': 'Predefinições da Wikipédia'
	}
};

export default BrowserTitlebar;
