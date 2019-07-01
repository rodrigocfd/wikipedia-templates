import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from './ContextStore';
import genLocaleFunc from './genLocaleFunc';
import {LangName, langNames} from './LangName';

const ChangeLang: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);

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

const locales = {
	en: {
		'Language': 'Language',
		'English': 'Inglês',
		'Portuguese': 'Português'
	},
	pt: {
		'Language': 'Idioma',
		'English': 'English',
		'Portuguese': 'Portuguese'
	}
};

export default ChangeLang;
