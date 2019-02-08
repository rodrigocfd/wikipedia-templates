import React, {memo, useContext, useEffect} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StoreContext from '../../StoreContext';
import SectionFooter from '../SectionFooter';
import Cell from './Cell';
import TrackForm from './TrackForm';
import Output from './Output';
import Track, {newTrack} from './Track';
import Fields from './Fields';

interface Props { }

/**
 * Main component for app route: track-listing.
 */
const TrackListing = memo<Props>(() => {
	const [store, setStore] = useContext(StoreContext);
	const t = useLocale('*_TrackListing');

	useEffect(() => {
		document.title = t`Track listing` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	function setTracks(tracks: Track[]): void {
		setStore({
			...store,
			trackListing: {
				...store.trackListing,
				tracks: tracks
			}
		});
	}

	function setFields(fields: Fields): void {
		setStore({
			...store,
			trackListing: {
				...store.trackListing,
				fields
			}
		});
	}

	function addTrack(): void {
		setTracks([...store.trackListing.tracks, newTrack()]);
	}

	function removeTrack(index: number): void {
		let newList = [...store.trackListing.tracks];
		newList.splice(index, 1);
		setTracks(newList);
	}

	function moveTrackUp(index: number): void {
		let newList = [...store.trackListing.tracks];
		if (index > 0) {
			const tmp = newList[index];
			newList[index] = newList[index - 1];
			newList[index - 1] = tmp;
			setTracks(newList);
		}
	}

	function changedTrack(track: Track): void {
		const updatedTracks = store.trackListing.tracks.map((tra: Track) =>
			tra.id === track.id ? track : tra);
		setTracks(updatedTracks);
	}

	return (
		<div>
			<div>
				<h2>{t`Track listing`}</h2>
				<DivBtnAddTrack>
					<button onClick={addTrack}>+ {t`Add track`}</button>
					<label><input type="checkbox" checked={store.trackListing.fields.notes}
						onChange={e => setFields({...store.trackListing.fields, notes: e.target.checked})}/> {t`Note`}</label>
					<label><input type="checkbox" checked={store.trackListing.fields.writer}
						onChange={e => setFields({...store.trackListing.fields, writer: e.target.checked})}/> {t`Writer`}</label>
					<label><input type="checkbox" checked={store.trackListing.fields.lyrics}
						onChange={e => setFields({...store.trackListing.fields, lyrics: e.target.checked})}/> {t`Lyrics`}</label>
					<label><input type="checkbox" checked={store.trackListing.fields.music}
						onChange={e => setFields({...store.trackListing.fields, music: e.target.checked})}/> {t`Music`}</label>
				</DivBtnAddTrack>
				{store.trackListing.tracks.length > 0 &&
					<DivTrackList>
						<Cell w={20}>#</Cell>
						<Cell w={160}>{t`Title`}</Cell>
						{store.trackListing.fields.notes  && <Cell w={120}>{t`Note`}</Cell>}
						{store.trackListing.fields.writer && <Cell w={180}>{t`Writer`}</Cell>}
						{store.trackListing.fields.lyrics && <Cell w={180}>{t`Lyrics`}</Cell>}
						{store.trackListing.fields.music  && <Cell w={180}>{t`Music`}</Cell>}
						<Cell w={70}>{t`Length`}</Cell>
						<Cell></Cell>
						{store.trackListing.tracks.map((tra: Track, index: number) =>
							<div key={tra.id}>
								<TrackForm index={index} track={tra}
									fields={store.trackListing.fields}
									onRemove={removeTrack}
									onMoveUp={moveTrackUp}
									onChange={changedTrack}/>
							</div>
						)}
					</DivTrackList>
				}
			</div>
			<Output tracks={store.trackListing.tracks} showFields={store.trackListing.fields}/>
			<SectionFooter onClear={() => setTracks([])}/>
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
