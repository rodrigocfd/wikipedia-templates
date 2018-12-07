/**
 * Returns empty string is first argument isn't truthy, just a
 * shorthand to ternary operator.
 */
export default function onlyIf(checkIfTruthy: string | number,
		toShow: string): string {
	return checkIfTruthy ? toShow : '';
}
