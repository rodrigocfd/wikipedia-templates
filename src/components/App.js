import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {observer, Provider as MobxProvider} from 'mobx-react';
import styled from 'styled-components';

import {Provider as IntzProvider} from '../intz';
import en from '../locales/en';
import pt from '../locales/pt';

import store from '../store';
import Header from './Header';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';

/**
 * Application root component.
 */
const App = () => (
	<BrowserRouter>
		<MobxProvider store={store}>
			<IntzProvider lang={store.lang} locales={{en, pt}}>
				<div>
					<Header/>
					<DivBody>
						<Route exact path="/" component={Home}/>
						<Route path="/cite-web" component={CiteWeb}/>
					</DivBody>
				</div>
			</IntzProvider>
		</MobxProvider>
	</BrowserRouter>
);

const DivBody = styled.div`
	padding: 0 20px;
`;

export default observer(App);
