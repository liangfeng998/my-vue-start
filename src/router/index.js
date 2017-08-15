import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');

const routes = [
	{
		path: '/',
		component: login
	}
]

export default new Router({
    //history: true, //如：http://localhost:8002/manage
    mode: 'history',
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
