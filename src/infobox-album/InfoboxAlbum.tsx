import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../store/useStore';
import genLocaleFunc from '../app/genLocaleFunc';
import BrowserTitlebar from '../app/BrowserTitlebar';
import Footer from '../app/Footer';
import Form from './Form';
import Output from './Output';
import {newDataInfoboxAlbum} from '../store/DataInfoboxAlbum';

import en from './en.json';
import pt from './pt.json';

const InfoboxAlbum: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc(store.lang, 'InfoboxAlbum', {en, pt});

	return (<>
		<BrowserTitlebar title={t`Infobox album`} />
		<h2>{t`Infobox album`}</h2>
		<DivTwoColumns>
			<Form />
			<Output />
		</DivTwoColumns>
		<Footer onClear={() => setStore({infoboxAlbum: newDataInfoboxAlbum()})} />
	</>);
};

const DivTwoColumns = styled.div`
	display: grid;
	grid-template-columns: auto auto;
`;

export default InfoboxAlbum;
