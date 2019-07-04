import React, {FC} from 'react'

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import useRefFocusFirst from '../app/useRefFocusFirst';
import YearMonthDay from '../app/YearMonthDay';
import InfoboxAlbumData, {AlbumType, albumTypes} from './InfoboxAlbumData';

const Form: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);
	const txtName = useRefFocusFirst<HTMLInputElement>();

	function setInfoboxAlbum(d: Partial<InfoboxAlbumData>) {
		setStore({
			infoboxAlbum: {...store.infoboxAlbum, ...d}
		});
	}

	return (
		<div>
			<div>
				<div>{t`Name`}</div>
				<input type="text" size={40} value={store.infoboxAlbum.name} autoComplete="off"
					onChange={e => setInfoboxAlbum({name: e.target.value})} ref={txtName} />
			</div>
			<div>
				<div>{t`Type`}</div>
				<select value={store.infoboxAlbum.type}
					onChange={e => setInfoboxAlbum({type: e.target.value as AlbumType})}>
					{albumTypes.map((albumType: AlbumType) =>
						<option key={albumType} value={albumType}>{t(albumType)}</option>
					)}
				</select>
			</div>
			<div>
				<div>{t`Artist`}</div>
				<input type="text" size={40} value={store.infoboxAlbum.artist} autoComplete="off"
					onChange={e => setInfoboxAlbum({artist: e.target.value})} />
			</div>
			<div>
				<div>{t`Cover`}</div>
				<input type="text" size={30} value={store.infoboxAlbum.cover} autoComplete="off"
					onChange={e => setInfoboxAlbum({cover: e.target.value})} />
			</div>
			<div>
				<div>{t`Released`}</div>
				<YearMonthDay value={store.infoboxAlbum.released}
					onChange={val => setInfoboxAlbum({released: val})} />
			</div>
			<div>
				<div>{t`Genre`}</div>
				<input type="text" size={20} value={store.infoboxAlbum.genre} autoComplete="off"
					onChange={e => setInfoboxAlbum({genre: e.target.value})} />
			</div>
			<div>
				<div>{t`Producer`}</div>
				<input type="text" size={40} value={store.infoboxAlbum.producer} autoComplete="off"
					onChange={e => setInfoboxAlbum({producer: e.target.value})} />
			</div>
			<div>
				<div>{t`Studio`}</div>
				<input type="text" size={40} value={store.infoboxAlbum.studio} autoComplete="off"
					onChange={e => setInfoboxAlbum({studio: e.target.value})} />
			</div>
			<div>
				<div>{t`Label`}</div>
				<input type="text" size={20} value={store.infoboxAlbum.label} autoComplete="off"
					onChange={e => setInfoboxAlbum({label: e.target.value})} />
			</div>
		</div>
	);
};

const locales: LocaleList = {
	en: {
		'Name': 'Name',
		'Type': 'Type',
		'Artist': 'Artist',
		'Cover': 'Cover',
		'Released': 'Released',
		'Genre': 'Genre',
		'Producer': 'Producer',
		'Studio': 'Studio',
		'Label': 'Label',
		'none': 'none',
		'studio': 'studio',
		'demo': 'demo',
		'EP': 'EP',
		'live': 'live',
		'greatest': 'greatest',
		'remix': 'remix',
		'box': 'box',
		'compilation': 'compilation',
		'mixtape': 'mixtape',
		'soundtrack': 'soundtrack',
		'film': 'film',
		'cast': 'cast',
		'video': 'video',
		'other': 'other'
	},
	pt: {
		'Name': 'Nome',
		'Type': 'Tipo',
		'Artist': 'Artista',
		'Cover': 'Imagem',
		'Released': 'Lançado',
		'Genre': 'Gênero',
		'Producer': 'Produtor',
		'Studio': 'Estúdio',
		'Label': 'Gravadora',
		'none': 'nenhum',
		'studio': 'estúdio',
		'demo': 'demo',
		'EP': 'ep',
		'live': 'ao vivo',
		'greatest': 'grandes êxitos',
		'remix': 'remistura',
		'box': 'caixa',
		'compilation': 'compilação',
		'mixtape': 'mixtape',
		'soundtrack': 'banda sonora',
		'film': 'outro',
		'cast': 'outro',
		'video': 'vídeo',
		'other': 'outro'
	}
};

export default Form;
