import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withLocale from '../../react-multi-locale';

/**
 * One single track, with many fields.
 */
function Track({index, track, onRemove, onMoveUp, onChange, t}) {
	const [title, setTitle] = useState(track.title);
	const [writer, setWriter] = useState(track.writer);
	const [length, setLength] = useState(track.length);

	useEffect(() => {
		if (onChange) {
			onChange({...track, title, writer, length});
		}
	}, [title, writer, length]);

	return (
		<Fragment>
			<DivLine>{index + 1}</DivLine>
			<DivLine><input type="text" name="title" value={title}
				onChange={e => setTitle(e.target.value)}/></DivLine>
			<DivLine><input type="text" name="writer" value={writer}
				onChange={e => setWriter(e.target.value)}/></DivLine>
			<DivLine><input type="text" name="title" value={length}
				onChange={e => setLength(e.target.value)}/></DivLine>
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
			length: PropTypes.number
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


export default withLocale('*_TrackListing')(Track);
