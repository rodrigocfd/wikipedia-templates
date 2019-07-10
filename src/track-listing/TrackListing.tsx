import React, {FC} from 'react';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Footer from '../app/Footer';
import FieldChecks from './FieldChecks';
import TrackRow from './TrackRow';
import AddTrack from './AddTrack';
import Output from './Output';
import Track from './Track';

const TrackListing: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<div>
			<h2>{t`Track listing`}</h2>
			<div>
				<FieldChecks />
				<AddTrack />
			</div>
			<div>
				{store.trackListing.tracks.map((t: Track, i: number) =>
					<TrackRow key={t.id} id={t.id} position={i + 1} />
				)}
			</div>
			<Output />
			<Footer />
		</div>
	);
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
