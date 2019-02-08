import React, {memo, useContext, useEffect} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import StoreContext from '../../StoreContext';
import SectionFooter from '../SectionFooter';
import Form from './Form';
import Output from './Output';
import {newInfoboxAlbumData} from './InfoboxAlbumData';

interface Props { }

/**
 * Main component for app route: infobox-album.
 */
const InfoboxAlbum = memo<Props>(() => {
	const [store, setStore] = useContext(StoreContext);
	const t = useLocale('*_InfoboxAlbum');

	useEffect(() => {
		document.title = t`Infobox album` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Infobox album`}</h2>
			<DivGridWrap>
				<Form album={store.album} onChange={al => setStore({...store, album: al})}/>
				<Output album={store.album}/>
			</DivGridWrap>
			<SectionFooter onClear={() => setStore({...store, album: newInfoboxAlbumData()})}/>
		</div>
	);
});

const DivGridWrap = styled.div`
	display: grid;
	grid-template-columns: 650px auto;
`;

export default InfoboxAlbum;
