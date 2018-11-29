import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../view/home/index'
import List from '../view/list/index'

export default () => <Switch>
  <Route key="Home" exact path="/" component={Home} />
  <Route key="List" path="/list" component={List} />
</Switch>

