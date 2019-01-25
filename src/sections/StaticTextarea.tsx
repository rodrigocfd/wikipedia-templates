import React, {memo} from 'react';
import styled from 'styled-components';

interface Props {
	name?: string;
	value?: string;
	className?: string;
}

/**
 * Basic textarea output component for all sections.
 */
const StaticTextarea = memo<Props>(p => {
	return (
		<TextareaOut readOnly name={name} value={p.value} className={p.className}
			onClick={e => e.currentTarget.select()}></TextareaOut>
	);
});

const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	padding: 10px;
`;

export default StaticTextarea;
