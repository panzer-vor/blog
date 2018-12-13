import * as React from 'react'
import AdminHeader from './components/AdminHeader'
import AdminSider from '@components/AdminSider'
import AdminContent from '@components/AdminContent'
import Routes from './router/routes'
import http from '@tools/http'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { RouteComponentProps } from 'react-router'

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
          <Layout style={{ padding: '0 24px 24px' }}>
            <AdminHeader />
            <AdminContent>
              <Routes /> 
            </AdminContent>
          </Layout>
        </Layout>
      }
    </div>
  )
}

export default withRouter(App)
