import React, {memo, useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StoreContext from '../../StoreContext';
import InlineRadio from '../InlineRadio';
import SectionFooter from '../SectionFooter';
import GoogleMapsLink from './GoogleMapsLink';
import OsmMap from './OsmMap';
import Output from './Output';
import {PossibleTypes, newCoordData} from './CoordData';

interface Props { }

/**
 * Main component for app route: coord.
 */
const Coord = memo<Props>(() => {
	const [store, setStore] = useContext(StoreContext);
	const t = useLocale('*_Coord');
	const txt1 = useRef<HTMLInputElement>(null);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	useEffect(() => {
		document.title = t`Coord` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Coord`}</h2>
			<div>
				<div>
					<InputCoords type="text" size={40} value={store.coord.latLng} ref={txt1}
						onChange={e => setStore({...store, coord: {...store.coord, latLng: e.target.value}})}/>
					<InlineRadio locale="*_Coord" name="type" value={store.coord.display}
						onChange={val => setStore({...store, coord: {...store.coord, display: val as PossibleTypes}})}
						options={['inline', 'title', 'inline,title']}
						labels={['inline', 'title', 'inline,title']}/>
				</div>
				<div>
					<GoogleMapsLink latLng={store.coord.latLng}/>
					<OsmMap latLng={store.coord.latLng}/>
					<Output coord={store.coord}/>
				</div>
				<SectionFooter onClear={() => setStore({...store, coord: newCoordData()})}/>
			</div>
		</div>
	);
});

const InputCoords = styled.input`
	margin-right: 20px;
`;

export default Coord;
