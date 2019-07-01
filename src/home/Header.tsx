import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import ChangeLang from './ChangeLang';

const Header: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

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

const locales = {
	en: {
		'Wikipedia Templates': 'Wikipedia Templates'
	},
	pt: {
		'Wikipedia Templates': 'Predefinições da Wikipédia'
	}
};

export default Header;
