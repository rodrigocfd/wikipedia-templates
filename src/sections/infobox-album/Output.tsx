import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
import onlyIf from '../onlyIf';
import DayMonthYear from '../DayMonthYear';
import Album, {albumTypes} from './Album';

interface Props {
	name?: string;
	album: Album;
}

/**
 * Outputs the formatted album.
 */
const Output = memo<Props>(({name, album}) => {
	const t = useLocale('*_InfoboxAlbum');

	function formatDate(date: DayMonthYear): string {
		let formatted = '';

		if (date.year || date.month || date.day) {
			formatted = t('start date {0} {1} {2}',
				date.year, date.month, date.day);
		}

		return formatted;
	}

	const theReleased = formatDate(album.released);

	const fmt = '{{' + t`Infobox album` + '\n'
		+ onlyIf(album.name,     `|${t`Name`.toLowerCase()}=${album.name}\n`)
		+ onlyIf(album.type,     `|${t`Type`.toLowerCase()}=${t(albumTypes[album.type])}\n`)
		+ onlyIf(album.artist,   `|${t`Artist`.toLowerCase()}=[[${album.artist}]]\n`)
		+ onlyIf(album.cover,    `|${t`Cover`.toLowerCase()}=${album.cover}\n`)
		+ onlyIf(album.producer, `|${t`Producer`.toLowerCase()}=${album.producer}\n`)
		+ onlyIf(album.studio,   `|${t`Studio`.toLowerCase()}=${album.studio}\n`)
		+ onlyIf(album.label,    `|${t`Label`.toLowerCase()}=${album.label}\n`)
		+ onlyIf(theReleased,    `|${t`Released`.toLowerCase()}=${theReleased}\n`)
		+ '}}';

	return (
		<StaticTextareaOut name={name} value={fmt}/>
	);
});

const StaticTextareaOut = styled(StaticTextarea)`
	width: 600px;
	height: 200px;
	margin-top: 20px;
`;

export default Output;
