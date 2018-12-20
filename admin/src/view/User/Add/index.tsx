import * as React from 'react'
import { Form, Input, Icon, Button, Radio, message  } from 'antd';
import { IUser } from './index.interface'
import http from '@tools/http'

const RadioGroup = Radio.Group
const FormItem = Form.Item
function UserAdd(props: any) {
  const userAdd = async (values: IUser) => {
    const res: any = await http.post('/users', values)
    message.success(res)
  }
  const handleSubmit = (e: any) => {  // 表单验证
    e.preventDefault()
    props.form.validateFields((err: any, values: IUser) => {
      if (!err) {
        userAdd(values) // 验证通过转给登入
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
      <FormItem label="用户账号" {...formItemLayout}>
        {getFieldDecorator('username', {
          rules: [
            { required: true, message: 'Please input username!' },
            {min: 1, max: 10, message: 'username must be in 1-10 length'},
          ],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        )}
      </FormItem>
      <FormItem label="用户密码" {...formItemLayout}>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Please input password!' },
          ],
        })(
          <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        )}
      </FormItem>
      <FormItem label="用户权限" {...formItemLayout}>
        {getFieldDecorator('role', {
          rules: [
            { required: true, message: 'Please choose role!' },
          ],
        })(
          <RadioGroup>
            <Radio value={1}>超级管理员</Radio>
            <Radio value={2}>管理员</Radio>
          </RadioGroup>
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">登入</Button>
      </FormItem>
    </Form>
  )
}

export default Form.create()(UserAdd)