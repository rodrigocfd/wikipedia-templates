/**
 * One single locale file.
 */
interface Locale {
	[key: string]: string;
}

/**
 * All the locales.
 */
interface LocaleBatch {
	[lang: string]: Locale;
}

export default LocaleBatch;
