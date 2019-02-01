import React, {memo} from 'react';
import styled from 'styled-components';
import {DeepReadonly} from 'ts-essentials';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
import onlyIf from '../onlyIf';
import DayMonthYear from '../DayMonthYear';
import Album, {albumTypes} from './Album';
import NameYear from './NameYear';

interface Props {
	readonly name?: string;
	album: DeepReadonly<Album>;
}

/**
 * Outputs the formatted album.
 */
const Output = memo<Props>(p => {
	const t = useLocale('*_InfoboxAlbum');

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

	const theReleased = formatDate(p.album.released);
	const thePrev = formatNameYear('prev', p.album.prevAlbum);
	const theNext = formatNameYear('next', p.album.nextAlbum);

	const fmt = '{{' + t`Infobox album` + '\n'
		+ onlyIf(p.album.name,     `|${t`Name`.toLowerCase()}=${p.album.name}\n`)
		+ onlyIf(p.album.type,     `|${t`Type`.toLowerCase()}=${t(albumTypes[p.album.type])}\n`)
		+ onlyIf(p.album.artist,   `|${t`Artist`.toLowerCase()}=[[${p.album.artist}]]\n`)
		+ onlyIf(p.album.cover,    `|${t`Cover`.toLowerCase()}=${p.album.cover}\n`)
		+ onlyIf(p.album.genre,    `|${t`Genre`.toLowerCase()}=${p.album.genre}\n`)
		+ onlyIf(p.album.producer, `|${t`Producer`.toLowerCase()}=${p.album.producer}\n`)
		+ onlyIf(p.album.studio,   `|${t`Studio`.toLowerCase()}=${p.album.studio}\n`)
		+ onlyIf(p.album.label,    `|${t`Label`.toLowerCase()}=${p.album.label}\n`)
		+ onlyIf(theReleased,      `|${t`Released`.toLowerCase()}=${theReleased}\n`)
		+ thePrev
		+ theNext
		+ '}}';

	return (
		<StaticTextareaOut name={p.name} value={fmt}/>
	);
});

const StaticTextareaOut = styled(StaticTextarea)`
	width: 600px;
	height: 200px;
	margin-top: 20px;
`;

export default Output;
