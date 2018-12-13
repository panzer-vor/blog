
import * as React from 'react'
import { Layout } from 'antd'

const { Content } = Layout
const AdminContent = (props: any) => {
  console.log(props)
  return (
    <Content style={{
      background: '#fff', padding: 24
    }}
    >
      {
        props.children
      }
    </Content>
  )
}

export default AdminContent
