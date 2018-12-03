import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
import Album from './Album';

interface Props {
	name?: string;
	album: Album;
}

/**
 * Outputs the formatted album.
 */
const Output: FunctionComponent<Props> =
		({name, album}: Props) => {

	const t = useLocale('*_InfoboxAlbum');

	const fmt = '{{' + t`Infobox album` + '\n'
		+ (album.name   ? `|${t('name')}=${album.name}\n` : '')
		+ (album.artist ? `|${t('artist')}=[[${album.artist}]]\n` : '')
		+ (album.label  ? `|${t('label')}=[[${album.label}]]\n` : '')
		+ '}}';

	return (
		<StaticTextareaOut name={name} value={fmt}/>
	);
};

const StaticTextareaOut = styled(StaticTextarea)`
	width: 600px;
	height: 200px;
	margin-top: 20px;
`;

export default Output;
