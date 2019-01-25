import React, {memo, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
import SectionFooter from '../SectionFooter';
import TrackLine from './TrackLine';
import Output from './Output';
import Track, {newTrack} from './Track';

interface Props {
	tracks: Track[];
}

/**
 * Main component for app route: track-listing.
 */
const TrackListing = memo<Props & DispatchProps>(p => {
	const t = useLocale('*_TrackListing');

	useEffect(() => {
		document.title = t`Track listing` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	function addTrack(): void {
		p.dispatchNow('setTracks', [...p.tracks, newTrack()]);
	}

	function removeTrack(index: number): void {
		let newList = [...p.tracks];
		newList.splice(index, 1);
		p.dispatchNow('setTracks', newList);
	}

	function moveTrackUp(index: number): void {
		let newList = [...p.tracks];
		if (index > 0) {
			const tmp = newList[index];
			newList[index] = newList[index - 1];
			newList[index - 1] = tmp;
			p.dispatchNow('setTracks', newList);
		}
	}

	function changedTrack(track: Track): void {
		const updatedTracks = p.tracks.map(tra =>
			tra.id === track.id ? track : tra);
		p.dispatchNow('setTracks', updatedTracks);
	}

	return (
		<div>
			<div>
				<h2>{t`Track listing`}</h2>
				<DivBtnAddTrack>
					<button onClick={addTrack}>+ {t`Add track`}</button>
				</DivBtnAddTrack>
				{p.tracks.length > 0 &&
					<DivGridTrackList>
						<DivHeader>#</DivHeader>
						<DivHeader>{t`Title`}</DivHeader>
						<DivHeader>{t`Note`}</DivHeader>
						<DivHeader>{t`Writer`}</DivHeader>
						<DivHeader>{t`Lyrics`}</DivHeader>
						<DivHeader>{t`Music`}</DivHeader>
						<DivHeader>{t`Length`}</DivHeader>
						<DivHeader></DivHeader>
						{p.tracks.map((tra, index) =>
							<TrackLine key={tra.id} index={index} track={tra}
								onRemove={removeTrack}
								onMoveUp={moveTrackUp}
								onChange={changedTrack}/>
						)}
					</DivGridTrackList>
				}
			</div>
			<Output tracks={p.tracks}/>
			<SectionFooter onClear={() => p.dispatchNow('setTracks', [])}/>
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

export default connect<Props, DispatchProps, {}, State>(
	({tracks}: State) => ({tracks}),
	mapDispatchToProps
)(TrackListing);
