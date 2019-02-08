import React, {memo, useContext, useEffect, useState} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StoreContext from '../../StoreContext';
import SectionFooter from '../SectionFooter';
import Cell from './Cell';
import TrackForm from './TrackForm';
import Output from './Output';
import Track, {newTrack} from './Track';
import {newShowFields} from './ShowFields';

interface Props { }

/**
 * Main component for app route: track-listing.
 */
const TrackListing = memo<Props>(() => {
	const [store, setStore] = useContext(StoreContext);
	const t = useLocale('*_TrackListing');
	const [showFields, setShowFields] = useState(newShowFields());

	useEffect(() => {
		document.title = t`Track listing` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	function addTrack(): void {
		setStore({...store, tracks: [...store.tracks, newTrack()]});
	}

	function removeTrack(index: number): void {
		let newList = [...store.tracks];
		newList.splice(index, 1);
		setStore({...store, tracks: newList});
	}

	function moveTrackUp(index: number): void {
		let newList = [...store.tracks];
		if (index > 0) {
			const tmp = newList[index];
			newList[index] = newList[index - 1];
			newList[index - 1] = tmp;
			setStore({...store, tracks: newList});
		}
	}

	function changedTrack(track: Track): void {
		const updatedTracks = store.tracks.map((tra: Track) =>
			tra.id === track.id ? track : tra);
		setStore({...store, tracks: updatedTracks});
	}

	return (
		<div>
			<div>
				<h2>{t`Track listing`}</h2>
				<DivBtnAddTrack>
					<button onClick={addTrack}>+ {t`Add track`}</button>
					<label><input type="checkbox" checked={showFields.notes}
						onChange={e => setShowFields({...showFields, notes: e.target.checked})}/> {t`Note`}</label>
					<label><input type="checkbox" checked={showFields.writer}
						onChange={e => setShowFields({...showFields, writer: e.target.checked})}/> {t`Writer`}</label>
					<label><input type="checkbox" checked={showFields.lyrics}
						onChange={e => setShowFields({...showFields, lyrics: e.target.checked})}/> {t`Lyrics`}</label>
					<label><input type="checkbox" checked={showFields.music}
						onChange={e => setShowFields({...showFields, music: e.target.checked})}/> {t`Music`}</label>
				</DivBtnAddTrack>
				{store.tracks.length > 0 &&
					<DivTrackList>
						<Cell w={20}>#</Cell>
						<Cell w={160}>{t`Title`}</Cell>
						{showFields.notes  && <Cell w={120}>{t`Note`}</Cell>}
						{showFields.writer && <Cell w={180}>{t`Writer`}</Cell>}
						{showFields.lyrics && <Cell w={180}>{t`Lyrics`}</Cell>}
						{showFields.music  && <Cell w={180}>{t`Music`}</Cell>}
						<Cell w={70}>{t`Length`}</Cell>
						<Cell></Cell>
						{store.tracks.map((tra: Track, index: number) =>
							<div key={tra.id}>
								<TrackForm index={index} track={tra}
									showFields={showFields}
									onRemove={removeTrack}
									onMoveUp={moveTrackUp}
									onChange={changedTrack}/>
							</div>
						)}
					</DivTrackList>
				}
			</div>
			<Output tracks={store.tracks} showFields={showFields}/>
			<SectionFooter onClear={() => setStore({...store, tracks: []})}/>
		</div>
	);
});

const DivBtnAddTrack = styled.div`
	margin-bottom: 10px;
`;
const DivTrackList = styled.div`
	padding: 4px 0;
`;

export default TrackListing;
