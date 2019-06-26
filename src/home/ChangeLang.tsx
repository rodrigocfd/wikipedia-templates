import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import locales from './locales';

const ChangeLang: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<Wrap>
			<div>{t`Language`}</div>
			<div>opts</div>
		</Wrap>
	);
};

const Wrap = styled.div`
	padding-top: 14px;

	& > div:nth-of-type(1) {
		display: inline-block;
	}
	& > div:nth-of-type(2) {
		display: inline-block;
		border: 1px solid #ccc;
		margin-left: 10px;
		padding: 3px;
	}
`;

export default ChangeLang;
