import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withLocale from '../../react-multi-locale';

/**
 * One single track, with many fields.
 */
function Track({track, t}) {
	const [title, setTitle] = React.useState(track.title);
	const [writer, setWriter] = React.useState(track.writer);
	const [length, setLength] = React.useState(track.length);

	return (
		<DivWrap>
			<div>{track.index + 1}</div>
			<div>{t`Title`} <input type="text" name="title" value={title}
				onChange={e => setTitle(e.target.value)}/></div>
			<div>{t`Writer`} <input type="text" name="writer" value={writer}
				onChange={e => setWriter(e.target.value)}/></div>
			<div>{t`Length`}</div>
		</DivWrap>
	);
}

Track.propTypes = {
	track: PropTypes.shape({
		index: PropTypes.number,
		title: PropTypes.string,
		writer: PropTypes.string,
		length: PropTypes.number
	})
};

const DivWrap = styled.div`
	padding: 6px 0;
`;

export default withLocale('*_TrackListing')(Track);
