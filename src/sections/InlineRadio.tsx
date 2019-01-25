import React, {Fragment, memo} from 'react';
import styled from 'styled-components';

import useLocale from '../react-use-locale';

interface Props {
	locale: string;
	name: string;
	value?: string;
	options: string[],
	labels: string[],
	onChange?: (value: string) => void;
}

/**
 * Prints a series of radio buttons, inline.
 */
const InlineRadio = memo<Props>(p => {
	const t = useLocale(p.locale);

	return (
		<Fragment>
			{p.options.map((opt, i) => (
				<LabelHand key={i}><InputHand type="radio"
					name={name} value={opt}
					checked={opt === p.value}
					onChange={e => p.onChange && p.onChange(e.currentTarget.value)}/>
					{t(p.labels[i])}
				</LabelHand>
			))}
		</Fragment>
	);
});

const LabelHand = styled.label`
	cursor: pointer;
	margin-right: 8px;
`;
const InputHand = styled.input`
	cursor: pointer;
`;

export default InlineRadio;
