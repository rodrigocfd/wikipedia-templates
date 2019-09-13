import {FC, useEffect} from 'react';

import useStore from './ContextStore';
import {genLocaleFunc2} from '../app/genLocaleFunc';

import en from './en.json';
import pt from './pt.json';

interface Props {
	title: string;
}

const BrowserTitlebar: FC<Readonly<Props>> = p => {
	const [store] = useStore();
	const t = genLocaleFunc2(store.lang, 'BrowserTitlebar', {en, pt});

	useEffect(() => {
		document.title = p.title + (p.title && ' - ') + t`Wikipedia Templates`;
	}, [t]);

	return null;
};

export default BrowserTitlebar;
