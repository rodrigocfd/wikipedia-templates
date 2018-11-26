import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useLocale from '../react-use-locale';

interface Props {
	onClear?: () => void;
}

/**
 * Footer common to all sections.
 */
const SectionFooter: FunctionComponent<Props> =
		({onClear}: Props) => {
	const t = useLocale('*');

	return (
		<div>
			<Link to="/">{t`Home`}</Link>
			{onClear &&
				<ButtonClear onClick={e =>
					onClear && onClear()}>{t`clear all`}</ButtonClear>
			}
		</div>
	);
};

const ButtonClear = styled.button`
	margin-left: 16px;
`;

export default SectionFooter;
