/**
 * Extracts and validates latitude/longitude from user string.
 */
export default function extractLatLng(latLng: string | undefined):
		[number, number] | null {

	if (latLng === undefined || latLng === '') {
		return null;
	}

	let ll: string[] = latLng.split(',');
	if (ll.length !== 2) {
		return null;
	}

	ll[0] = ll[0].trim();
	ll[1] = ll[1].trim();
	if (!isNumber(ll[0]) || !isNumber(ll[1])) {
		return null;
	}

	return [parseFloat(ll[0]), parseFloat(ll[1])];
};

function isNumber(s: string | null | undefined): boolean {
	return s !== undefined &&
		s !== null &&
		s.length > 0 &&
		!isNaN(parseFloat(s));
}
