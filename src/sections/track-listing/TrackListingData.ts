import Track from './Track';
import Fields, {newFields} from './Fields';

/**
 * Model for the track listing.
 */
export default interface TrackListingData {
	tracks: Track[];
	fields: Fields;
}

export function newTrackListingData(): TrackListingData {
	return {
		tracks: [],
		fields: newFields()
	}
}
