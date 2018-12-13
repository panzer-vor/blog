import asyncComponent from '@components/AsyncComponents'

export default [
  {
    children: [
      {
        component: asyncComponent(() => import('@view/UserList/index')),
        exact: true,
        key: 'UserList',
        name: '用户列表',
        path: '/user/list',
      }
    ],
    key: 'User',
    title: '用户管理',
  },
  {
    children: [
      {
        component: asyncComponent(() => import('@view/home/index')),
        exact: true,
        key: 'Home',
        name: '首页',
        path: '/',
      },
      {
        component: asyncComponent(() => import('@view/Login/LoginWrapper')),
        exact: true,
        key: 'Login',
        name: '登陆',
        path: '/login',
      },
      {
        component: asyncComponent(() => import('@view/list/index')),
        exact: true,
        key: 'List',
        name: '列表',
        path: '/list',
      },
    ],
    key: 'Common',
    title: '通用路由',
  },
]