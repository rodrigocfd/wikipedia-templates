import React, {ChangeEvent, FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import Track from './Track';

interface Props {
	id: number;
	position: number;
}

const RowTrack: FC<Readonly<Props>> = p => {
	const [store, setStore] = useStore();
	const track = store.trackListing.tracks.filter(t => t.id === p.id)[0];
	const fs = store.trackListing.fieldsShown;

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
		<Wrap>
			<div>{p.position}</div>
			<input type="text" value={track.title}
				onChange={e => setTrack('title', e)} />
			{fs.notes &&
				<input type="text" value={track.note}
					onChange={e => setTrack('note', e)} />
			}
			{fs.writer &&
				<input type="text" value={track.writer}
					onChange={e => setTrack('writer', e)} />
			}
			{fs.lyrics &&
				<input type="text" value={track.lyrics}
					onChange={e => setTrack('lyrics', e)} />
			}
			{fs.music &&
				<input type="text" value={track.music}
					onChange={e => setTrack('music', e)} />
			}
			<input type="number" value={track.duration} min={1} max={9999}
				onChange={e => setTrack('duration', e)} />
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
