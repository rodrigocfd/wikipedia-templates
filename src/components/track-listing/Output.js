import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import trackPT from './trackPT';

/**
 * Outputs the formatted track listing.
 */
function Output({tracks}) {
	const [t] = useLocale('*_TrackListing');

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
		<TextareaOut value={formatOutput()} readOnly
			onClick={e => e.target.select()}></TextareaOut>
	);
}

Output.propTypes = {
	tracks: PropTypes.arrayOf(trackPT).isRequired
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
