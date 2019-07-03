import React, {FC} from 'react'

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import useRefFocusFirst from '../app/useRefFocusFirst';
import InfoboxAlbumData, {albumTypes} from './InfoboxAlbumData';

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
		</div>
	);
};

const locales: LocaleList = {
	en: {
		'Name': 'Name',
		'Type': 'Type'
	},
	pt: {
		'Name': 'Nome',
		'Type': 'Tipo'
	}
};

export default Form;
