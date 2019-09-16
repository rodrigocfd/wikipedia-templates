import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/useStore';
import genLocaleFunc from '../app/genLocaleFunc';
import Track from './Track';

import en from './en.json';
import pt from './pt.json';

interface Props {
	track: Track;
	position: number;
}

const MoveUpTrack: FC<Readonly<Props>> = p => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'MoveUpTrack', {en, pt});
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

export default MoveUpTrack;
