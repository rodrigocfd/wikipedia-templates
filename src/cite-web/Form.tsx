import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import useRefFocusFirst from '../app/useRefFocusFirst';
import YearMonthDay from '../app/YearMonthDay';
import RadiosInline from '../app/RadiosInline';
import CiteWebData from './CiteWebData';
import InputRow from './InputRow';

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
			<InputRow label={t`Ref name`} size={18} value={store.citeWeb.refName}
				onChange={val => setCiteWeb({refName: val})} refVal={txtRefName} />
			<InputRow label={t`URL`} size={100} value={store.citeWeb.url}
				onChange={val => setCiteWeb({url: val})} />
			<InputRow label={t`Title`} size={88} value={store.citeWeb.title}
				onChange={val => setCiteWeb({title: val})} />
			<InputRow label={t`Translated title`} size={88} value={store.citeWeb.transTitle}
				onChange={val => setCiteWeb({transTitle: val})} />
			<InputRow label={t`Publisher`} size={88} value={store.citeWeb.publisher}
				onChange={val => setCiteWeb({publisher: val})} />
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
			<div>
				<div>{t`Language`}</div>
				<RadiosInline name="language" value={store.citeWeb.language}
					onChange={val => setCiteWeb({language: val})}
					options={['', 'en', 'es', 'fr', 'de', 'it', 'pt']}
					labels={[t`none`, t`English`, t`Spanish`, t`French`, t`German`, t`Italian`, t`Portuguese`]}/>
			</div>
		</Wrap>
	);
};

const Wrap = styled.div`
	& > div > div:nth-of-type(1) {
		display: inline-block;
		width: 150px;
		padding: 6px 0;
	};
`;

const locales = {
	en: {
		'Ref name': 'Ref name',
		'URL': 'URL',
		'Title': 'Title',
		'Translated title': 'Translated title',
		'Publisher': 'Publisher',
		'Date': 'Date',
		'Access date': 'Access date',
		'Language': 'Language',
		'none': 'none',
		'English': 'English',
		'Spanish': 'Spanish',
		'French': 'French',
		'German': 'German',
		'Italian': 'Italian',
		'Portuguese': 'Portuguese'
	},
	pt: {
		'Ref name': 'Ref name',
		'URL': 'URL',
		'Title': 'Título',
		'Translated title': 'Título traduzido',
		'Publisher': 'Publicado por',
		'Date': 'Data',
		'Access date': 'Data de acesso',
		'none': 'nenhum',
		'Language': 'Idioma',
		'English': 'Inglês',
		'Spanish': 'Espanhol',
		'French': 'Francês',
		'German': 'Alemão',
		'Italian': 'Italiano',
		'Portuguese': 'Português'
	}
};

export default Form;
