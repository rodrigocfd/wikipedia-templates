import React from 'react';
import {Link} from 'react-router-dom';

import withIntz from '../../intz';
import Track from './Track';

/**
 * Main component for app route: track-listing.
 */
@withIntz()
class TrackListing extends React.Component {
	state = {
		numTracks: 3
	};

	addTrack = (e) => {
		this.setState({
			numTracks: this.state.numTracks + 1
		});
	}

	remTrack = (e) => {
		this.setState({
			numTracks: this.state.numTracks - 1
		});
	}

	render() {
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
						{[...Array(this.state.numTracks)].map((_, i) => (
							<Track key={i}/>
						))}
					</div>
				</div>
				<Link to="/">{t`Home`}</Link>
			</div>
		);
	}
}

export default TrackListing;
