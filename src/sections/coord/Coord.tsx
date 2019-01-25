import React, {memo, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
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
const Coord = memo<Props & DispatchProps>(({coords, dispatchNow}) => {
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
					<InputCoords type="text" size={40} value={coords.latLng} ref={txt1}
						onChange={e => dispatchNow('setCoords',
							{...coords, latLng: e.target.value})}/>
					<InlineRadio locale="*_Coord" name="type" value={coords.display}
						onChange={val => dispatchNow('setCoords', {...coords, display: val})}
						options={['inline', 'title', 'inline,title']}
						labels={['inline', 'title', 'inline,title']}/>
				</div>
				<div>
					<GoogleMapsLink latLng={coords.latLng}/>
					<OsmMap latLng={coords.latLng}/>
					<Output coords={coords}/>
				</div>
				<SectionFooter onClear={() => dispatchNow('setCoords', '')}/>
			</div>
		</div>
	);
});

const InputCoords = styled.input`
	margin-right: 20px;
`;

export default connect<Props, DispatchProps, {}, State>(
	({coords}: State) => ({coords}),
	mapDispatchToProps
)(Coord);
