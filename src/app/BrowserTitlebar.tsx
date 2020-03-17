import {FC, useEffect} from 'react';

import useStore from '../store/useStore';
import genLocaleFunc from './genLocaleFunc';

import en from './en.json';
import pt from './pt.json';

interface Props {
	title: string;
}

const BrowserTitlebar: FC<Readonly<Props>> = p => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, 'BrowserTitlebar', {en, pt});

	useEffect(() => {
		document.title = p.title + (p.title && ' - ') + t`Wikipedia Templates`;
	}, [t, p.title]);

	return null;
};

export default BrowserTitlebar;
