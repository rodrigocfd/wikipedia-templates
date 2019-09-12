import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import {genLocaleFunc2} from '../app/genLocaleFunc';
import InputFocused from '../app/InputFocused';
import YearMonthDay from '../app/YearMonthDay';
import OtherAlbum from './OtherAlbum';
import InfoboxAlbumData from './InfoboxAlbumData';
import {AlbumType, albumTypes} from './AlbumType';

import en from './en.json';
import pt from './pt.json';

const Form: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc2(store.lang, 'Form', {en, pt});

	function setInfoboxAlbum(d: Partial<InfoboxAlbumData>) {
		setStore({
			infoboxAlbum: {...store.infoboxAlbum, ...d}
		});
	}

	return (
		<Wrap>
			<div>{t`Name`}</div>
			<InputFocused type="text" value={store.infoboxAlbum.name} autoComplete="off"
				onChange={e => setInfoboxAlbum({name: e.target.value})} />

			<div>{t`Type`}</div>
			<div>
				<select value={store.infoboxAlbum.type}
					onChange={e => setInfoboxAlbum({type: e.target.value as AlbumType})}>
					{albumTypes.map((albumType: AlbumType) =>
						<option key={albumType} value={albumType}>{t(albumType)}</option>
					)}
				</select>
			</div>

			<div>{t`Artist`}</div>
			<input type="text" value={store.infoboxAlbum.artist} autoComplete="off"
				onChange={e => setInfoboxAlbum({artist: e.target.value})} />

			<div>{t`Cover`}</div>
			<input type="text" value={store.infoboxAlbum.cover} autoComplete="off"
				onChange={e => setInfoboxAlbum({cover: e.target.value})} />

			<div>{t`Released`}</div>
			<YearMonthDay value={store.infoboxAlbum.released}
				onChange={val => setInfoboxAlbum({released: val})} />

			<div>{t`Genre`}</div>
			<div>
				<input type="text" size={20} value={store.infoboxAlbum.genre} autoComplete="off"
					onChange={e => setInfoboxAlbum({genre: e.target.value})} />
			</div>

			<div>{t`Producer`}</div>
			<input type="text" value={store.infoboxAlbum.producer} autoComplete="off"
				onChange={e => setInfoboxAlbum({producer: e.target.value})} />

			<div>{t`Studio`}</div>
			<input type="text" value={store.infoboxAlbum.studio} autoComplete="off"
				onChange={e => setInfoboxAlbum({studio: e.target.value})} />

			<div>{t`Label`}</div>
			<div>
				<input type="text" size={25} value={store.infoboxAlbum.label} autoComplete="off"
					onChange={e => setInfoboxAlbum({label: e.target.value})} />
			</div>

			<div>{t`Previous album`}</div>
			<OtherAlbum value={store.infoboxAlbum.prevAlbum}
				onChange={val => setInfoboxAlbum({prevAlbum: val})} />

			<div>{t`Next album`}</div>
			<OtherAlbum value={store.infoboxAlbum.nextAlbum}
				onChange={val => setInfoboxAlbum({nextAlbum: val})} />
		</Wrap>
	);
};

const Wrap = styled.div`
	display: grid;
	grid-template-columns: 120px 500px;
	grid-column-gap: 6px;
	grid-row-gap: 3px;
`;

export default Form;
