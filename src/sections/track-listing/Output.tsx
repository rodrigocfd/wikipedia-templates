import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StaticTextarea from '../StaticTextarea';
import onlyIf from '../onlyIf';
import Track from './Track';

interface Props {
	name?: string;
	tracks: Track[];
}

/**
 * Outputs the formatted track listing.
 */
const Output = memo<Props>(p => {
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
	p.tracks.forEach((tra, idx) => {
		fmt += onlyIf(tra.title,   `|${t('title{0}', idx+1)}=${tra.title}`)
			+ onlyIf(tra.note,     ` |${t('note{0}', idx+1)}=${tra.note}`)
			+ onlyIf(tra.writer,   ` |${t('writer{0}', idx+1)}=${tra.writer}`)
			+ onlyIf(tra.lyrics,   ` |${t('lyrics{0}', idx+1)}=${tra.lyrics}`)
			+ onlyIf(tra.music,    ` |${t('music{0}', idx+1)}=${tra.music}`)
			+ onlyIf(tra.duration, ` |${t('length{0}', idx+1)}=${formatDuration(tra.duration)}`)
			+ '\n';
	});
	fmt += '}}'

	return (
		<StaticTextareaOut name={p.name} value={fmt}/>
	);
});

const StaticTextareaOut = styled(StaticTextarea)`
	width: 900px;
	height: 200px;
	margin-top: 20px;
`;

export default Output;
