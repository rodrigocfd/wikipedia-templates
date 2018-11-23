import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import DayMonthYear from './DayMonthYear';
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

	function oneParam(name: string, val?: string): string {
		return val ? ` |${t(name)}=${val}` : '';
	}

	function formatDate(date?: DayMonthYear): string {
		if (!date) {
			return '';
		}

		const monthNames = [null, 'January', 'February', 'March', 'April',
			'May', 'June', 'July', 'August', 'September', 'October',
			'November', 'December'];
		let formatted = '';

		if (date.year !== 0 && date.month !== 0 && date.day !== 0) {
			formatted = t('DateDMY {1} {0}, {2}',
				date.day, t(monthNames[date.month]), date.year);
		} else if (date.year !== 0 && date.month !== 0 && date.day === 0) {
			formatted = t('DateMY {0}, {1}',
				t(monthNames[date.month]), date.year);
		} else if (date.year !== 0 && date.month === 0 && date.day === 0) {
			formatted = date.year.toString();
		} else if (date.year !== 0 || date.month !== 0 || date.day !== 0) {
			formatted = `${date.year}-${date.month}-${date.day}`;
		}

		return formatted;
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
