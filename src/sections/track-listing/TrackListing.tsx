import React, {memo, useContext, useEffect} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StoreContext from '../../StoreContext';
import SectionFooter from '../SectionFooter';
import TrackLine from './TrackLine';
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
					<DivGridTrackList>
						<DivHeader>#</DivHeader>
						<DivHeader>{t`Title`}</DivHeader>
						<DivHeader>{t`Note`}</DivHeader>
						<DivHeader>{t`Writer`}</DivHeader>
						<DivHeader>{t`Lyrics`}</DivHeader>
						<DivHeader>{t`Music`}</DivHeader>
						<DivHeader>{t`Length`}</DivHeader>
						<DivHeader></DivHeader>
						{store.tracks.map((tra: Track, index: number) =>
							<TrackLine key={tra.id} index={index} track={tra}
								onRemove={removeTrack}
								onMoveUp={moveTrackUp}
								onChange={changedTrack}/>
						)}
					</DivGridTrackList>
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
const DivGridTrackList = styled.div`
	padding: 4px 0;
	display: grid;
	grid-template-columns: 20px 160px 120px 180px 180px 180px 70px auto;
`;
const DivHeader = styled.div`
	padding: 2px 6px;
`;

export default TrackListing;
