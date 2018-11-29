import React, {FunctionComponent, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
import InlineRadio from '../InlineRadio';
import SectionFooter from '../SectionFooter';
import YearMonthDay from './YearMonthDay';
import Output from './Output';
import Cite, {newCite} from './Cite';

interface StateProps {
	cite: Cite;
}

interface Props extends StateProps, DispatchProps { }

/**
 * Main component for app route: cite-web.
 */
const CiteWeb: FunctionComponent<Props> =
		({cite, dispatchNow}: Props) => {
	const t = useLocale('*_CiteWeb');
	const txt1 = useRef<HTMLInputElement>(null);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	useEffect(() => {
		document.title = t`Cite web` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Cite web`}</h2>
			<div>
				<div>
					<DivName>{t`Ref name`}</DivName>
					<input type="text" size={18} value={cite.refName} autoComplete="off" ref={txt1}
						onChange={e => dispatchNow('setCite', {...cite, refName: e.target.value})}/>
				</div>
				<div>
					<DivName>{t`URL`}</DivName>
					<input type="text" size={100} value={cite.url} autoComplete="off"
						onChange={e => dispatchNow('setCite', {...cite, url: e.target.value})}/>
				</div>
				<div>
					<DivName>{t`Title`}</DivName>
					<input type="text" size={88} value={cite.title} autoComplete="off"
						onChange={e => dispatchNow('setCite', {...cite, title: e.target.value})}/>
				</div>
				<div>
					<DivName>{t`Publisher`}</DivName>
					<input type="text" size={88} value={cite.publisher} autoComplete="off"
						onChange={e => dispatchNow('setCite', {...cite, publisher: e.target.value})}/>
				</div>
				<div>
					<DivName>{t`Date`}</DivName>
					<YearMonthDay value={cite.date}
						onChange={val => dispatchNow('setCite', {...cite, date: val})}/>
				</div>
				<div>
					<DivName>{t`Access date`}</DivName>
					<YearMonthDay value={cite.accessDate}
						onChange={val => dispatchNow('setCite', {...cite, accessDate: val})}/>
				</div>
				<div>
					<DivName>{t`Language`}</DivName>
					<InlineRadio locale="*_CiteWeb" name="language" value={cite.language}
						onChange={val => dispatchNow('setCite', {...cite, language: val})}
						options={['', 'en', 'es', 'fr', 'de', 'pt']}
						labels={['none', 'English', 'Spanish', 'French', 'German', 'Portuguese']}/>
				</div>
			</div>
			<Output cite={cite}/>
			<SectionFooter onClear={() => dispatchNow('setCite', newCite())}/>
		</div>
	);
};

const DivName = styled.div`
	display: inline-block;
	width: 150px;
	padding: 6px 0;
`;

export default connect<StateProps, DispatchProps, {}, State>(
	({cite}: State) => ({cite}),
	mapDispatchToProps
)(CiteWeb);
