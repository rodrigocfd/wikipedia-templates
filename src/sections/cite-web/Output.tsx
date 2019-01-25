import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
import DayMonthYear from '../DayMonthYear';
import onlyIf from '../onlyIf';
import Cite from './Cite';

interface Props {
	readonly name?: string;
	readonly cite: Cite;
}

/**
 * Outputs the formatted cite.
 */
const Output = memo<Props>(p => {
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

	const theDate = formatDate(p.cite.date);
	const theAccessDate = formatDate(p.cite.accessDate);

	const fmt = '<ref' + (p.cite.refName && ` name="${p.cite.refName}"`) + '>'
		+ '{{' + t`Cite web`
		+ onlyIf(p.cite.url,        ` |${t`URL`.toLowerCase()}=${p.cite.url}`)
		+ onlyIf(p.cite.title,      ` |${t`Title`.toLowerCase()}=${p.cite.title}`)
		+ onlyIf(p.cite.transTitle, ` |${t`trans-title`}=${p.cite.transTitle}`)
		+ onlyIf(p.cite.publisher,  ` |${t`publisher`}=${p.cite.publisher}`)
		+ onlyIf(theDate,           ` |${t`Date`.toLowerCase()}=${theDate}`)
		+ onlyIf(theAccessDate,     ` |${t`access-date`}=${theAccessDate}`)
		+ onlyIf(p.cite.language,   ` |${t`language`}=${p.cite.language}`)
		+ '}}</ref>';

	return (
		<StaticTextareaOut name={p.name} value={fmt}/>
	);
});

const StaticTextareaOut = styled(StaticTextarea)`
	width: 90%;
	height: 70px;
	margin-top: 20px;
`;

export default Output;
