import React, {FunctionComponent, useEffect, useRef} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import InlineRadio from '../InlineRadio';
import Album from './Album';

interface Props {
	album: Album;
	onChange?: (album: Album) => void;
}

/**
 * Form with all the fields; receives data and notifies changes.
 */
const Form: FunctionComponent<Props> =
		({album, onChange}: Props) => {

	const t = useLocale('*_InfoboxAlbum');
	const txt1 = useRef<HTMLInputElement>(null);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	const albumTypes = ['studio', 'demo', 'EP', 'live', 'greatest', 'remix', 'box',
		'compilation', 'mixtape', 'soundtrack', 'film', 'cast', 'video', 'other'];
	const albumOptions = ['', ...albumTypes];
	const albumLabels = ['none', ...albumTypes];

	return (
		<div>
			<div>
				<DivName>{t`Name`}</DivName>
				<input type="text" size={40} value={album.name} autoComplete="off" ref={txt1}
					onChange={e => onChange && onChange({...album, name: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Type`}</DivName>
				<select value={album.type}
					onChange={e => onChange && onChange({...album, type: e.target.value})}>
					{albumOptions.map((opt: string, i: number) =>
						<option key={opt} value={t(opt)}>{t(albumLabels[i])}</option>
					)}
				</select>
			</div>
			<div>
				<DivName>{t`Artist`}</DivName>
				<input type="text" size={40} value={album.artist} autoComplete="off"
					onChange={e => onChange && onChange({...album, artist: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Producer`}</DivName>
				<input type="text" size={40} value={album.producer} autoComplete="off"
					onChange={e => onChange && onChange({...album, producer: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Label`}</DivName>
				<input type="text" size={20} value={album.label} autoComplete="off"
					onChange={e => onChange && onChange({...album, label: e.target.value})}/>
			</div>
		</div>
	);
};

const DivName = styled.div`
	display: inline-block;
	width: 90px;
	padding: 6px 0;
`;

export default Form;
