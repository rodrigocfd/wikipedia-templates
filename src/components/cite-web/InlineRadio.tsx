import React, {FormEvent, Fragment, FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';

interface InlineRadioProps {
	name: string;
	value?: string;
	options: string[],
	labels: string[],
	onChange: (e: FormEvent<HTMLInputElement>) => void;
}

/**
 * Prints a series of radio buttons, inline.
 */
const InlineRadio: FunctionComponent<InlineRadioProps> =
		({name, value, options, labels, onChange}: InlineRadioProps) => {
	const t = useLocale('*_CiteWeb');

	return (
		<Fragment>
			{options.map((opt, i) => (
				<LabelHand key={i}><InputHand type="radio"
					name={name} value={opt}
					checked={opt === value}
					onChange={onChange}/> {t(labels[i])}</LabelHand>
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
