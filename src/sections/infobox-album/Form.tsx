import React, {memo, useEffect, useRef} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import YearMonthDay from '../YearMonthDay';
import OtherAlbum from './OtherAlbum';
import Album, {albumTypes} from './Album';

interface Props {
	album: Album;
	onChange?: (album: Album) => void;
}

/**
 * Form with all the fields; receives data and notifies changes.
 */
const Form = memo<Props>(({album, onChange}) => {
	const t = useLocale('*_InfoboxAlbum');
	const txt1 = useRef<HTMLInputElement>(null);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

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
					onChange={e => onChange && onChange({...album, type: +e.target.value})}>
					{albumTypes.map((aType: string, i: number) =>
						<option key={aType} value={i}>{t(aType)}</option>
					)}
				</select>
			</div>
			<div>
				<DivName>{t`Artist`}</DivName>
				<input type="text" size={40} value={album.artist} autoComplete="off"
					onChange={e => onChange && onChange({...album, artist: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Cover`}</DivName>
				<input type="text" size={30} value={album.cover} autoComplete="off"
					onChange={e => onChange && onChange({...album, cover: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Released`}</DivName>
				<YearMonthDay value={album.released}
					onChange={val => onChange && onChange({...album, released: val})}/>
			</div>
			<div>
				<DivName>{t`Genre`}</DivName>
				<input type="text" size={20} value={album.genre} autoComplete="off"
					onChange={e => onChange && onChange({...album, genre: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Producer`}</DivName>
				<input type="text" size={40} value={album.producer} autoComplete="off"
					onChange={e => onChange && onChange({...album, producer: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Studio`}</DivName>
				<input type="text" size={40} value={album.studio} autoComplete="off"
					onChange={e => onChange && onChange({...album, studio: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Label`}</DivName>
				<input type="text" size={20} value={album.label} autoComplete="off"
					onChange={e => onChange && onChange({...album, label: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Previous album`}</DivName>
				<OtherAlbum value={album.prevAlbum}
					onChange={val => onChange && onChange({...album, prevAlbum: val})}/>
			</div>
			<div>
				<DivName>{t`Next album`}</DivName>
				<OtherAlbum value={album.nextAlbum}
					onChange={val => onChange && onChange({...album, nextAlbum: val})}/>
			</div>
		</div>
	);
});

const DivName = styled.div`
	display: inline-block;
	width: 120px;
	padding: 6px 0;
`;

export default Form;
