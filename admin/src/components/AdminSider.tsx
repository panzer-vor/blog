import * as React from 'react'
import { Icon, Layout, Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import RouteConfig from '../router/router.config'
import { RouteComponentProps } from 'react-router'

const { Sider } = Layout
const MenuItem = Menu.Item
const SubMenu  = Menu.SubMenu
const AdminSider = (props: RouteComponentProps) => {
  const menuLink = (path: string) => {
    return () => {
      props.history.push(path)
    }
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="logo"  />
      <Menu mode="inline">
        {
          RouteConfig.filter(v => v.key !== 'Common').map(v => <SubMenu
            key={v.key}
            title={<span><Icon type="appstore" /><span>{v.title}</span></span>}
          >
            {
              v.children.map(k => <MenuItem 
                key={k.key}
                onClick={menuLink(k.path)}
              >
                <Icon type="user" />
                <span className="nav-text">{k.name}</span>
              </MenuItem>
              )
            }
          </SubMenu>)
        }
      </Menu>
    </Sider>
  )
}

export default withRouter(AdminSider)
