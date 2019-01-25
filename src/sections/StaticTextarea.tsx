import React, {memo} from 'react';
import styled from 'styled-components';

interface Props {
	readonly name?: string;
	readonly value?: string;
	readonly className?: string;
}

/**
 * Basic textarea output component for all sections.
 */
const StaticTextarea = memo<Props>(p => {
	return (
		<TextareaOut readOnly name={p.name} value={p.value} className={p.className}
			onClick={e => e.currentTarget.select()}></TextareaOut>
	);
});

const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	padding: 10px;
`;

export default StaticTextarea;
