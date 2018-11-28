import React, {FunctionComponent, useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
import SectionFooter from '../SectionFooter';
import Output from './Output';

interface StateProps {
	coords: string;
}

interface Props extends StateProps, DispatchProps { }

/**
 * Main component for app route: coord.
 */
const Coord: FunctionComponent<Props> =
		({coords, dispatchNow}: Props) => {
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
					<input type="text" size={40} value={coords} ref={txt1}
						onChange={e => dispatchNow('setCoords', e.target.value)}/>
					<Output coords={coords}/>
				</div>
				<SectionFooter onClear={() => dispatchNow('setCoords', '')}/>
			</div>
		</div>
	);
};

export default connect<StateProps, DispatchProps, {}, State>(
	({coords}: State) => ({coords}),
	mapDispatchToProps
)(Coord);
