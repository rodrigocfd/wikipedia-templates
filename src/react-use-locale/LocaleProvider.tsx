import React, {FunctionComponent, ReactNode} from 'react';

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
const LocaleProvider: FunctionComponent<Props> =
		({children, lang, locales}: Props) => {
	return (
		<LocaleContext.Provider value={{curLang: lang, locales}}>
			{children}
		</LocaleContext.Provider>
	);
};

export default LocaleProvider;
