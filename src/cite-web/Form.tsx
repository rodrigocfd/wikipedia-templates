import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/useStore';
import genLocaleFunc from '../app/genLocaleFunc';
import InputFocused from '../app/InputFocused';
import RadiosInline from '../app/RadiosInline';
import YearMonthDay from '../app/YearMonthDay';
import DataCiteWeb from '../store/DataCiteWeb';

import en from './en.json';
import pt from './pt.json';

const Form: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'Form', {en, pt});

	function setCiteWeb(d: Partial<DataCiteWeb>) {
		setStore({
			citeWeb: {...store.citeWeb, ...d}
		});
	}

	return (
		<Wrap>
			<div>{t`Ref name`}</div>
			<div>
				<InputFocused type="text" size={18} value={store.citeWeb.refName} autoComplete="off"
					onChange={e => setCiteWeb({refName: e.target.value})} />
			</div>

			<div>{t`URL`}</div>
			<input type="text" value={store.citeWeb.url} autoComplete="off"
				onChange={e => setCiteWeb({url: e.target.value})} />

			<div>{t`Title`}</div>
			<input type="text" value={store.citeWeb.title} autoComplete="off"
				onChange={e => setCiteWeb({title: e.target.value})} />

			<div>{t`Translated title`}</div>
			<input type="text" value={store.citeWeb.transTitle} autoComplete="off"
				onChange={e => setCiteWeb({transTitle: e.target.value})} />

			<div>{t`Publisher`}</div>
			<input type="text" value={store.citeWeb.publisher} autoComplete="off"
				onChange={e => setCiteWeb({publisher: e.target.value})} />

			<div>{t`Date`}</div>
			<YearMonthDay value={store.citeWeb.date}
				onChange={val => setCiteWeb({date: val})} />

			<div>{t`Access date`}</div>
			<YearMonthDay value={store.citeWeb.accessDate}
				onChange={val => setCiteWeb({accessDate: val})} />

			<div>{t`Language`}</div>
			<RadiosInline name="language" value={store.citeWeb.language}
				onChange={val => setCiteWeb({language: val})}
				options={['', 'en', 'es', 'fr', 'de', 'it', 'pt']}
				labels={[t`none`, t`English`, t`Spanish`, t`French`,
					t`German`, t`Italian`, t`Portuguese`]} />
		</Wrap>
	);
};

const Wrap = styled.div`
	display: grid;
	grid-template-columns: 130px 600px;
	grid-column-gap: 6px;
	grid-row-gap: 3px;
`;

export default Form;
