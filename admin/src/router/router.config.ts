import asyncComponent from '@components/AsyncComponents'

export default [
  {
    children: [
      {
        component: asyncComponent(() => import('@view/User/List/index')),
        exact: true,
        key: 'UserList',
        name: '用户列表',
        path: '/user/list',
      },
      {
        component: asyncComponent(() => import('@view/User/Add/index')),
        exact: true,
        key: 'UserAdd',
        name: '用户添加',
        path: '/user/add',
      }
    ],
    key: 'User',
    title: '用户管理',
  },
  {
    children: [
      {
        component: asyncComponent(() => import('@view/Blog/List/index')),
        exact: true,
        key: 'BlogList',
        name: '文章列表',
        path: '/blog/list',
      },
      {
        component: asyncComponent(() => import('@view/Blog/Add/index')),
        exact: true,
        key: 'BlogAdd',
        name: '文章添加',
        path: '/blog/add',
      },
    ],
    key: 'Blog',
    title: '文章管理',
  },
  {
    children: [
      {
        component: asyncComponent(() => import('@view/Home/index')),
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
        component: asyncComponent(() => import('@view/Blog/Edit/index')),
        exact: true,
        key: 'BlogEdit',
        name: '文章编辑',
        path: '/blog/edit/:id',
      }
    ],
    key: 'Common',
    title: '通用路由',
  },
]