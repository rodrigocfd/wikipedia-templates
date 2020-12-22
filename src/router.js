import {createWebHistory, createRouter} from 'vue-router';

import CiteWebEn from '@/pages/CiteWebEn';
import CiteWebPt from '@/pages/CiteWebPt';
import NotFound from '@/pages/NotFound';

const history = createWebHistory();
const router = createRouter({
	history,
	routes: [
		{ path: '/', redirect: '/cite-web-en' },
		{ path: '/cite-web-en', component: CiteWebEn },
		{ path: '/cite-web-pt', component: CiteWebPt },
		{ path: '/:pathMatch(.*)*', component: NotFound },
	],
});

export default router;