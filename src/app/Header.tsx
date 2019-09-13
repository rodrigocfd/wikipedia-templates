import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from './ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import ChangeLang from './ChangeLang';

import en from './en.json';
import pt from './pt.json';

/**
 * Main app header.
 */
const Header: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, 'Header', {en, pt});

	return (
		<Wrap>
			<div>
				<h1>{t`Wikipedia Templates`}</h1>
			</div>
			<div>
				<ChangeLang />
			</div>
		</Wrap>
	);
};

const Wrap = styled.div`
	overflow: hidden;
	background-color: #f8f8f8;
	padding: 0 20px;
	border-bottom: 1px solid #f2f2f2;

	& > div:nth-of-type(1) {
		float: left;
		width: 60%;
	}
	& > div:nth-of-type(2) {
		float: left;
		width: 40%;
		text-align: right;
		padding-top: 8px;
	}
`;

export default Header;
