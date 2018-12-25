import * as React from 'react'
import { Form, Input, Radio, Select } from 'antd'
import { ITags } from '@view/Blog/List/index.interface'
import http from '@tools/http'

const RadioGroup = Radio.Group
const FormItem = Form.Item
const { useEffect, useState } = React
function BlogFormComponent(props: any) {
  useEffect(() => {
    getTagsInfo()
  }, [])
  const formItemLayout = {
    wrapperCol: {
      sm: { span: 24 },
      xs: { span: 24 },
    },
  }
  const [tags, getTags] = useState<ITags[]>([{
    code: 0,
    name: '',
  }])
  const getTagsInfo = async () => {
    const res = await http.get('/articles/tags')
    getTags(res)
  }
  const handleSubmit = (e: any) => {  // 表单验证
    e.preventDefault()
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        props.handleSubmitRequest(values)
      }
    })
  }
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
      <FormItem label="标签" {...formItemLayout}>
        {getFieldDecorator('tagCodes')(
          <Select mode="multiple">
            {
              tags && tags.map(v => <Select.Option 
                key={String(v.code)}
                value={v.code}
              >{v.name}</Select.Option>)
            }
          </Select>
        )}
      </FormItem>
      <FormItem>
        { props.children }
      </FormItem>
    </Form>
  )
}

export default BlogFormComponent