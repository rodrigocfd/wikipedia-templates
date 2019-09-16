import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/useStore';
import genLocaleFunc from '../app/genLocaleFunc';
import TextAreaOut from '../app/TextAreaOut';
import Track from './Track';

import en from './en.json';
import pt from './pt.json';

const Output: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, 'Output', {en, pt});
	const fs = store.trackListing.fieldsShown;

	function fmtDuration(duration: number | ''): string {
		if (duration === '') {
			return '';
		} else {
			let sec: number = duration % 100;
			let min: number = (duration - sec) / 100;
			let secStr: string = (sec < 10) ? '0' + sec : sec.toString();
			return `${min}:${secStr}`;
		}
	}

	function c(check: boolean): boolean | string {
		return check ? true : '';
	}

	let out = '{{' + t`Track listing` + '\n';
	store.trackListing.tracks.forEach((tra: Track, idx: number) => {
		const row = (tra.title &&            `|${t('title{0}', idx+1)}=${tra.title}`)
			+ (c(fs.note) && tra.note &&     ` |${t('note{0}', idx+1)}=${tra.note}`)
			+ (c(fs.writer) && tra.writer && ` |${t('writer{0}', idx+1)}=${tra.writer}`)
			+ (c(fs.lyrics) && tra.lyrics && ` |${t('lyrics{0}', idx+1)}=${tra.lyrics}`)
			+ (c(fs.music) && tra.music &&   ` |${t('music{0}', idx+1)}=${tra.music}`)
			+ (tra.duration &&               ` |${t('length{0}', idx+1)}=${fmtDuration(tra.duration)}`);
		if (row.length) {
			out += row + '\n';
		}
	});
	out += '}}';

	return (
		<TextAreaTrackListing value={out} />
	);
};

const TextAreaTrackListing = styled(TextAreaOut)`
	width: 900px;
	height: 200px;
	margin-top: 20px;
`;

export default Output;
