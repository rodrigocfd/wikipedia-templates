import React, {FC} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import styled from 'styled-components';

import {ContextStore, useNewStore} from '../store/useStore';
import Header from './Header';
import Home from '../home/Home';
import CiteWeb from '../cite-web/CiteWeb';
import Coord from '../coord/Coord';
import InfoboxAlbum from '../infobox-album/InfoboxAlbum';
import TrackListing from '../track-listing/TrackListing';

/**
 * Application root component.
 */
const App: FC = () => (
	<HashRouter>
		<ContextStore.Provider value={useNewStore()}>
			<Header />
			<DivBodyContent>
				<Route exact path="/" component={Home} />
				<Route path="/cite-web" component={CiteWeb} />
				<Route path="/coord" component={Coord} />
				<Route path="/infobox-album" component={InfoboxAlbum} />
				<Route path="/track-listing" component={TrackListing} />
			</DivBodyContent>
		</ContextStore.Provider>
	</HashRouter>
);

const DivBodyContent = styled.div`
	padding: 0 20px;
`;

export default App;
