import * as React from 'react';
import { IRouter } from '@interface/common'
import AdminHeader from './components/AdminHeader'
import Routes from './router/routes'
import http from '@tools/http'
import { withRouter } from 'react-router-dom'

function App(props: IRouter) {
  http.getConfig(props.history)
  return (
    <div>
      <AdminHeader />
      <Routes />
    </div>
  )
}

export default withRouter(App)
