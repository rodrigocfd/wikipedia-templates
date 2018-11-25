/**
 * A single JSON locale file.
 */
export interface SingleLocale {
	[key: string]: string;
}

/**
 * Combination of many JSON locale files.
 */
export interface ManyLocales {
	[name: string]: SingleLocale;
}

/**
 * Goes through the context.
 */
export interface ContextData {
	curLang: string;
	locales: ManyLocales;
}

export function newContextData(): ContextData {
	return {
		curLang: '',
		locales: {}
	};
}
