import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
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

	function formatOutput() {
		let ret = '{{' + t`Track listing` + '\n';
		tracks.forEach((tra, idx) => {
			ret += tra.title ? `|${t('title{0}', idx+1)}=${tra.title}` : '';
			ret += tra.note ? ` |${t('note{0}', idx+1)}=${tra.note}` : '';
			ret += tra.writer ? ` |${t('writer{0}', idx+1)}=${tra.writer}` : '';
			ret += tra.lyrics ? ` |${t('lyrics{0}', idx+1)}=${tra.lyrics}` : '';
			ret += tra.music ? ` |${t('music{0}', idx+1)}=${tra.music}` : '';
			ret += tra.duration ? ` |${t('length{0}', idx+1)}=${tra.duration}` : '';
			ret += '\n';
		});
		ret += '}}'
		return ret;
	}

	return (
		<TextareaOut name={name} value={formatOutput()} readOnly
			onClick={e => e.currentTarget.select()}></TextareaOut>
	);
};

const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	width: 900px;
	height: 200px;
	margin: 20px 0;
	padding: 10px;
`;

export default Output;
