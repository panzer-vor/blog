import * as React from 'react'
import { Form, Input, Icon, Button, Radio  } from 'antd';
import { IForm } from '@interface/common'

const RadioGroup = Radio.Group
const FormItem = Form.Item
function UserAdd(props: IForm) {
  const formItemLayout = {
    wrapperCol: {
      sm: { span: 24 },
      xs: { span: 24 },
    },
  }
  const handleSubmit = () => {console.log(111)}
  const { getFieldDecorator } = props.form
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem label="标题" {...formItemLayout}>
        {getFieldDecorator('title', {
          rules: [
            { required: true, message: 'Please input title!' },
          ],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem label="详情" {...formItemLayout}>
        {getFieldDecorator('desc')(
          <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        )}
      </FormItem>
      <FormItem label="访问权限" {...formItemLayout}>
        {getFieldDecorator('role', {
          rules: [
            { required: true, message: 'Please choose role!' },
          ],
        })(
          <RadioGroup>
            <Radio value={1}>超级管理员</Radio>
            <Radio value={2}>管理员</Radio>
            <Radio value={10}>任何人</Radio>
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