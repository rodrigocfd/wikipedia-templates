import React, {FC} from 'react';
import styled from 'styled-components';

interface Props {
	name: string;
	value?: string;
	options: string[];
	labels: string[];
	onChange: (value: string) => void;
}

/**
 * Prints a series of radio buttons, inline.
 */
const RadiosInline: FC<Readonly<Props>> = p => {
	return (<>
		{p.options.map((opt: string, i: number) => (
			<LabelHand key={i}><InputHand type="radio"
				name={p.name}
				value={opt}
				checked={opt === p.value}
				onChange={e => p.onChange(e.currentTarget.value)} />
				{p.labels[i]}
			</LabelHand>
		))}
	</>);
};

const LabelHand = styled.label`
	cursor: pointer;
	margin-right: 8px;
`;
const InputHand = styled.input`
	cursor: pointer;
`;

export default RadiosInline;
