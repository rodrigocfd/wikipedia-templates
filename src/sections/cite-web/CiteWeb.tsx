import React, {memo, useEffect} from 'react';
import {connect} from 'react-redux';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
import SectionFooter from '../SectionFooter';
import Form from './Form';
import Output from './Output';
import Cite, {newCite} from './Cite';

interface StateProps {
	cite: Cite;
}

interface Props extends StateProps, DispatchProps { }

/**
 * Main component for app route: cite-web.
 */
const CiteWeb = memo<Props>(({cite, dispatchNow}) => {
	const t = useLocale('*_CiteWeb');

	useEffect(() => {
		document.title = t`Cite web` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Cite web`}</h2>
			<Form cite={cite} onChange={ci => dispatchNow('setCite', ci)}/>
			<Output cite={cite}/>
			<SectionFooter onClear={() => dispatchNow('setCite', newCite())}/>
		</div>
	);
});

export default connect<StateProps, DispatchProps, {}, State>(
	({cite}: State) => ({cite}),
	mapDispatchToProps
)(CiteWeb);
