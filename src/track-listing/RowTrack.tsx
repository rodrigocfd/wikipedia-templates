import React, {ChangeEvent, FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/ContextStore';
import RemoveTrack from './RemoveTrack';
import MoveUpTrack from './MoveUpTrack';
import Track from './Track';

interface Props {
	track: Track;
	position: number;
}

const RowTrack: FC<Readonly<Props>> = p => {
	const [store, setStore] = useStore();
	const fs = store.trackListing.fieldsShown;

	function setTrack(param: keyof Track, e: ChangeEvent<HTMLInputElement>) {
		setStore({
			trackListing: {
				...store.trackListing,
				tracks: store.trackListing.tracks.map((t: Track) => {
					return (t.id !== p.track.id) ? t
						: {
							...t,
							[param]: e.target.value
						};
				})
			}
		});
	}

	return (
		<Wrap>
			<div>{p.position}</div>
			<input type="text" value={p.track.title}
				onChange={e => setTrack('title', e)} />
			{fs.note &&
				<input type="text" value={p.track.note}
					onChange={e => setTrack('note', e)} />
			}
			{fs.writer &&
				<input type="text" value={p.track.writer}
					onChange={e => setTrack('writer', e)} />
			}
			{fs.lyrics &&
				<input type="text" value={p.track.lyrics}
					onChange={e => setTrack('lyrics', e)} />
			}
			{fs.music &&
				<input type="text" value={p.track.music}
					onChange={e => setTrack('music', e)} />
			}
			<input type="number" value={p.track.duration} min={1} max={9999}
				onChange={e => setTrack('duration', e)} />
			<RemoveTrack track={p.track} />
			<MoveUpTrack track={p.track} position={p.position} />
		</Wrap>
	);
};

const Wrap = styled.div`
	margin: 6px 0;

	& > div:first-of-type {
		display: inline-block;
		width: 24px;
		margin-right: 8px;
		text-align: right;
	}
	& > input {
		margin: 0 4px;
		width: 180px;
	}
	& > input:last-of-type {
		width: 70px;
	}
`;

export default RowTrack;
