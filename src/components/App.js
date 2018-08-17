import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'mobx-react';

import store from '../store';
import ChangeLanguage from './ChangeLanguage';
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
				<Route exact path="/" component={Home}/>
				<Route path="/cite-web" component={CiteWeb} />
				<ChangeLanguage/>
			</div>
		</Provider>
	</BrowserRouter>
);

export default App;
