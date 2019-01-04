import * as React from 'react'
import { Button, Form, Icon, Input } from 'antd'
import { useDispatch } from 'redux-react-hook'
import { IForm } from '@interface/common'
import { ILoginData, ILoginRecordData } from './index.interface'
import http from '@tools/http'
import { options } from '@config'
const FormItem = Form.Item
function Login(props: IForm) {
  const dispatch = useDispatch()
  const userLogin = (values: ILoginData) => {
    http.patch('/auth', values).then((res: ILoginRecordData) => {
      const { username, role, id, token } = res
      window.localStorage.setItem('admin_token', token); // 登入成功存储token
      dispatch({  // 登入成功存储用户数据
        type: 'SAVE_USER',
        user: {
          id,
          role,
          username,
        },
      })
    }).then(() => {
      props.history.push(options.routerUri)
    })
  }
  const handleSubmit = (e: any) => {  // 表单验证
    e.preventDefault()
    props.form.validateFields((err: any, values: ILoginData) => {
      if (!err) {
        userLogin(values) // 验证通过转给登入
      }
    })
  }
  const formItemLayout = {
    wrapperCol: {
      sm: { span: 24 },
      xs: { span: 24 },
    },
  };
  const { getFieldDecorator } = props.form
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem label="请输入账号" {...formItemLayout}>
        {getFieldDecorator('username', {
          rules: [
            { required: true, message: 'Please input username!' },
            {min: 1, max: 10, message: 'username must be in 1-10 length'},
          ],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        )}
      </FormItem>
      <FormItem label="请输入密码" {...formItemLayout}>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Please input password!' },
          ],
        })(
          <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">登入</Button>
      </FormItem>
    </Form>
  )
}

export default Form.create()(Login)