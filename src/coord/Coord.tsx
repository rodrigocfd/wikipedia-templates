import React, {FC} from 'react'
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Footer from '../app/Footer';
import useRefFocusFirst from '../app/useRefFocusFirst';
import RadiosInline from '../app/RadiosInline';
import GoogleMapsLink from './GoogleMapsLink';
import OsmMap from './OsmMap';
import Output from './Output';
import CoordData, {CoordDisplay} from './CoordData';

const Coord: FC = () => {
	const txtCoords = useRefFocusFirst<HTMLInputElement>();
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	function setCoord(d: Partial<CoordData>) {
		setStore({
			coord: {...store.coord, ...d}
		});
	}

	return (<>
		<h2>{t`Coord`}</h2>
		<div>
			<div>
				{t`Latitude, longitude`}
				<InputCoords type="text" size={20} value={store.coord.latLng} ref={txtCoords}
					onChange={e => setCoord({latLng: e.target.value})} />
				<RadiosInline name="type" value={store.coord.display}
					onChange={val => setCoord({display: val as CoordDisplay})}
					options={['inline', 'title', 'inline,title']}
					labels={[t`inline`, t`title`, t`inline,title`]} />
			</div>
			<div>
				<GoogleMapsLink />
				<OsmMap />
				<Output />
			</div>
		</div>
		<Footer />
	</>);
};

const InputCoords = styled.input`
	margin-left: 8px;
	margin-right: 20px;
`;

const locales: LocaleList = {
	en: {
		'Coord': 'Coord',
		'Latitude, longitude': 'Latitude, longitude',
		'inline': 'inline',
		'title': 'title',
		'inline,title': 'inline,title'
	},
	pt: {
		'Coord': 'Coor dms',
		'Latitude, longitude': 'Latitude, longitude',
		'inline': 'emlinha',
		'title': 'título',
		'inline,title': 'emlinha,título'
	}
};

export default Coord;