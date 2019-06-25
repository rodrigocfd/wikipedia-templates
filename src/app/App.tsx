import React, {FC} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import {ContextStore, newStore} from './ContextStore';
import Header from '../home/Header';
import Home from '../home/Home';
import CiteWeb from '../cite-web/CiteWeb';

interface Props { }

/**
 * Application root component.
 */
const App: FC<Props> = () => (
	<HashRouter>
		<ContextStore.Provider value={newStore()}>
			<Header />
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/cite-web" component={CiteWeb} />
			</div>
		</ContextStore.Provider>
	</HashRouter>
);

export default App;
