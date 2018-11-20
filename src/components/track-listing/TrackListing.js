import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import Track from './Track';
import Output from './Output';

/**
 * Main component for app route: track-listing.
 */
function TrackListing() {
	const t = useLocale('*_TrackListing');

	const [tracks, setTracks] = useState([]);
	const [uniqueId, setUniqueId] = useState(0);

	useEffect(() => {
		document.title = t`Track listing` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	function addTrack() {
		setUniqueId(uniqueId + 1);
		const newTrack = {id: uniqueId};
		setTracks([...tracks, newTrack]);
	}

	function removeTrack(index) {
		let newList = [...tracks];
		newList.splice(index, 1);
		setTracks(newList);
	}

	function moveTrackUp(index) {
		let newList = [...tracks];
		if (index > 0) {
			const tmp = newList[index];
			newList[index] = newList[index - 1];
			newList[index - 1] = tmp;
			setTracks(newList);
		}
	}

	function changedTrack(track) {
		const updatedTracks = tracks.map(tra =>
			tra.id === track.id ? track : tra);
		setTracks(updatedTracks);
	}

	return (
		<div>
			<div>
				<h2>{t`Track listing`}</h2>
				<DivBtnAddTrack>
					<button onClick={addTrack}>+ {t`Add track`}</button>
				</DivBtnAddTrack>
				{tracks.length > 0 &&
					<DivGridTrackList>
						<DivHeader>#</DivHeader>
						<DivHeader>{t`Title`}</DivHeader>
						<DivHeader>{t`Note`}</DivHeader>
						<DivHeader>{t`Writer`}</DivHeader>
						<DivHeader>{t`Lyrics`}</DivHeader>
						<DivHeader>{t`Music`}</DivHeader>
						<DivHeader>{t`Length`}</DivHeader>
						<DivHeader></DivHeader>
						{tracks.map((tra, index) =>
							<Track key={tra.id} index={index} track={tra}
								onRemove={removeTrack}
								onMoveUp={moveTrackUp}
								onChange={changedTrack}/>
						)}
					</DivGridTrackList>
				}
			</div>
			<Output tracks={tracks}/>
			<div>
				<Link to="/">{t`Home`}</Link>
			</div>
		</div>
	);
}

const DivBtnAddTrack = styled.div`
	margin-bottom: 10px;
`;
const DivGridTrackList = styled.div`
	padding: 4px 0;
	display: grid;
	grid-template-columns: 20px 160px 120px 180px 180px 180px 60px auto;
`;
const DivHeader = styled.div`
	padding: 2px 6px;
`;

export default TrackListing;
