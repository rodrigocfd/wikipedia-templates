import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/ContextStore';
import genLocaleFunc from './genLocaleFunc';
import {LangName, langNames} from '../store/Lang';

import en from './en.json';
import pt from './pt.json';

/**
 * Renders all available languages and allows switching.
 */
const ChangeLang: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'ChangeLang', {en, pt});

	return (
		<Wrap>
			<div>{t`Language`}</div>
			<div>
				{langNames.map((l: LangName) =>
					store.lang === l.id ?
						<span key={l.id}>{t(l.name)}</span> :
						<button key={l.id}
							onClick={() => setStore({lang: l.id})}>
							{t(l.name)}
						</button>
				)}
			</div>
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

		& > span, & > button {
			margin: 0 5px;
		}
	}
`;

export default ChangeLang;
