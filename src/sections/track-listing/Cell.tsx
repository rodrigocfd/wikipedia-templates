import React, {memo, ReactNode} from 'react';
import styled from 'styled-components';

interface Props {
	children?: ReactNode;
	w?: number; // cell width in pixels
}

/**
 * One cell within the track forms grid.
 */
const Cell = memo<Props>(p => (
	<DivCell theWidth={p.w}>
		{p.children}
	</DivCell>
));

interface DivCellProps {
	theWidth?: number;
}

const DivCell = styled.div`
	display: inline-block;
	padding: 2px 6px;
	width: ${(p: DivCellProps) => p.theWidth ? (p.theWidth + 'px') : 'auto'}
`;

export default Cell;
