
import * as React from 'react'
import { Layout, Spin } from 'antd'
import { useMappedState } from 'redux-react-hook'

const { Content } = Layout
const mapState = (state: any) => ({
  globalLoading: state.globalLoading,
})
const AdminContent = (props: any) => {
  const { globalLoading } = useMappedState(mapState)  
  return (
    <Content style={{
      background: '#fff', padding: 24
    }}
    >
      <Spin spinning={globalLoading}>
        {
          props.children
        }
      </Spin>
      
    </Content>
  )
}

export default AdminContent
