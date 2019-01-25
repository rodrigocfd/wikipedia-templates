import React, {memo} from 'react';
import styled from 'styled-components';

import useLocale from '../react-use-locale';

interface Props {
	readonly locale: string;
	readonly name: string;
	readonly value?: string;
	readonly options: string[],
	readonly labels: string[],
	onChange?: (value: string) => void;
}

/**
 * Prints a series of radio buttons, inline.
 */
const InlineRadio = memo<Props>(p => {
	const t = useLocale(p.locale);

	return (<>
		{p.options.map((opt, i) => (
			<LabelHand key={i}><InputHand type="radio"
				name={p.name}
				value={opt}
				checked={opt === p.value}
				onChange={e => p.onChange && p.onChange(e.currentTarget.value)}/>
				{t(p.labels[i])}
			</LabelHand>
		))}
	</>);
});

const LabelHand = styled.label`
	cursor: pointer;
	margin-right: 8px;
`;
const InputHand = styled.input`
	cursor: pointer;
`;

export default InlineRadio;
