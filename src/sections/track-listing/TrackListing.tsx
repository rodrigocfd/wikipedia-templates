import React, {memo, useContext, useEffect} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StoreContext from '../../StoreContext';
import SectionFooter from '../SectionFooter';
import FieldCheckboxes from './FieldCheckboxes';
import Output from './Output';
import Track, {newTrack} from './Track';
import Fields from './Fields';
import Grid from './Grid';

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
				tracks
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

	return (
		<div>
			<div>
				<h2>{t`Track listing`}</h2>
				<DivControls>
					<button onClick={addTrack}>+ {t`Add track`}</button>
					<FieldCheckboxes fields={store.trackListing.fields}
						onChangeFields={fields => setFields(fields)}/>
				</DivControls>
				<Grid tracks={store.trackListing.tracks}
					fields={store.trackListing.fields}
					onChangeTracks={tracks => setTracks(tracks)}/>
			</div>
			<Output tracks={store.trackListing.tracks}
				fields={store.trackListing.fields}/>
			<SectionFooter onClear={() => setTracks([])}/>
		</div>
	);
});

const DivControls = styled.div`
	margin-bottom: 10px;
`;

export default TrackListing;
