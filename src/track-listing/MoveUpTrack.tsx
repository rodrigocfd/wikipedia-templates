import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Track from './Track';

interface Props {
	track: Track;
	position: number;
}

const MoveUpTrack: FC<Readonly<Props>> = p => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);
	const index = p.position - 1;

	function moveUpTrack() {
		if (index > 0) {
			let newList = [...store.trackListing.tracks];
			const tmp = newList[index];
			newList[index] = newList[index - 1];
			newList[index - 1] = tmp;
			setStore({
				trackListing: {
					...store.trackListing,
					tracks: newList
				}
			});
		}
	}

	return !index ? null : (
		<ButtonMarged onClick={() => moveUpTrack()}>{t`move up`}</ButtonMarged>
	);
};

const ButtonMarged = styled.button`
	margin-left: 10px;
`;

const locales: LocaleList = {
	en: {
		'move up': 'move up'
	},
	pt: {
		'move up': 'mover acima'
	}
};

export default MoveUpTrack;
