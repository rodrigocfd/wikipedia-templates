import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Track from './Track';

interface Props {
	track: Track;
}

const RemoveTrack: FC<Readonly<Props>> = p => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	function deleteTrack() {
		setStore({
			trackListing: {
				...store.trackListing,
				tracks: store.trackListing.tracks
					.filter((t: Track) => t.id !== p.track.id)
			}
		});
	}

	return (
		<ButtonMarged onClick={() => deleteTrack()}>{t`remove`}</ButtonMarged>
	);
};

const ButtonMarged = styled.button`
	margin-left: 10px;
`;

const locales: LocaleList = {
	en: {
		'remove': 'remove'
	},
	pt: {
		'remove': 'remover'
	}
};

export default RemoveTrack;
