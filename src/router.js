import {createWebHistory, createRouter} from 'vue-router';

import CiteWeb from '@/pages/CiteWeb';
import NotFound from '@/pages/NotFound';

export default createRouter({
	history: createWebHistory(),
	base: process.env.NODE_ENV === 'production' // follows vue.config.js
		? '/wikipedia-templates/'
		: '/',
	routes: [
		{ path: '/', redirect: '/cite-web' },
		{ path: '/cite-web', component: CiteWeb },
		{ path: '/:pathMatch(.*)*', component: NotFound },
	],
});