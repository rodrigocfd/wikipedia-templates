import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useLocale from '../react-use-locale';

interface Props {
	onClear?: () => void;
}

/**
 * Footer common to all sections.
 */
function SectionFooter(p: Props) {
	const t = useLocale('*');

	return (
		<DivWrap>
			<Link to="/">{t`Home`}</Link>
			{p.onClear &&
				<ButtonClear onClick={e =>
					p.onClear && p.onClear()}>{t`clear all`}</ButtonClear>
			}
		</DivWrap>
	);
}

const DivWrap = styled.div`
	margin-top: 20px;
`;
const ButtonClear = styled.button`
	margin-left: 16px;
`;

export default SectionFooter;
