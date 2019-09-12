import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import {genLocaleFunc2} from '../app/genLocaleFunc';
import TextAreaOut from '../app/TextAreaOut';
import DayMonthYear from '../app/DayMonthYear';
import NameYear from './NameYear';

import en from './en.json';
import pt from './pt.json';

const Output: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc2(store.lang, 'Output', {en, pt});
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
		return (nameYear.name && nameYear.year) ?
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
`;

export default Output;
