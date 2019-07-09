import React, {FC, InputHTMLAttributes} from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;
type Label = { label: string; };

/**
 * Wrapper to input checkbox with attached label.
 */
const Check: FC<Readonly<Props & Label>> = p => {
	const {label, type, ...inputProps} = p;
	return (
		<label><input type="checkbox" {...inputProps} /> {label}</label>
	);
};

export default Check;
