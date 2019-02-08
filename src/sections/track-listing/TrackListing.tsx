import React, {memo, useContext, useEffect} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StoreContext from '../../StoreContext';
import SectionFooter from '../SectionFooter';
import Cell from './Cell';
import TrackForm from './TrackForm';
import Output from './Output';
import Track, {newTrack} from './Track';

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
				</DivBtnAddTrack>
				{store.tracks.length > 0 &&
					<DivTrackList>
						<Cell w={20}>#</Cell>
						<Cell w={160}>{t`Title`}</Cell>
						<Cell w={120}>{t`Note`}</Cell>
						<Cell w={180}>{t`Writer`}</Cell>
						<Cell w={180}>{t`Lyrics`}</Cell>
						<Cell w={180}>{t`Music`}</Cell>
						<Cell w={70}>{t`Length`}</Cell>
						<Cell></Cell>
						{store.tracks.map((tra: Track, index: number) =>
							<div key={tra.id}>
								<TrackForm index={index} track={tra}
									onRemove={removeTrack}
									onMoveUp={moveTrackUp}
									onChange={changedTrack}/>
							</div>
						)}
					</DivTrackList>
				}
			</div>
			<Output tracks={store.tracks}/>
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
