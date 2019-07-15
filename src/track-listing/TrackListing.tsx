import React, {FC} from 'react';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import PageTitle from '../app/PageTitle';
import Footer from '../app/Footer';
import FieldChecks from './FieldChecks';
import AddTrack from './AddTrack';
import RowHeader from './RowHeader';
import RowTrack from './RowTrack';
import Output from './Output';
import Track from './Track';
import {newTrackListingData} from './TrackListingData';

const TrackListing: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (<>
		<PageTitle title={t`Track listing`} />
		<h2>{t`Track listing`}</h2>
		<div>
			<FieldChecks />
			<AddTrack />
		</div>
		<div>
			<RowHeader />
			{store.trackListing.tracks.map((t: Track, i: number) =>
				<RowTrack key={t.id} id={t.id} position={i + 1} />
			)}
		</div>
		<Output />
		<Footer onClear={() => setStore({trackListing: newTrackListingData()})} />
	</>);
};

const locales: LocaleList = {
	en: {
		'Track listing': 'Track listing'
	},
	pt: {
		'Track listing': 'Lista de faixas'
	}
};

export default TrackListing;
