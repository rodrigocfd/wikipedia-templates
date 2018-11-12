import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import withLocale from '../../react-multi-locale';
import Track from './Track';

/**
 * Main component for app route: track-listing.
 */
function TrackListing({t}) {
	const [output, setOutput] = useState('');
	const [tracks, setTracks] = useState([]);
	const [uniqueId, setUniqueId] = useState(0);

	useEffect(() => {
		setOutput(formatOutput());
	}, [t, tracks]);

	function addTrack() {
		setUniqueId(uniqueId + 1);
		const newTrack = {
			id: uniqueId,
			title: 'foo ' + uniqueId,
			writer: 'me',
			length: 0
		};
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

	function formatOutput() {
		let ret = '{{' + t`Track listing` + '\n';
		tracks.forEach((tra, idx) => {
			ret += tra.title ? `|${t('title{0}', idx+1)}=${tra.title}` : '';
			ret += tra.writer ? ` |${t('writer{0}', idx+1)}=${tra.writer}` : '';
			ret += '\n';
		});
		ret += '}}'
		return ret;
	}

	return (
		<div>
			<div>
				<h2>{t`Track listing`}</h2>
				<DivBtnAddTrack>
					<button onClick={addTrack}>+ {t`Add track`}</button>
				</DivBtnAddTrack>
				{tracks.length > 0 &&
					<DivTrackList>
						<DivHeader>#</DivHeader>
						<DivHeader>{t`Title`}</DivHeader>
						<DivHeader>{t`Writer`}</DivHeader>
						<DivHeader>{t`Length`}</DivHeader>
						<DivHeader></DivHeader>
						{tracks.map((tra, index) =>
							<Track key={tra.id} index={index} track={tra}
								onRemove={removeTrack}
								onMoveUp={moveTrackUp}
								onChange={changedTrack}/>
						)}
					</DivTrackList>
				}
			</div>
			<TextareaOut value={output} readOnly onClick={e => e.target.select()}></TextareaOut>
			<div>
				<Link to="/">{t`Home`}</Link>
			</div>
		</div>
	);
}

const DivBtnAddTrack = styled.div`
	margin-bottom: 10px;
`;
const DivTrackList = styled.div`
	padding: 10px 0;
	display: grid;
	grid-template-columns: 20px 300px 350px 100px auto;
`;
const DivHeader = styled.div`
	padding: 2px 6px;
`;
const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	width: 600px;
	height: 200px;
	margin: 20px 0;
	padding: 10px;
`;

export default withLocale('*_TrackListing')(TrackListing);
