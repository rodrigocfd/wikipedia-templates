export const albumTypes = <const>['none', 'studio', 'demo',
	'EP', 'live', 'greatest', 'remix', 'box', 'compilation',
	'mixtape', 'soundtrack', 'film', 'cast', 'video', 'other'];

export type AlbumType = typeof albumTypes[number];
