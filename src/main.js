import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import {adminRouters} from '@/router/adminRouter'
import {portalRouters} from '@/router/portalRouter'

Vue.config.productionTip = false;

Vue.use(ElementUI);

/**
 * 路由白名单
 * */
const whiteList = ['/login'];
//动态加载路由
let isLoadRouter = false;
let asyncLoadRouter = () => {
    if (!isLoadRouter) {
        if (store.getters.roleType === 'admin') {
            router.addRoutes(adminRouters);
        } else {
            router.addRoutes(portalRouters);
        }
        isLoadRouter = true;
    }
};

router.beforeEach((to, from, next) => {
    if (whiteList.indexOf(to.path) === -1) {
        if (store.getters.roleType) {
            asyncLoadRouter();
            next();
        } else {
            store.dispatch('GetInfo').then(res => {
                asyncLoadRouter();
                next(to);
            });
        }
    }
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
