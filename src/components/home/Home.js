import React from 'react';
import {Link} from 'react-router-dom';

import Intz from '../Intz';

/**
 * Main component for app route: home.
 */
const Home = () => (
	<div>
		<ul>
			<li><Link to="/cite-web"><Intz val="Cite web"/></Link></li>
		</ul>
	</div>
);

export default Home;
