import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withLocale from '../../react-multi-locale';

/**
 * One single track, with many fields.
 */
@withLocale('*_TrackListing')
class Track extends React.Component {
	static propTypes = {
		track: PropTypes.object.isRequired
	};

	state = {
		index: this.props.track.index,
		title: this.props.track.title
	};

	changed = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const {t} = this.props;
		const {index, title} = this.state;
		return (
			<DivWrap>
				<div>{index + 1}</div>
				<div>{t`Title`} <input type="text" name="title" value={title} onChange={this.changed}/></div>
				<div>{t`Writer`} <input type="text" name="writer" onChange={this.changed}/></div>
				<div>{t`Length`}</div>
			</DivWrap>
		);
	}
}

const DivWrap = styled.div`
	padding: 6px 0;
`;

export default Track;
