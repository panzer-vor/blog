import * as React from 'react'
import AdminHeader from './components/AdminHeader'
import AdminSider from '@components/AdminSider'
import AdminContent from '@components/AdminContent'
import Routes from './router/routes'
import http from '@tools/http'
import { useDispatch } from 'redux-react-hook'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { RouteComponentProps } from 'react-router'
import { options } from '@config'
import './index.css'

function App(props: RouteComponentProps) {
  const { location } = props
  const dispatch = useDispatch()
  http.getReduxConfig(dispatch)
  http.getRouterConfig(props.history)
  return (
    <div>
      {
        location.pathname === `${options.routerUri}login` ? <Routes /> :
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
