import React, {ChangeEvent, FC} from 'react';

import useStore from '../app/ContextStore';
import Track from './Track';

interface Props {
	id: number;
	position: number;
}

const TrackRow: FC<Readonly<Props>> = p => {
	const [store, setStore] = useStore();
	const track = store.trackListing.tracks.filter(t => t.id === p.id)[0];

	function setTrack(param: keyof Track, e: ChangeEvent<HTMLInputElement>) {
		setStore({
			trackListing: {
				...store.trackListing,
				tracks: store.trackListing.tracks.map(t => {
					return (t.id !== p.id) ? t
						: {
							...t,
							[param]: e.target.value
						};
				})
			}
		});
	}

	return (
		<div>
			<span>{p.position}</span>
			<input type="text" value={track.title}
				onChange={e => setTrack('title', e)} />
		</div>
	);
};

export default TrackRow;
