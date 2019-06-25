import React, {FC} from 'react';

import {ContextStore, newStore} from './ContextStore';
import CiteWeb from '../cite-web/CiteWeb';

interface Props { }

/**
 * Application root component.
 */
const App: FC<Props> = () => {
	return (
		<ContextStore.Provider value={newStore()}>
			<div>
				<CiteWeb />
			</div>
		</ContextStore.Provider>
	);
};

export default App;
