/**
 * admin的相关路由
 * */

const framing = r => require.ensure([], () => r(require('@/page/admin/framing')), 'framing');
const home = r => require.ensure([], () => r(require('@/page/admin/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/admin/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/admin/addGoods')), 'addGoods');
const shopList = r => require.ensure([], () => r(require('@/page/admin/shopList')), 'shopList');
const foodList = r => require.ensure([], () => r(require('@/page/admin/foodList')), 'foodList');
const visitor = r => require.ensure([], () => r(require('@/page/admin/visitor')), 'visitor');
const vueEdit = r => require.ensure([], () => r(require('@/page/admin/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/admin/adminSet')), 'adminSet');


export const adminRouters = [
    {
        path: '/manage',
        component: framing,
        name: '',
        children: [
            {
                path: '',
                component: home,
                meta: [],
            }, {
                path: '/addShop',
                component: addShop,
                meta: ['添加数据', '添加商铺'],
            }, {
                path: '/addGoods',
                component: addGoods,
                meta: ['添加数据', '添加商品'],
            }, {
                path: '/shopList',
                component: shopList,
                meta: ['数据管理', '商家列表'],
            }, {
                path: '/foodList',
                component: foodList,
                meta: ['数据管理', '食品列表'],
            }, {
                path: '/visitor',
                component: visitor,
                meta: ['图表', '用户分布'],
            }, {
                path: '/vueEdit',
                component: vueEdit,
                meta: ['编辑', '文本编辑'],
            }, {
                path: '/adminSet',
                component: adminSet,
                meta: ['设置', '管理员设置'],
            }
        ]
    }
]
