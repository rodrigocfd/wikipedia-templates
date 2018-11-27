import React, {FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
import SectionFooter from '../SectionFooter';

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

	useEffect(() => {
		document.title = t`Coord` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Coord`}</h2>
			<div>
				<div>
					<input type="text" size={40} value={coords}
						onChange={e => dispatchNow('setCoords', e.target.value)}/>
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
