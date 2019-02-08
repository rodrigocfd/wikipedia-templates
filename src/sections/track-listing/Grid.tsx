import React from 'react';
import styled from 'styled-components';
import {DeepReadonly} from 'ts-essentials';

import useLocale from '../../react-use-locale';
import Track from './Track';
import Fields from './Fields';
import Cell from './Cell';
import TrackForm from './TrackForm';

interface Props {
	tracks: DeepReadonly<Track[]>;
	fields: DeepReadonly<Fields>;
	onChangeTracks: (tracks: Track[]) => void;
}

/**
 * The grid with header and track list.
 */
function Grid(p: Props) {
	const t = useLocale('*_TrackListing');

	function removeTrack(index: number): void {
		let newList = [...p.tracks];
		newList.splice(index, 1);
		p.onChangeTracks(newList);
	}

	function moveTrackUp(index: number): void {
		let newList = [...p.tracks];
		if (index > 0) {
			const tmp = newList[index];
			newList[index] = newList[index - 1];
			newList[index - 1] = tmp;
			p.onChangeTracks(newList);
		}
	}

	function changedTrack(track: Track): void {
		const updatedTracks = p.tracks.map((tra: Track) =>
			tra.id === track.id ? track : tra);
		p.onChangeTracks(updatedTracks);
	}

	return !p.tracks.length ? null : (
		<DivList>
			<Cell w={20}>#</Cell>
			<Cell w={160}>{t`Title`}</Cell>
			{p.fields.notes  && <Cell w={120}>{t`Note`}</Cell>}
			{p.fields.writer && <Cell w={180}>{t`Writer`}</Cell>}
			{p.fields.lyrics && <Cell w={180}>{t`Lyrics`}</Cell>}
			{p.fields.music  && <Cell w={180}>{t`Music`}</Cell>}
			<Cell w={70}>{t`Length`}</Cell>
			<Cell></Cell>
			{p.tracks.map((tra: Track, index: number) =>
				<div key={tra.id}>
					<TrackForm index={index} track={tra}
						fields={p.fields}
						onRemove={removeTrack}
						onMoveUp={moveTrackUp}
						onChange={changedTrack}/>
				</div>
			)}
		</DivList>
	);
}

const DivList = styled.div`
	padding: 4px 0;
`;

export default Grid;
