import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withLocale from '../../react-multi-locale';

const Track = ({track, t}) => (
	<DivWrap>
		<div>{t`Title`}: {track.title}</div>
		<div>{t`Writer`}</div>
		<div>{t`Length`}</div>
	</DivWrap>
);

Track.propTypes = {
	track: PropTypes.object.isRequired
};

const DivWrap = styled.div`
	padding: 6px 0;
`;

export default withLocale('*_TrackListing')(Track);
