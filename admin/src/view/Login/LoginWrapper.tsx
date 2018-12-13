import * as React from 'react'
import { Card, Row } from 'antd'
import Login from './index'
import { RouteComponentProps } from 'react-router'
import './index.css'

export default function (props: RouteComponentProps<{}>) {
  return (
    <div className="login--wrapper">
      <Card 
        style={{width: '500px'}}
        title="用户登入"
        hoverable={true}
      >
        <Row 
          type="flex"
          align="middle" 
          justify="center"
        >
          <Login {...props} />
        </Row>
      </Card>
    </div>
  )
}
