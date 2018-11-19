import React, {Fragment, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import DurationInput from './DurationInput';
import trackPT from './trackPT';

/**
 * One single track, with many fields.
 */
function Track({index, track, onRemove, onMoveUp, onChange}) {
	const [t] = useLocale('*_TrackListing');
	const txt1 = useRef();

	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');
	const [writer, setWriter] = useState('');
	const [lyrics, setLyrics] = useState('');
	const [music, setMusic] = useState('');
	const [duration, setDuration] = useState('');

	useEffect(() => {
		txt1.current.focus();
	}, [txt1]);

	useEffect(() => {
		if (onChange) {
			onChange({...track, title, note, writer, lyrics, music, duration});
		}
	}, [title, note, writer, lyrics, music, duration]);

	return (
		<Fragment>
			<DivBox>{index + 1}</DivBox>
			<DivBox><input type="text" name="title" value={title} ref={txt1}
				onChange={e => setTitle(e.target.value)}/></DivBox>
			<DivBox><input type="text" name="note" value={note}
				onChange={e => setNote(e.target.value)}/></DivBox>
			<DivBox><input type="text" name="writer" value={writer}
				onChange={e => setWriter(e.target.value)}/></DivBox>
			<DivBox><input type="text" name="lyrics" value={lyrics}
				onChange={e => setLyrics(e.target.value)}/></DivBox>
			<DivBox><input type="text" name="music" value={music}
				onChange={e => setMusic(e.target.value)}/></DivBox>
			<DivBox><DurationInput type="text" name="title" value={duration}
				onChange={e => setDuration(e.target.value)}/></DivBox>
			<DivBox>
				<ButtonSpaced onClick={() => onRemove && onRemove(index)}>&times; {t`Remove`}</ButtonSpaced>
				{index > 0 &&
					<ButtonSpaced onClick={() => onMoveUp && onMoveUp(index)}>&uarr; {t`Move up`}</ButtonSpaced>
				}
			</DivBox>
		</Fragment>
	);
}

Track.propTypes = {
	index: PropTypes.number.isRequired,
	track: trackPT.isRequired,
	onRemove: PropTypes.func,
	onMoveUp: PropTypes.func,
	onChange: PropTypes.func
};

const DivBox = styled.div`
	margin-right: 6px;
	padding: 2px;
	& > input {
		margin-left: 4px;
		width: 100%;
	}
`;
const ButtonSpaced = styled.button`
	margin-left: 4px;
`;

export default Track;
