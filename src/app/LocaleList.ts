/**
 * One single locale file.
 */
interface Locale {
	[key: string]: string;
}

/**
 * All the locales.
 */
interface LocaleList {
	[lang: string]: Locale;
}

export default LocaleList;
