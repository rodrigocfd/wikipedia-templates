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
			{store.trackListing.fields.notes &&
				<input type="text" value={track.note}
					onChange={e => setTrack('note', e)} />
			}
			{store.trackListing.fields.writer &&
				<input type="text" value={track.writer}
					onChange={e => setTrack('writer', e)} />
			}
			{store.trackListing.fields.lyrics &&
				<input type="text" value={track.lyrics}
					onChange={e => setTrack('lyrics', e)} />
			}
			{store.trackListing.fields.music &&
				<input type="text" value={track.music}
					onChange={e => setTrack('music', e)} />
			}
			<input type="number" value={track.duration} min={1} max={9999}
				onChange={e => setTrack('duration', e)} />
		</div>
	);
};

export default TrackRow;
