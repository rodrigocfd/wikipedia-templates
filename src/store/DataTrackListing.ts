import Track from '../track-listing/Track';
import {newFieldsShown} from '../track-listing/FieldsShown';

export function newDataTrackListing() {
	return {
		tracks: [] as Track[],
		fieldsShown: newFieldsShown()
	};
};

export default interface DataTrackListing
	extends ReturnType<typeof newDataTrackListing> { };
