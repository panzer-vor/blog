import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import routeConfig from './router.config'

interface IRouterConfig {
  component: any
  exact: boolean
  key: string
  marryPath: string
  name: string
  path: string
}

const routes: IRouterConfig[] = []
for (const menu of routeConfig) {
  for (const route of menu.children) {
    routes.push(route)
  }
}
export default () => <Switch>
  {
    routes.map((v: IRouterConfig) => <Route 
      key={v.key}
      exact={v.exact ? true : false}
      path={v.marryPath || v.path}
      component={v.component}
    />)
  }
</Switch>

