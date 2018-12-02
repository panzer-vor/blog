import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@view/home/index'
import List from '@view/list/index'
import Login from '@view/login/index'
export default () => <Switch>
  <Route key="Home" exact path="/" component={Home} exact={true} />
  <Route key="List" path="/list" component={List} />
  <Route key="login" path='/login' component={Login} />
</Switch>

