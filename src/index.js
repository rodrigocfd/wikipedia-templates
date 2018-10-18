import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as MobxProvider} from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './components/App';
import store from './store';

ReactDOM.render(
	<MobxProvider store={store}>
		<App/>
	</MobxProvider>,
	document.getElementById('root'));
registerServiceWorker();
