import React from 'react';
import {Link} from 'react-router-dom';

import withLocale from '../../react-multi-locale';
import Track from './Track';

/**
 * Main component for app route: track-listing.
 */
@withLocale('*_TrackListing')
class TrackListing extends React.Component {
	state = {
		tracks: []
	};

	addTrack = (e) => {
		this.setState({
			tracks: [...this.state.tracks, {title: 'foo'}]
		});
	}

	remTrack = (e) => {
		if (this.state.tracks.length) {
			this.setState({
				tracks: this.state.tracks.slice(0, -1)
			});
		}
	}

	render() {
		const {tracks} = this.state;
		const {t} = this.props;
		return (
			<div>
				<div>
					<h2>{t`Track listing`}</h2>
					<div>
						<button onClick={this.addTrack}>Add</button>{' '}
						<button onClick={this.remTrack}>Remove</button>
					</div>
					<div>
						{tracks.map((v, i) =>
							<Track track={v} key={i}>{v.title}</Track>
						)}
					</div>
				</div>
				<Link to="/">{t`Home`}</Link>
			</div>
		);
	}
}

export default TrackListing;
