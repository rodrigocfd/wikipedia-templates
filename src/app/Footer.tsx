import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';

/**
 * Footer for a section.
 */
const Footer: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<Wrap>
			<Link to="/">{t`Home`}</Link>
		</Wrap>
	);
};

const Wrap = styled.div`
	margin-top: 22px;
	border-top: 1px solid #e8e8e8;
	padding-top: 10px;
`;

const locales: LocaleList = {
	en: {
		'Home': 'Home'
	},
	pt: {
		'Home': 'Início'
	}
};

export default Footer;