import React, {memo, useEffect} from 'react';
import {connect} from 'react-redux';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
import SectionFooter from '../SectionFooter';
import Form from './Form';
import Iframe from './Iframe';
import Output from './Output';
import Cite, {newCite} from './Cite';

interface Props {
	cite: Cite;
}

/**
 * Main component for app route: cite-web.
 */
const CiteWeb = memo<Props & DispatchProps>(p => {
	const t = useLocale('*_CiteWeb');

	useEffect(() => {
		document.title = t`Cite web` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Cite web`}</h2>
			<Form cite={p.cite} onChange={ci => p.dispatchNow('setCite', ci)}/>
			<Output cite={p.cite}/>
			<Iframe cite={p.cite}/>
			<SectionFooter onClear={() => p.dispatchNow('setCite', newCite())}/>
		</div>
	);
});

export default connect<Props, DispatchProps, {}, State>(
	({cite}: State) => ({cite}),
	mapDispatchToProps
)(CiteWeb);
