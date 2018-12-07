import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
import DayMonthYear from '../DayMonthYear';
import Album from './Album';

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
		+ (album.name     ? `|${t('name')}=${album.name}\n` : '')
		+ (album.type     ? `|${t('type')}=${album.type}\n` : '')
		+ (album.artist   ? `|${t('artist')}=[[${album.artist}]]\n` : '')
		+ (album.cover    ? `|${t('cover')}=${album.cover}\n` : '')
		+ (album.producer ? `|${t('producer')}=${album.producer}\n` : '')
		+ (album.label    ? `|${t('label')}=${album.label}\n` : '')
		+ (theReleased    ? `|${t('released')}=${theReleased}\n` : '')
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
