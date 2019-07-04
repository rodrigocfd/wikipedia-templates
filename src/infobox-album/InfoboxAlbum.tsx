import React, {FC} from 'react'
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import Footer from '../app/Footer';
import Form from './Form';
import Output from './Output';

const InfoboxAlbum: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (<>
		<h2>{t`Infobox album`}</h2>
		<DivTwoColumns>
			<Form />
			<Output />
		</DivTwoColumns>
		<Footer />
	</>);
};

const DivTwoColumns = styled.div`
	display: grid;
	grid-template-columns: auto auto;
`;

const locales: LocaleList = {
	en: {
		'Infobox album': 'Infobox album'
	},
	pt: {
		'Infobox album': 'Info/Álbum'
	}
};

export default InfoboxAlbum;
