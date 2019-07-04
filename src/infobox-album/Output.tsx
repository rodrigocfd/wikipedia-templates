import React, {FC} from 'react'
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import TextAreaOut from '../app/TextAreaOut';
import DayMonthYear from '../app/DayMonthYear';
import NameYear from './NameYear';
import {albumTypeLocale} from './AlbumType';

const Output: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);
	const ia = store.infoboxAlbum;

	function formatDate(date: DayMonthYear): string {
		let formatted = '';
		if (date.year || date.month || date.day) {
			formatted = t('start date {0} {1} {2}',
				date.year, date.month, date.day);
		}
		return formatted;
	}

	function formatNameYear(pref: 'prev' | 'next', nameYear: NameYear): string {
		return nameYear.name && nameYear.year ?
			`|${t(pref + '_title')}=[[${nameYear.name}]]\n` +
			`|${t(pref + '_year')}=${nameYear.year}\n`
			: '';
	}

	const theReleased = formatDate(ia.released);
	const thePrev = formatNameYear('prev', ia.prevAlbum);
	const theNext = formatNameYear('next', ia.nextAlbum);

	const out = '{{' + t`Infobox album` + '\n'
		+ (ia.name     && `|${t`name`}=${ia.name}\n`)
		+                 `|${t`type`}=${t(ia.type)}\n`
		+ (ia.artist   && `|${t`artist`}=[[${ia.artist}]]\n`)
		+ (ia.cover    && `|${t`cover`}=${ia.cover}\n`)
		+ (ia.genre    && `|${t`genre`}=${ia.genre}\n`)
		+ (ia.producer && `|${t`producer`}=${ia.producer}\n`)
		+ (ia.studio   && `|${t`studio`}=${ia.studio}\n`)
		+ (ia.label    && `|${t`label`}=${ia.label}\n`)
		+ (theReleased && `|${t`released`}=${theReleased}\n`)
		+ thePrev
		+ theNext
		+ '}}';

	return (
		<TextAreaInfoboxAlbum value={out} />
	);
};

const TextAreaInfoboxAlbum = styled(TextAreaOut)`
	width: 600px;
	height: 200px;
	margin-top: 20px;
`;

const locales: LocaleList = {
	en: {
		'Infobox album': 'Infobox album',
		'name': 'name',
		'type': 'type',
		'artist': 'artist',
		'cover': 'cover',
		'genre': 'genre',
		'producer': 'producer',
		'studio': 'studio',
		'label': 'label',
		'released': 'released',
		'start date {0} {1} {2}': '{{start date|{0}|{1}|{2}}}',
		'prev_title': 'prev_title',
		'prev_year': 'prev_year',
		'next_title': 'next_title',
		'next_year': 'next_year',
		...albumTypeLocale.en
	},
	pt: {
		'Infobox album': 'Info/Álbum',
		'name': 'nome',
		'type': 'tipo',
		'artist': 'artista',
		'cover': 'imagem',
		'genre': 'gênero',
		'producer': 'produtor',
		'studio': 'estúdio',
		'label': 'gravadora',
		'released': 'lançado',
		'start date {0} {1} {2}': '{{data de início|{0}|{1}|{2}}}',
		'prev_title': 'último álbum',
		'prev_year': 'ano anterior',
		'next_title': 'próximo álbum',
		'next_year': 'ano seguinte',
		...albumTypeLocale.pt
	}
};

export default Output;
