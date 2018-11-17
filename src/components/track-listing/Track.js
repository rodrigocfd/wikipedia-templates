import React, {Fragment, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import DurationInput from './DurationInput';

/**
 * One single track, with many fields.
 */
function Track({index, track, onRemove, onMoveUp, onChange}) {
	const [t] = useLocale('*_TrackListing');
	const txt1 = useRef();

	const [title, setTitle] = useState(track.title);
	const [writer, setWriter] = useState(track.writer);
	const [duration, setDuration] = useState(track.duration);

	useEffect(() => {
		txt1.current.focus();
	}, [txt1]);

	useEffect(() => {
		if (onChange) {
			onChange({...track, title, writer, duration});
		}
	}, [title, writer, duration]);

	return (
		<Fragment>
			<DivLine>{index + 1}</DivLine>
			<DivLine><input type="text" name="title" value={title} ref={txt1}
				onChange={e => setTitle(e.target.value)}/></DivLine>
			<DivLine><input type="text" name="writer" value={writer}
				onChange={e => setWriter(e.target.value)}/></DivLine>
			<DivLine><DurationInput type="text" name="title" value={duration}
				onChange={e => setDuration(e.target.value)}/></DivLine>
			<DivLine>
				<ButtonSpaced onClick={() => onRemove && onRemove(index)}>&times; {t`Remove`}</ButtonSpaced>
				{index > 0 &&
					<ButtonSpaced onClick={() => onMoveUp && onMoveUp(index)}>&uarr; {t`Move up`}</ButtonSpaced>
				}
			</DivLine>
		</Fragment>
	);
}

Track.propTypes = {
	index: PropTypes.number.isRequired,
	track: PropTypes.shape({
			title: PropTypes.string,
			writer: PropTypes.string,
			duration: PropTypes.string
		}).isRequired,
	onRemove: PropTypes.func,
	onMoveUp: PropTypes.func,
	onChange: PropTypes.func
};

const DivLine = styled.div`
	margin-right: 16px;
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
