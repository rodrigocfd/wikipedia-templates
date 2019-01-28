import React, {memo, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import {DispatchProp, mapDispatchToProps, ReduxState} from '../../store';
import InlineRadio from '../InlineRadio';
import SectionFooter from '../SectionFooter';
import GoogleMapsLink from './GoogleMapsLink';
import OsmMap from './OsmMap';
import Output from './Output';
import CoordData from './CoordData';

interface Props {
	coords: CoordData;
}

/**
 * Main component for app route: coord.
 */
const Coord = memo<Props & DispatchProp>(p => {
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
					<InputCoords type="text" size={40} value={p.coords.latLng} ref={txt1}
						onChange={e => p.dispatchNow('setCoords',
							{...p.coords, latLng: e.target.value})}/>
					<InlineRadio locale="*_Coord" name="type" value={p.coords.display}
						onChange={val => p.dispatchNow('setCoords', {...p.coords, display: val})}
						options={['inline', 'title', 'inline,title']}
						labels={['inline', 'title', 'inline,title']}/>
				</div>
				<div>
					<GoogleMapsLink latLng={p.coords.latLng}/>
					<OsmMap latLng={p.coords.latLng}/>
					<Output coords={p.coords}/>
				</div>
				<SectionFooter onClear={() => p.dispatchNow('setCoords', '')}/>
			</div>
		</div>
	);
});

const InputCoords = styled.input`
	margin-right: 20px;
`;

export default connect<Props, DispatchProp, {}, ReduxState>(
	({coords}: ReduxState) => ({coords}),
	mapDispatchToProps
)(Coord);
