import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { Breadcrumb, Row } from 'antd'
import RouterConfig from '../router/router.config'
import { useMappedState } from 'redux-react-hook'

const mapState = (state: any) => ({
  user: state.user,
})
const routeArr: any[] = []
RouterConfig.forEach((v: any) => {
  v.children.forEach((k: any) => {
    routeArr.push(k)
  })
})
const AdminHeader = (props: RouteComponentProps) => {
  const { user } = useMappedState(mapState)  
  const itemRender = (route: any, params: any, routes: any, paths: any) => {
    let parentName = ''
    for (const v of RouterConfig) {
      if (v.children.indexOf(route) > -1) {
        parentName = v.title
      }
    }
    if (props.location.pathname === route.path) {
      return <span>
        <span>{parentName} </span> /
        <span  style={{color: 'red'}}> { route.name}</span>
      </span>
    }
    return null
  }
  return (
    <Row style={{position: 'relative'}} align="middle" type="flex">
      <Breadcrumb style={{ margin: '16px 0' }} itemRender={itemRender} routes={routeArr} />
      <span 
        style={{
          position: 'absolute',
          right: 0,
        }}
      >欢迎 <b> { user.username }</b></span>
    </Row>
  )
}

export default withRouter(AdminHeader)