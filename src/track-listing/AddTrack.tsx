import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import {newTrack} from './Track';

import en from './en.json';
import pt from './pt.json';

const AddTrack: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'AddTrack', {en, pt});

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
		<ButtonAdd onClick={addTrack}>{t`add track`}</ButtonAdd>
	);
};

const ButtonAdd = styled.button`
	margin-left: 18px;
`;

export default AddTrack;
