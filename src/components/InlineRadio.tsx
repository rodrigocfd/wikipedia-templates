import React, {Fragment, FunctionComponent} from 'react';
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
const InlineRadio: FunctionComponent<Props> =
		({locale, name, value, options, labels, onChange}: Props) => {
	const t = useLocale(locale);

	return (
		<Fragment>
			{options.map((opt, i) => (
				<LabelHand key={i}><InputHand type="radio"
					name={name} value={opt}
					checked={opt === value}
					onChange={e => onChange && onChange(e.currentTarget.value)}/>
					{t(labels[i])}
				</LabelHand>
			))}
		</Fragment>
	);
};

const LabelHand = styled.label`
	cursor: pointer;
	margin-right: 8px;
`;
const InputHand = styled.input`
	cursor: pointer;
`;

export default InlineRadio;
