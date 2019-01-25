import React, {memo} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {LocaleProvider} from '../react-use-locale';
import locales from '../locales';

import {State} from '../store';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';
import Coord from './coord/Coord';
import InfoboxAlbum from './infobox-album/InfoboxAlbum';
import TrackListing from './track-listing/TrackListing';

interface Props {
	lang: string;
}

/**
 * Application root component.
 */
const App = memo<Props>(({lang}) => {
	return (
		<HashRouter>
			<LocaleProvider lang={lang} locales={locales}>
				<div>
					<AppHeader/>
					<DivBody>
						<Route exact path="/" component={Home}/>
						<Route path="/cite-web" component={CiteWeb}/>
						<Route path="/coord" component={Coord}/>
						<Route path="/infobox-album" component={InfoboxAlbum}/>
						<Route path="/track-listing" component={TrackListing}/>
					</DivBody>
					<AppFooter/>
				</div>
			</LocaleProvider>
		</HashRouter>
	);
});

const DivBody = styled.div`
	padding: 0 20px;
`;

export default connect<Props, {}, {}, State>(
	({lang}: State) => ({lang})
)(App);
