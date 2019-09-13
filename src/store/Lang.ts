/**
 * Available languages.
 */
export type Lang = 'en' | 'pt';

/**
 * Initial app language.
 */
export function newLang(): Lang {
	return 'pt';
};

/**
 * The name of each available language.
 */
export interface LangName {
	id: Lang;
	name: string;
};

export const langNames: LangName[] = [
	{id: 'en', name: 'English'},
	{id: 'pt', name: 'Portuguese'}
];
