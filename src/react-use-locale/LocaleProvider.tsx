import React, {ReactNode} from 'react';

import LocaleContext from './LocaleContext';
import {ManyLocales} from './model'

interface Props {
	children: ReactNode;
	lang: string;
	locales: ManyLocales;
}

/**
 * Provider to wrap all the app components.
 */
export default function LocaleProvider(p: Props) {
	return (
		<LocaleContext.Provider value={{curLang: p.lang, locales: p.locales}}>
			{p.children}
		</LocaleContext.Provider>
	);
}
