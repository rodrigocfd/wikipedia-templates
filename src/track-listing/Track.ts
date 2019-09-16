let uniqueId = 0;

function newTrackId(): number {
	return uniqueId++;
}

/**
 * A single track.
 */
export function newTrack() {
	return {
		id: newTrackId(),
		title: '',
		note: '',
		writer: '',
		lyrics: '',
		music: '',
		duration: '' as (number | '')
	};
};

export default interface Track
	extends ReturnType<typeof newTrack> { };
