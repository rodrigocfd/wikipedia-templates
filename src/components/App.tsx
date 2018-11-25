import React, {FunctionComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {LocaleProvider} from '../react-use-locale';
import locales from '../locales';

import {mapStateToProps, StateProps} from '../store';
import Header from './Header';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';
import Coord from './coord/Coord';
import TrackListing from './track-listing/TrackListing';

interface Props extends StateProps { }

/**
 * Application root component.
 */
const App: FunctionComponent<Props> =
		({lang}: Props) => {
	return (
		<BrowserRouter>
			<LocaleProvider lang={lang} locales={locales}>
				<div>
					<Header/>
					<DivBody>
						<Route exact path="/" component={Home}/>
						<Route path="/cite-web" component={CiteWeb}/>
						<Route path="/coord" component={Coord}/>
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
	mapStateToProps
)(App);
