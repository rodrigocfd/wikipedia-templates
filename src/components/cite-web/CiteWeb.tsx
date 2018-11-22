import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import YearMonthDay from './YearMonthDay';
import InlineRadio from './InlineRadio';
import Cite from './Cite';

interface Props { }

/**
 * Main component for app route: cite-web.
 */
const CiteWeb: FunctionComponent<Props> = () => {
	const t = useLocale('*_CiteWeb');
	const txt1 = useRef<HTMLInputElement>(null);

	const [output, setOutput] = useState('');
	const [cite, setCite] = useState({} as Cite);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	useEffect(() => {
		document.title = t`Cite web` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	useEffect(() => {
		setOutput(formatOutput());
	}, [t, cite]);

	function oneParam(name: string, val: string | undefined): string {
		return val ? ` |${t(name)}=${val}` : '';
	}

	function formatOutput(): string {
		return '<ref' + (cite.refName && ` name="${cite.refName}"`) + '>' +
			'{{' + t`Cite web` +
			oneParam('url', cite.url) +
			oneParam('title', cite.title) +
			oneParam('publisher', cite.publisher) +
			oneParam('date', cite.date) +
			oneParam('access-date', cite.accessDate) +
			oneParam('language', cite.language) +
			'}}</ref>';
	}

	return (
		<div>
			<h2>{t`Cite web`}</h2>
			<div>
				<div>
					<DivName>{t`Ref name`}</DivName>
					<input type="text" size={18} name="refName" value={cite.refName}
						onChange={e => setCite({...cite, refName: e.target.value})}
						ref={txt1}/>
				</div>
				<div>
					<DivName>{t`URL`}</DivName>
					<input type="text" size={100} name="url" value={cite.url}
						onChange={e => setCite({...cite, url: e.target.value})}
						autoComplete="off"/>
				</div>
				<div>
					<DivName>{t`Title`}</DivName>
					<input type="text" size={88} name="title" value={cite.title}
						onChange={e => setCite({...cite, title: e.target.value})}
						autoComplete="off"/>
				</div>
				<div>
					<DivName>{t`Publisher`}</DivName>
					<input type="text" size={88} name="publisher" value={cite.publisher}
						onChange={e => setCite({...cite, publisher: e.target.value})}
						autoComplete="off"/>
				</div>
				<div>
					<DivName>{t`Date`}</DivName>
					<YearMonthDay name="date" value={cite.date}
						onChange={val => setCite({...cite, date: val})}/>
				</div>
				<div>
					<DivName>{t`Access date`}</DivName>
					<YearMonthDay name="accessDate" value={cite.accessDate}
						onChange={val => setCite({...cite, accessDate: val})}/>
				</div>
				<div>
					<DivName>{t`Language`}</DivName>
					<InlineRadio name="language" value={cite.language}
						onChange={val => setCite({...cite, language: val})}
						options={['', 'en', 'es', 'fr', 'de', 'pt']}
						labels={['none', 'English', 'Spanish', 'French', 'German', 'Portuguese']}/>
				</div>
			</div>
			<TextareaOut value={output} readOnly onClick={e => e.currentTarget.select()}></TextareaOut>
			<Link to="/">{t`Home`}</Link>
		</div>
	);
};

const DivName = styled.div`
	display: inline-block;
	width: 150px;
	padding: 6px 0;
`;
const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	width: 99%;
	height: 100px;
	margin: 20px 0;
	padding: 10px;
`;

export default CiteWeb;
