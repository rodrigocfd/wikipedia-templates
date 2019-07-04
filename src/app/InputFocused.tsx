import React, {FC, InputHTMLAttributes, useEffect, useRef} from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>;

/**
 * Wrapper to input element which sets focus on component render.
 */
const InputFocused: FC<Readonly<Props>> = p => {
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		ref && ref.current && ref.current.focus();
	}, [ref]);

	return (
		<input ref={ref} {...p} />
	);
};

export default InputFocused;
