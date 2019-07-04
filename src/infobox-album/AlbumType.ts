import {LocaleList} from '../app/genLocaleFunc';

export const albumTypes = <const>['none', 'studio', 'demo',
	'EP', 'live', 'greatest', 'remix', 'box', 'compilation',
	'mixtape', 'soundtrack', 'film', 'cast', 'video', 'other'];

export type AlbumType = typeof albumTypes[number];

export const albumTypeLocale: LocaleList = {
	en: {
		'none': 'none',
		'studio': 'studio',
		'demo': 'demo',
		'EP': 'EP',
		'live': 'live',
		'greatest': 'greatest',
		'remix': 'remix',
		'box': 'box',
		'compilation': 'compilation',
		'mixtape': 'mixtape',
		'soundtrack': 'soundtrack',
		'film': 'film',
		'cast': 'cast',
		'video': 'video',
		'other': 'other'
	},
	pt: {
		'none': 'nenhum',
		'studio': 'estúdio',
		'demo': 'demo',
		'EP': 'ep',
		'live': 'ao vivo',
		'greatest': 'grandes êxitos',
		'remix': 'remistura',
		'box': 'caixa',
		'compilation': 'compilação',
		'mixtape': 'mixtape',
		'soundtrack': 'banda sonora',
		'film': 'outro',
		'cast': 'outro',
		'video': 'vídeo',
		'other': 'outro'
	}
};
