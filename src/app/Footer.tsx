import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import useStore from '../store/ContextStore';
import genLocaleFunc from './genLocaleFunc';

import en from './en.json';
import pt from './pt.json';

interface Props {
	onClear?: () => void;
}

/**
 * Footer for a section.
 */
const Footer: FC<Readonly<Props>> = p => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, 'Footer', {en, pt});

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

export default Footer;
