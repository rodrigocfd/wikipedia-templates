import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useLocale from '../react-use-locale';
import ChangeLanguage from './ChangeLanguage';

/**
 * Header to be shown on all pages.
 */
const Header: FunctionComponent = () => {
	const t = useLocale('*');

	return (
		<DivWrap>
			<DivLeft>
				<h1>{t`Wikipedia Templates`}</h1>
			</DivLeft>
			<DivRight>
				<ChangeLanguage/>
			</DivRight>
		</DivWrap>
	);
};

const DivWrap = styled.div`
	overflow: hidden;
	background-color: #f8f8f8;
	padding: 0 20px;
	border-bottom: 1px solid #f2f2f2;
`;
const DivLeft = styled.div`
	float: left;
	width: 60%;
`;
const DivRight = styled.div`
	float: left;
	width: 40%;
	text-align: right;
	padding-top: 8px;
`;

export default Header;