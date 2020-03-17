export const albumTypes = ['none', 'studio', 'demo',
	'EP', 'live', 'greatest', 'remix', 'box', 'compilation',
	'mixtape', 'soundtrack', 'film', 'cast', 'video', 'other'] as const;

export type AlbumType = typeof albumTypes[number];
