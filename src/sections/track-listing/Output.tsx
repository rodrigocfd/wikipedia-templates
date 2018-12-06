import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
import Track from './Track';

interface Props {
	name?: string;
	tracks: Track[];
}

/**
 * Outputs the formatted track listing.
 */
const Output = memo<Props>(({name, tracks}) => {
	const t = useLocale('*_TrackListing');

	function formatDuration(duration: number | ''): string {
		if (duration === '') {
			return '';
		} else {
			let sec: number = duration % 100;
			let min: number = (duration - sec) / 100;
			let secStr: string = (sec < 10) ? '0' + sec : sec.toString();
			return `${min}:${secStr}`;
		}
	}

	let fmt = '{{' + t`Track listing` + '\n';
	tracks.forEach((tra, idx) => {
		fmt += tra.title    ? `|${t('title{0}', idx+1)}=${tra.title}` : '';
		fmt += tra.note     ? ` |${t('note{0}', idx+1)}=${tra.note}` : '';
		fmt += tra.writer   ? ` |${t('writer{0}', idx+1)}=${tra.writer}` : '';
		fmt += tra.lyrics   ? ` |${t('lyrics{0}', idx+1)}=${tra.lyrics}` : '';
		fmt += tra.music    ? ` |${t('music{0}', idx+1)}=${tra.music}` : '';
		fmt += tra.duration ? ` |${t('length{0}', idx+1)}=${formatDuration(tra.duration)}` : '';
		fmt += '\n';
	});
	fmt += '}}'

	return (
		<StaticTextareaOut name={name} value={fmt}/>
	);
});

const StaticTextareaOut = styled(StaticTextarea)`
	width: 900px;
	height: 200px;
	margin-top: 20px;
`;

export default Output;
