import {createWebHistory, createRouter} from 'vue-router';

import CiteWeb from '@/pages/CiteWeb';
import NotFound from '@/pages/NotFound';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/cite-web-en' },
		{ path: '/cite-web', component: CiteWeb },
		{ path: '/:pathMatch(.*)*', component: NotFound },
	],
});