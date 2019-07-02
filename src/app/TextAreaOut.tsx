import React, {FC} from 'react';
import styled from 'styled-components';

interface Props {
	name?: string;
	value?: string;
	className?: string;
}

/**
 * Styled textarea to display the template output.
 * Width/height are not set here.
 */
const TextAreaOut: FC<Readonly<Props>> = p => (
	<Txtarea name={p.name} value={p.value}
		readOnly className={p.className}
		onClick={e => e.currentTarget.select()} />
);

const Txtarea = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	padding: 10px;
`;

export default TextAreaOut;
