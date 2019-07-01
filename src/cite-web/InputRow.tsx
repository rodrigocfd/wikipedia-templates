import React, {FC, RefObject} from 'react';

interface Props {
	label: string;
	size: number;
	value: string;
	ref?: RefObject<HTMLInputElement>;
	onChange: (val: string) => void;
}

const InputRow: FC<Readonly<Props>> = p => {
	return (
		<div>
			<div>{p.label}</div>
			<input type="text" autoComplete="off"
				size={p.size} ref={p.ref} value={p.value}
				onChange={e => p.onChange(e.target.value)} />
		</div>
	);
};

export default InputRow;
