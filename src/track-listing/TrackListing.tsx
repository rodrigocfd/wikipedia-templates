import React, {FC} from 'react';

import useStore from '../store/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import BrowserTitlebar from '../app/BrowserTitlebar';
import Footer from '../app/Footer';
import FieldChecks from './FieldChecks';
import AddTrack from './AddTrack';
import RowHeader from './RowHeader';
import RowTrack from './RowTrack';
import Output from './Output';
import Track from './Track';
import {newDataTrackListing} from '../store/DataTrackListing';

import en from './en.json';
import pt from './pt.json';

const TrackListing: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'TrackListing', {en, pt});

	return (<>
		<BrowserTitlebar title={t`Track listing`} />
		<h2>{t`Track listing`}</h2>
		<div>
			<FieldChecks />
			<AddTrack />
		</div>
		<div>
			<RowHeader />
			{store.trackListing.tracks.map((t: Track, i: number) =>
				<RowTrack key={t.id} track={t} position={i + 1} />
			)}
		</div>
		<Output />
		<Footer onClear={() => setStore({trackListing: newDataTrackListing()})} />
	</>);
};

export default TrackListing;
