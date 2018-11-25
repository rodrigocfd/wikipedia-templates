import React, {FunctionComponent, useEffect} from 'react';
import {Link} from 'react-router-dom';

import useLocale from '../../react-use-locale';

interface Props { }

/**
 * Main component for app route: coord.
 */
const Coord: FunctionComponent<Props> = () => {
	const t = useLocale('*_Coord');

	useEffect(() => {
		document.title = t`Coord` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Coord`}</h2>
			<div>
				<Link to="/">{t`Home`}</Link>
			</div>
		</div>
	);
};

export default Coord;
