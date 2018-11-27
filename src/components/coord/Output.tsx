import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';

interface Props {
	name?: string;
	coords: string;
}

/**
 * Outputs the formatted latitude and longitude.
 */
const Output: FunctionComponent<Props> =
		({name, coords}: Props) => {
	const t = useLocale('*_CiteWeb');

	function formatOutput(): string {
		if (coords === '') {
			return '';
		}
		return coords;
	}

	return (
		<div>
			<TextareaOut name={name} value={formatOutput()} readOnly
				onClick={e => e.currentTarget.select()}></TextareaOut>
		</div>
	);
};

const TextareaOut = styled.textarea`
	font-family: monospace;
	border: 1px solid #ccc;
	width: 500px;
	height: 80px;
	margin-top: 20px;
	padding: 10px;
`;

export default Output;
