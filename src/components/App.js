import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {inject as mobxInject, observer as mobxObserver} from 'mobx-react';
import styled from 'styled-components';

import {IntzProvider} from '../intz';
import locales from '../locales';

import Header from './Header';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';
import TrackListing from './track-listing/TrackListing';

/**
 * Application root component.
 */
const App = ({store}) => (
	<BrowserRouter>
		<IntzProvider lang={store.lang} locales={locales}>
			<div>
				<Header/>
				<DivBody>
					<Route exact path="/" component={Home}/>
					<Route path="/cite-web" component={CiteWeb}/>
					<Route path="/track-listing" component={TrackListing}/>
				</DivBody>
			</div>
		</IntzProvider>
	</BrowserRouter>
);

const DivBody = styled.div`
	padding: 0 20px;
`;

export default mobxInject('store')(
	mobxObserver(App)
);
