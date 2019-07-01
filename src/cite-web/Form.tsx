import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import useRefFocusFirst from '../app/useRefFocusFirst';
import YearMonthDay from '../app/YearMonthDay';
import CiteWebData from './CiteWebData';

const Form: FC = () => {
	const txtRefName = useRefFocusFirst<HTMLInputElement>();
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, locales);

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
					onChange={e => setCiteWeb({refName: e.target.value})} ref={txtRefName} />
			</div>
			<div>
				<div>{t`URL`}</div>
				<input type="text" size={100} value={store.citeWeb.url} autoComplete="off"
					onChange={e => setCiteWeb({url: e.target.value})} />
			</div>
			<div>
				<div>{t`Title`}</div>
				<input type="text" size={88} value={store.citeWeb.title} autoComplete="off"
					onChange={e => setCiteWeb({title: e.target.value})} />
			</div>
			<div>
				<div>{t`Translated title`}</div>
				<input type="text" size={88} value={store.citeWeb.transTitle} autoComplete="off"
					onChange={e => setCiteWeb({transTitle: e.target.value})} />
			</div>
			<div>
				<div>{t`Publisher`}</div>
				<input type="text" size={88} value={store.citeWeb.publisher} autoComplete="off"
					onChange={e => setCiteWeb({publisher: e.target.value})} />
			</div>
			<div>
				<div>{t`Date`}</div>
				<YearMonthDay value={store.citeWeb.date}
					onChange={val => setCiteWeb({date: val})} />
			</div>
			<div>
				<div>{t`Access date`}</div>
				<YearMonthDay value={store.citeWeb.accessDate}
					onChange={val => setCiteWeb({accessDate: val})} />
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

const locales = {
	en: {
		'Ref name': 'Ref name',
		'URL': 'URL',
		'Title': 'Title',
		'Translated title': 'Translated title',
		'Publisher': 'Publisher',
		'Date': 'Date',
		'Access date': 'Access date'
	},
	pt: {
		'Ref name': 'Ref name',
		'URL': 'URL',
		'Title': 'Título',
		'Translated title': 'Título traduzido',
		'Publisher': 'Publicado por',
		'Date': 'Data',
		'Access date': 'Data de acesso'
	}
};

export default Form;
