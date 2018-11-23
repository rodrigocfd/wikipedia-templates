import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import Cite from './Cite';

interface Props {
	name?: string;
	cite: Cite;
}

/**
 * Outputs the formatted cite.
 */
const Output: FunctionComponent<Props> =
		({name, cite}: Props) => {
	const t = useLocale('*_CiteWeb');

	function oneParam(name: string, val: string | undefined): string {
		return val ? ` |${t(name)}=${val}` : '';
	}

	function formatDate(date: Date | undefined): string {
		if (!date) {
			return '';
		}

		const monthNames = [null, 'January', 'February', 'March', 'April',
			'May', 'June', 'July', 'August', 'September', 'October',
			'November', 'December'];
		// let formatted = '';

		// if (year && month && day) {
		// 	formatted = t('DateDMY {1} {0}, {2}', day, t(monthNames[+month]), year);
		// } else if (year && month && !day) {
		// 	formatted = t('DateMY {0}, {1}', t(monthNames[+month]), year);
		// } else if (year && !month && !day) {
		// 	formatted = year;
		// } else if (year || month || day) {
			// formatted = `${year}-${month}-${day}`;
		// }

		// return formatted;

		return `{${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}}`;
	}

	function formatOutput(): string {
		return '<ref' + (cite.refName && ` name="${cite.refName}"`) + '>' +
			'{{' + t`Cite web` +
			oneParam('url', cite.url) +
			oneParam('title', cite.title) +
			oneParam('publisher', cite.publisher) +
			oneParam('date', formatDate(cite.date)) +
			oneParam('access-date', formatDate(cite.accessDate)) +
			oneParam('language', cite.language) +
			'}}</ref>';
	}

	return (
		<TextareaOut name={name} value={formatOutput()} readOnly
			onClick={e => e.currentTarget.select()}></TextareaOut>
	);
};

const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	width: 99%;
	height: 100px;
	margin: 20px 0;
	padding: 10px;
`;

export default Output;
