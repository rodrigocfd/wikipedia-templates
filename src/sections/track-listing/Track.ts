/**
 * Model for a single track.
 */
export default interface Track {
	id: number;
	title: string;
	note: string;
	writer: string;
	lyrics: string;
	music: string;
	duration: number | '';
}

let uniqueId = 0;

function newTrackId(): number {
	return uniqueId++;
}

export function newTrack(): Track {
	return {
		id: newTrackId(),
		title: '',
		note: '',
		writer: '',
		lyrics: '',
		music: '',
		duration: ''
	};
}
