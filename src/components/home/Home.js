import React from 'react';
import {Link} from 'react-router-dom';

import Txt from '../Txt';

/**
 * Main component for app route: home.
 */
const Home = () => (
	<div>
		<ul>
			<li><Link to="/cite-web"><Txt val="Cite web"/></Link></li>
		</ul>
	</div>
);

export default Home;
