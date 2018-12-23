import * as React from 'react'
import { Form, Input, Radio } from 'antd';

const RadioGroup = Radio.Group
const FormItem = Form.Item
function BlogFormComponent(props: any) {
  const formItemLayout = {
    wrapperCol: {
      sm: { span: 24 },
      xs: { span: 24 },
    },
  } 
  const { getFieldDecorator } = props.form
  return (
    <Form onSubmit={props.handleSubmit}>
      <FormItem label="标题" {...formItemLayout}>
        {getFieldDecorator('title', {
          rules: [
            { required: true, message: 'Please input title!' },
          ],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem label="简介" {...formItemLayout}>
        {getFieldDecorator('desc')(
          <Input.TextArea autosize={true} />
        )}
      </FormItem>
      <FormItem label="文章" {...formItemLayout}>
        {getFieldDecorator('article', {
          rules: [
            { required: true, message: 'Please input article!' },
          ],
        })(
          <Input.TextArea autosize={true} />
        )}
      </FormItem>
      <FormItem label="访问权限" {...formItemLayout}>
        {getFieldDecorator('accessAuthority', {
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
        { props.children }
      </FormItem>
    </Form>
  )
}

export default BlogFormComponent