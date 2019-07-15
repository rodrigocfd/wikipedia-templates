import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';

interface Props {
	onClear?: () => void;
}

/**
 * Footer for a section.
 */
const Footer: FC<Readonly<Props>> = p => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<Wrap>
			<Link to="/">{t`Home`}</Link>
			{p.onClear &&
				<button onClick={() =>
					p.onClear && p.onClear()}>{t`clear all`}</button>
			}
		</Wrap>
	);
};

const Wrap = styled.div`
	margin-top: 20px;

	& > button {
		margin-left: 16px;
	}
`;

const locales: LocaleList = {
	en: {
		'Home': 'Home',
		'clear all': 'clear all'
	},
	pt: {
		'Home': 'Início',
		'clear all': 'limpar tudo'
	}
};

export default Footer;
