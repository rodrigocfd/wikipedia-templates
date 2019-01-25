import React, {memo, useEffect, useRef} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import YearMonthDay from '../YearMonthDay';
import OtherAlbum from './OtherAlbum';
import Album, {albumTypes} from './Album';

interface Props {
	readonly album: Album;
	onChange?: (album: Album) => void;
}

/**
 * Form with all the fields; receives data and notifies changes.
 */
const Form = memo<Props>(p => {
	const t = useLocale('*_InfoboxAlbum');
	const txt1 = useRef<HTMLInputElement>(null);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	return (
		<div>
			<div>
				<DivName>{t`Name`}</DivName>
				<input type="text" size={40} value={p.album.name} autoComplete="off" ref={txt1}
					onChange={e => p.onChange && p.onChange({...p.album, name: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Type`}</DivName>
				<select value={p.album.type}
					onChange={e => p.onChange && p.onChange({...p.album, type: +e.target.value})}>
					{albumTypes.map((aType: string, i: number) =>
						<option key={aType} value={i}>{t(aType)}</option>
					)}
				</select>
			</div>
			<div>
				<DivName>{t`Artist`}</DivName>
				<input type="text" size={40} value={p.album.artist} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.album, artist: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Cover`}</DivName>
				<input type="text" size={30} value={p.album.cover} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.album, cover: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Released`}</DivName>
				<YearMonthDay value={p.album.released}
					onChange={val => p.onChange && p.onChange({...p.album, released: val})}/>
			</div>
			<div>
				<DivName>{t`Genre`}</DivName>
				<input type="text" size={20} value={p.album.genre} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.album, genre: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Producer`}</DivName>
				<input type="text" size={40} value={p.album.producer} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.album, producer: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Studio`}</DivName>
				<input type="text" size={40} value={p.album.studio} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.album, studio: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Label`}</DivName>
				<input type="text" size={20} value={p.album.label} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.album, label: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Previous album`}</DivName>
				<OtherAlbum value={p.album.prevAlbum}
					onChange={val => p.onChange && p.onChange({...p.album, prevAlbum: val})}/>
			</div>
			<div>
				<DivName>{t`Next album`}</DivName>
				<OtherAlbum value={p.album.nextAlbum}
					onChange={val => p.onChange && p.onChange({...p.album, nextAlbum: val})}/>
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
