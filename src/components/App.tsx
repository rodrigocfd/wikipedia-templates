import React, {FunctionComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {LocaleProvider} from '../react-use-locale';
import locales from '../locales';

import {ReduxState} from '../store';
import Header from './Header';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';
import TrackListing from './track-listing/TrackListing';

interface AppProps { }

type AppPropsAll = AppProps & ReduxState;

/**
 * Application root component.
 */
const App: FunctionComponent<AppPropsAll> =
		({lang}: AppPropsAll) => {
	return (
		<BrowserRouter>
			<LocaleProvider lang={lang} locales={locales}>
				<div>
					<Header/>
					<DivBody>
						<Route exact path="/" component={Home}/>
						<Route path="/cite-web" component={CiteWeb}/>
						<Route path="/track-listing" component={TrackListing}/>
					</DivBody>
				</div>
			</LocaleProvider>
		</BrowserRouter>
	);
};

const DivBody = styled.div`
	padding: 0 20px;
`;

export default connect(
	(state: AppPropsAll) => ({lang: state.lang})
)(App);
