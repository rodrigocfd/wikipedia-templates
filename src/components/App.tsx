import React, {FunctionComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {LocaleProvider} from '../react-use-locale';
import locales from '../locales';

import {StateProps} from '../store';
import Header from './Header';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';
import TrackListing from './track-listing/TrackListing';

interface Props { }

type PropsAll = Props & StateProps;

/**
 * Application root component.
 */
const App: FunctionComponent<PropsAll> =
		({lang}: PropsAll) => {
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
	(state: PropsAll) => ({lang: state.lang})
)(App);
