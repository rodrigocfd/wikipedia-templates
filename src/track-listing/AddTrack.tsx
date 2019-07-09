import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import {newTrack} from './Track';

const AddTrack: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	function addTrack() {
		setStore({
			trackListing: {
				...store.trackListing,
				tracks: [
					...store.trackListing.tracks,
					newTrack()
				]
			}
		});
	}

	return (
		<ButtonAdd onClick={addTrack}>{t`Add track`}</ButtonAdd>
	);
};

const ButtonAdd = styled.button`
	margin-left: 18px;
`;

const locales: LocaleList = {
	en: {
		'Add track': 'Add track'
	},
	pt: {
		'Add track': 'Adicionar faixa'
	}
};

export default AddTrack;
