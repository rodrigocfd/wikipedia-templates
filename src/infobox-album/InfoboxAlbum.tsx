import React, {FC} from 'react';
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import {genLocaleFunc2} from '../app/genLocaleFunc';
import BrowserTitlebar from '../app/BrowserTitlebar';
import Footer from '../app/Footer';
import Form from './Form';
import Output from './Output';
import {newInfoboxAlbumData} from './InfoboxAlbumData';

import en from './en.json';
import pt from './pt.json';

const InfoboxAlbum: FC = () => {
	const [store, setStore] = useStore();
	const t = genLocaleFunc2(store.lang, 'InfoboxAlbum', {en, pt});

	return (<>
		<BrowserTitlebar title={t`Infobox album`} />
		<h2>{t`Infobox album`}</h2>
		<DivTwoColumns>
			<Form />
			<Output />
		</DivTwoColumns>
		<Footer onClear={() => setStore({infoboxAlbum: newInfoboxAlbumData()})} />
	</>);
};

const DivTwoColumns = styled.div`
	display: grid;
	grid-template-columns: auto auto;
`;

export default InfoboxAlbum;
