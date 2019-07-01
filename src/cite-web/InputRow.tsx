import React, {FC, RefObject} from 'react';

interface Props {
	readonly label: string;
	readonly size: number;
	readonly value: string;
	readonly ref?: RefObject<HTMLInputElement>;
	readonly onChange: (val: string) => void;
}

const InputRow: FC<Props> = p => {
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
