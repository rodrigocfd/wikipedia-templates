import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'mobx-react';
import styled from 'styled-components';

import store from '../store';
import Header from './Header';
import Home from './home/Home';
import CiteWeb from './cite-web/CiteWeb';

/**
 * Application root component.
 */
const App = () => (
	<BrowserRouter>
		<Provider store={store}>
			<div>
				<Header/>
				<DivBody>
					<Route exact path="/" component={Home}/>
					<Route path="/cite-web" component={CiteWeb}/>
				</DivBody>
			</div>
		</Provider>
	</BrowserRouter>
);

const DivBody = styled.div`
	padding: 0 20px;
`;

export default App;
