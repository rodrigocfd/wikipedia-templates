import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

interface Props {
	name?: string;
	value?: string;
	className?: string;
}

/**
 * Basic textarea output component for all sections.
 */
const StaticTextarea: FunctionComponent<Props> =
		({name, value, className}: Props) => {

	return (
		<TextareaOut readOnly name={name} value={value} className={className}
			onClick={e => e.currentTarget.select()}></TextareaOut>
	);
};

const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	padding: 10px;
`;

export default StaticTextarea;
