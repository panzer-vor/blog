import asyncComponent from '@components/AsyncComponents'
import { options } from '@config'

const { routerUri } = options
export default [
  {
    children: [
      {
        component: asyncComponent(() => import('@view/User/List/index')),
        exact: true,
        key: 'UserList',
        marryPath: `${routerUri}user/list`,
        name: '用户列表',
        path: `${routerUri}user/list`,
      },
      {
        component: asyncComponent(() => import('@view/User/Add/index')),
        exact: true,
        key: 'UserAdd',
        marryPath: `${routerUri}user/add`,
        name: '用户添加',
        path: `${routerUri}user/add`,
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
        marryPath: `${routerUri}blog/list`,
        name: '文章列表',
        path: `${routerUri}blog/list`,
      },
      {
        component: asyncComponent(() => import('@view/Blog/Add/index')),
        exact: true,
        key: 'BlogAdd',
        marryPath: `${routerUri}blog/add`,
        name: '文章添加',
        path: `${routerUri}blog/add`,
      },
      {
        component: asyncComponent(() => import('@view/Blog/Tag/index')),
        exact: true,
        key: 'BlogTag',
        marryPath: `${routerUri}blog/tag`,
        name: '标签管理',
        path: `${routerUri}blog/tag`,
      }
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
        marryPath: '/',
        name: '首页',
        path: routerUri,
      },
      {
        component: asyncComponent(() => import('@view/Login/LoginWrapper')),
        exact: true,
        key: 'Login',
        marryPath: `${routerUri}login`,
        name: '登陆',
        path: `${routerUri}login`,
      },
      {
        component: asyncComponent(() => import('@view/Blog/Edit/index')),
        exact: true,
        key: 'BlogEdit',
        marryPath: `${routerUri}blog/edit/:id`,
        name: '文章编辑',
        path: `${routerUri}blog/edit/:id`,
      },
      {
        component: asyncComponent(() => import('@view/NotFound/index')),
        exact: true,
        key: 'NotFound',
        marryPath: `${routerUri}404`,
        name: '未找到',
        path: `${routerUri}404`,
      }
    ],
    key: 'Common',
    title: '通用路由',
  },
]