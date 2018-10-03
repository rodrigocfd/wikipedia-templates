import React from 'react';
import {Link} from 'react-router-dom';

import Intz from '../../intz';

/**
 * Main component for app route: home.
 */
const Home = () => (
	<div>
		<ul>
			<li><Link to="/cite-web"><Intz str="Cite web"/></Link></li>
		</ul>
	</div>
);

export default Home;
