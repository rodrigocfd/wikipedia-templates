import Track from './Track';
import {newFieldsShown} from './FieldsShown';

export function newTrackListingData() {
	return {
		tracks: [] as Track[],
		fieldsShown: newFieldsShown()
	};
};

export default interface TrackListingData
	extends ReturnType<typeof newTrackListingData> { };
