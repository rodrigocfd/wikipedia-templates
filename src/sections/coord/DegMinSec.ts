/**
 * Model for degree, minute and second data structure.
 */
export default interface DegMinSec {
	dec: number; // full decimal value
	d: string;
	m: string;
	s: string;
}

interface DegMinSecNumber {
	d: number;
	m: number;
	s: number;
}

export function newDegMinSec(decimal: number): DegMinSec {
	let dms: DegMinSecNumber = {d: 0, m: 0, s: 0};
	let ret = {dec: decimal, d: '', m: '', s: ''};

	decimal = Math.abs(decimal);
	dms.d = Math.floor(decimal);
	dms.m = Math.floor((decimal % 1) * 60);
	dms.s = (((decimal % 1) * 60) % 1) * 60;

	return {
		...ret,
		d: floatTrunc(dms.d, 2),
		m: floatTrunc(dms.m, 2),
		s: floatTrunc(dms.s, 2)
	}
}

function floatTrunc(num: number, digits: number): string {
	if (parseFloat(num.toFixed(2)) % 1 === 0) {
		return Math.floor(num).toString();
	}

	let n = '' + num.toFixed(digits);
	while (n[n.length - 1] === '0') {
		n = n.substr(0, n.length - 1);
	}
	return n;
}
