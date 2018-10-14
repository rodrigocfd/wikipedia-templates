import React from 'react';
import {Link} from 'react-router-dom';

import Intz from '../../intz';
import Track from './Track';

/**
 * Main component for app route: track-listing.
 */
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
		return (
			<div>
				<div>
					<h2><Intz str="Track listing"/></h2>
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
				<Link to="/"><Intz str="Home"/></Link>
			</div>
		);
	}
}

export default TrackListing;
