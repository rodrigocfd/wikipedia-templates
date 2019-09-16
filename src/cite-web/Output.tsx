import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/useStore';
import genLocaleFunc from '../app/genLocaleFunc';
import TextAreaOut from '../app/TextAreaOut';
import DayMonthYear from '../app/DayMonthYear';

import en from './en.json';
import pt from './pt.json';

const Output: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, 'Output', {en, pt});
	const c = store.citeWeb;

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

	const theDate = formatDate(c.date);
	const theAccessDate = formatDate(c.accessDate);

	const out = '<ref' + (c.refName && ` name="${c.refName}"`) + '>'
		+ '{{' + t`Cite web`
		+ (c.url         && ` |${t`url`}=${c.url}`)
		+ (c.title       && ` |${t`title`}=${c.title}`)
		+ (c.transTitle  && ` |${t`trans-title`}=${c.transTitle}`)
		+ (c.publisher   && ` |${t`publisher`}=${c.publisher}`)
		+ (theDate       && ` |${t`date`}=${theDate}`)
		+ (theAccessDate && ` |${t`access-date`}=${theAccessDate}`)
		+ (c.language    && ` |${t`language`}=${c.language}`)
		+ '}}</ref>';

	return (
		<TextAreaCiteWeb value={out} />
	);
};

const TextAreaCiteWeb = styled(TextAreaOut)`
	width: 90%;
	height: 70px;
	margin-top: 20px;
`;

export default Output;
