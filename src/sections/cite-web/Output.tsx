import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
import DayMonthYear from '../DayMonthYear';
import Cite from './Cite';

interface Props {
	name?: string;
	cite: Cite;
}

/**
 * Outputs the formatted cite.
 */
const Output = memo<Props>(({name, cite}) => {
	const t = useLocale('*_CiteWeb');

	function formatDate(date: DayMonthYear): string {
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

	const theDate = formatDate(cite.date);
	const theAccessDate = formatDate(cite.accessDate);

	const fmt = '<ref' + (cite.refName && ` name="${cite.refName}"`) + '>'
		+ '{{' + t`Cite web`
		+ (cite.url       ? ` |${t('url')}=${cite.url}` : '')
		+ (cite.title     ? ` |${t('title')}=${cite.title}` : '')
		+ (cite.publisher ? ` |${t('publisher')}=${cite.publisher}` : '')
		+ (theDate        ? ` |${t('date')}=${theDate}` : '')
		+ (theAccessDate  ? ` |${t('access-date')}=${theAccessDate}` : '')
		+ (cite.language  ? ` |${t('language')}=${cite.language}` : '')
		+ '}}</ref>';

	return (
		<StaticTextareaOut name={name} value={fmt}/>
	);
});

const StaticTextareaOut = styled(StaticTextarea)`
	width: 99%;
	height: 100px;
	margin-top: 20px;
`;

export default Output;
