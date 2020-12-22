import {createWebHistory, createRouter} from 'vue-router';

import CiteWeb from '@/components/CiteWeb';

const history = createWebHistory();
const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			redirect: '/cite-web',
		},
		{
			path: '/cite-web',
			component: CiteWeb,
		},
	],
});

export default router;