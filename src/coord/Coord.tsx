import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/useStore';
import genLocaleFunc from '../app/genLocaleFunc';
import BrowserTitlebar from '../app/BrowserTitlebar';
import Footer from '../app/Footer';
import InputFocused from '../app/InputFocused';
import RadiosInline from '../app/RadiosInline';
import GoogleMapsLink from './GoogleMapsLink';
import OsmMap from './OsmMap';
import Output from './Output';
import DataCoord, {CoordDisplay, newDataCoord} from '../store/DataCoord';

import en from './en.json';
import pt from './pt.json';

const Coord: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'Coord', {en, pt});

	function setCoord(d: Partial<DataCoord>) {
		setStore({
			coord: {...store.coord, ...d}
		});
	}

	return (<>
		<BrowserTitlebar title={t`Coord`} />
		<h2>{t`Coord`}</h2>
		<div>
			<div>
				{t`Latitude, longitude`}
				<InputFocusedCoords type="text" size={20} value={store.coord.latLng}
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
		<Footer onClear={() => setStore({coord: newDataCoord()})} />
	</>);
};

const InputFocusedCoords = styled(InputFocused)`
	margin-left: 8px;
	margin-right: 20px;
`;

export default Coord;
