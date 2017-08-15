/**
 * portal的相关路由(与admin的路由不能共存)
 * */
const framing = r => require.ensure([], () => r(require('@/page/portal/framing')), 'framing');
const foodList = r => require.ensure([], () => r(require('@/page/portal/foodList')), 'foodList');

export const portalRouters = [
    {
        path: '/portal',
        component: framing,
        name: '',
        children: [
            {
                path: '/foodList',
                component: foodList,
                meta: ['数据管理', '食品列表'],
            }
        ]
    }
];
