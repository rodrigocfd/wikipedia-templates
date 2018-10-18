import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

import {IntzProvider} from '../intz';
import en from '../locales/en';
import pt from '../locales/pt';

import Header from './Header';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';
import TrackListing from './track-listing/TrackListing';

/**
 * Application root component.
 */
const App = ({store}) => (
	<BrowserRouter>
		<IntzProvider lang={store.lang} locales={{en, pt}}>
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

export default inject('store')(
	observer(App)
);
