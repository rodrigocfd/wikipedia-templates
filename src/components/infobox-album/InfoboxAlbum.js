import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import useLocale from '../../react-use-locale';

/**
 * Main component for app route: infobox-album.
 */
function InfoboxAlbum() {
	const t = useLocale('*_InfoboxAlbum');

	useEffect(() => {
		document.title = t`Infobox album` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Infobox album`}</h2>
			<div>
				<Link to="/">{t`Home`}</Link>
			</div>
		</div>
	);
}

export default InfoboxAlbum;
