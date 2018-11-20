import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {LocaleProvider} from '../react-use-locale';
import locales from '../locales';

import Header from './Header';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';
import InfoboxAlbum from './infobox-album/InfoboxAlbum';
import TrackListing from './track-listing/TrackListing';

/**
 * Application root component.
 */
function App({lang}) {
	return (
		<BrowserRouter>
			<LocaleProvider lang={lang} locales={locales}>
				<div>
					<Header/>
					<DivBody>
						<Route exact path="/" component={Home}/>
						<Route path="/cite-web" component={CiteWeb}/>
						<Route path="/infobox-album" component={InfoboxAlbum}/>
						<Route path="/track-listing" component={TrackListing}/>
					</DivBody>
				</div>
			</LocaleProvider>
		</BrowserRouter>
	);
}

const DivBody = styled.div`
	padding: 0 20px;
`;

export default connect(
	({lang}) => ({lang})
)(App);
