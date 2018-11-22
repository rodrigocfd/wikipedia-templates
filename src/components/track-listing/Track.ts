/**
 * Descriptor for a single track.
 */
export default interface Track {
	id: number;
	title?: string;
	note?: string;
	writer?: string;
	lyrics?: string;
	music?: string;
	duration?: string;
}
