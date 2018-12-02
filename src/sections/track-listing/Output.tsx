import React, {FunctionComponent} from 'react';
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
const Output: FunctionComponent<Props> =
		({name, tracks}: Props) => {

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

	function formatOutput(): string {
		let ret = '{{' + t`Track listing` + '\n';
		tracks.forEach((tra, idx) => {
			ret += tra.title ? `|${t('title{0}', idx+1)}=${tra.title}` : '';
			ret += tra.note ? ` |${t('note{0}', idx+1)}=${tra.note}` : '';
			ret += tra.writer ? ` |${t('writer{0}', idx+1)}=${tra.writer}` : '';
			ret += tra.lyrics ? ` |${t('lyrics{0}', idx+1)}=${tra.lyrics}` : '';
			ret += tra.music ? ` |${t('music{0}', idx+1)}=${tra.music}` : '';
			ret += tra.duration ? ` |${t('length{0}', idx+1)}=${formatDuration(tra.duration)}` : '';
			ret += '\n';
		});
		ret += '}}'
		return ret;
	}

	return (
		<StaticTextareaOut name={name} value={formatOutput()}/>
	);
};

const StaticTextareaOut = styled(StaticTextarea)`
	width: 900px;
	height: 200px;
	margin-top: 20px;
`;

export default Output;
