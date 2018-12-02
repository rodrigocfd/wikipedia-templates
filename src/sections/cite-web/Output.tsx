import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
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

	function formatDate(date?: DayMonthYear): string {
		if (!date) {
			return '';
		}

		const monthNames = ['January', 'February', 'March', 'April',
			'May', 'June', 'July', 'August', 'September', 'October',
			'November', 'December'];
		let formatted = '';

		if (date.year && date.month && date.day) {
			formatted = t('DateDMY {1} {0}, {2}',
				date.day, t(monthNames[date.month - 1]), date.year);
		} else if (date.year && date.month && !date.day) {
			formatted = t('DateMY {0}, {1}',
				t(monthNames[date.month - 1]), date.year);
		} else if (date.year && !date.month && !date.day) {
			formatted = date.year.toString();
		} else if (date.year || date.month || date.day) {
			formatted = `${date.year}-${date.month}-${date.day}`;
		}

		return formatted;
	}

	function oneParam(name: string, val?: string): string {
		return val ? ` |${t(name)}=${val}` : '';
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
		<StaticTextareaOut name={name} value={formatOutput()}/>
	);
};

const StaticTextareaOut = styled(StaticTextarea)`
	width: 99%;
	height: 100px;
	margin-top: 20px;
`;

export default Output;
