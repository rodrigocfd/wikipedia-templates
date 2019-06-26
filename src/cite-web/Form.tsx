import React, {FC, useEffect, useRef} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import locales from './locales';
import CiteWebData from './CiteWebData';

const Form: FC = () => {
	const txt1 = useRef<HTMLInputElement>(null);
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	function setCiteWeb(d: Partial<CiteWebData>) {
		setStore({
			citeWeb: {...store.citeWeb, ...d}
		});
	}

	return (
		<Wrap>
			<div>
				<div>{t`Ref name`}</div>
				<input type="text" size={18} value={store.citeWeb.refName} autoComplete="off"
					onChange={e => setCiteWeb({refName: e.target.value})} ref={txt1} />
			</div>
		</Wrap>
	);
};

const Wrap = styled.div`
	& > div > div:nth-of-type(1) {
		display: inline-block;
		width: 150px;
		padding: 6px 0;
	}
`;

export default Form;
