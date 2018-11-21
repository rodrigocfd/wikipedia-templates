import React, {FormEvent, FunctionComponent, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import YearMonthDay from './YearMonthDay';
import InlineRadio from './InlineRadio';

interface Props { }

/**
 * Main component for app route: cite-web.
 */
const CiteWeb: FunctionComponent<Props> = () => {
	const t = useLocale('*_CiteWeb');

	const txt1 = useRef<HTMLInputElement>(null);
	const [output, setOutput] = useState('');

	const [refName, setRefName] = useState('');
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');
	const [publisher, setPublisher] = useState('');
	const [date, setDate] = useState('');
	const [accessDate, setAccessDate] = useState('');
	const [language, setLanguage] = useState('');

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	useEffect(() => {
		document.title = t`Cite web` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	useEffect(() => {
		setOutput(formatOutput());
	}, [t, refName, url, title, publisher, date, accessDate, language]);

	function oneParam(name: string, val: string): string {
		return val ? ` |${t(name)}=${val}` : '';
	}

	function formatOutput(): string {
		return '<ref' + (refName && ` name="${refName}"`) + '>' +
			'{{' + t`Cite web` +
			oneParam('url', url) +
			oneParam('title', title) +
			oneParam('publisher', publisher) +
			oneParam('date', date) +
			oneParam('access-date', accessDate) +
			oneParam('language', language) +
			'}}</ref>';
	}

	return (
		<div>
			<h2>{t`Cite web`}</h2>
			<div>
				<div>
					<DivName>{t`Ref name`}</DivName>
					<input type="text" size={18} name="refName" value={refName}
						onChange={e => setRefName(e.target.value)} ref={txt1}/>
				</div>
				<div>
					<DivName>{t`URL`}</DivName>
					<input type="text" size={100} name="url" value={url}
						onChange={e => setUrl(e.target.value)} autoComplete="off"/>
				</div>
				<div>
					<DivName>{t`Title`}</DivName>
					<input type="text" size={88} name="title" value={title}
						onChange={e => setTitle(e.target.value)} autoComplete="off"/>
				</div>
				<div>
					<DivName>{t`Publisher`}</DivName>
					<input type="text" size={88} name="publisher" value={publisher}
						onChange={e => setPublisher(e.target.value)}/>
				</div>
				<div>
					<DivName>{t`Date`}</DivName>
					<YearMonthDay name="date" value={date}
						onChange={e => setDate(e.currentTarget.value)}/>
				</div>
				<div>
					<DivName>{t`Access date`}</DivName>
					<YearMonthDay name="accessDate" value={accessDate}
						onChange={e => setAccessDate(e.currentTarget.value)}/>
				</div>
				<div>
					<DivName>{t`Language`}</DivName>
					<InlineRadio name="language" value={language}
						onChange={e => setLanguage(e.currentTarget.value)}
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