import React, {FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
import SectionFooter from '../SectionFooter';
import TrackLine from './TrackLine';
import Output from './Output';
import Track, {newTrack} from './Track';

interface StateProps {
	tracks: Track[];
}

interface Props extends StateProps, DispatchProps { }

/**
 * Main component for app route: track-listing.
 */
const TrackListing: FunctionComponent<Props> =
		({tracks, dispatchNow}: Props) => {
	const t = useLocale('*_TrackListing');

	useEffect(() => {
		document.title = t`Track listing` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	function addTrack(): void {
		dispatchNow('setTracks', [...tracks, newTrack()]);
	}

	function removeTrack(index: number): void {
		let newList = [...tracks];
		newList.splice(index, 1);
		dispatchNow('setTracks', newList);
	}

	function moveTrackUp(index: number): void {
		let newList = [...tracks];
		if (index > 0) {
			const tmp = newList[index];
			newList[index] = newList[index - 1];
			newList[index - 1] = tmp;
			dispatchNow('setTracks', newList);
		}
	}

	function changedTrack(track: Track): void {
		const updatedTracks = tracks.map(tra =>
			tra.id === track.id ? track : tra);
		dispatchNow('setTracks', updatedTracks);
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
							<TrackLine key={tra.id} index={index} track={tra}
								onRemove={removeTrack}
								onMoveUp={moveTrackUp}
								onChange={changedTrack}/>
						)}
					</DivGridTrackList>
				}
			</div>
			<Output tracks={tracks}/>
			<SectionFooter onClear={() => dispatchNow('setTracks', [])}/>
		</div>
	);
};

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

export default connect<StateProps, DispatchProps, {}, State>(
	({tracks}: State) => ({tracks}),
	mapDispatchToProps
)(TrackListing);
