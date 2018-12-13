import * as React from 'react'
// import AdminHeader from './components/AdminHeader'
import Routes from './router/routes'
import http from '@tools/http'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { RouteComponentProps } from 'react-router'
import AdminSider from '@components/AdminSider'

import './index.css'

function App(props: RouteComponentProps) {
  const { location } = props
  http.getConfig(props.history)
  return (
    <div>
      {
        location.pathname === '/login' ? <Routes /> :
        <Layout className="wrapper">
          <AdminSider />
        </Layout>
      }
    </div>
  )
}

export default withRouter(App)
