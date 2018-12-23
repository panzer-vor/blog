import * as React from 'react'
import BlogFormComponent from '@components/BlogForm'
import { Form, Button } from 'antd';
// import http from '@tools/http'

const { useEffect } = React
function ArticleAEdit(props: any) {
  const setInstanceFormField = () => {
    props.form.setFieldsValue({
      title: '111'

    })
  }
  useEffect(setInstanceFormField, [])
  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log(values)
      }
    })
  }
  const newProps = {
    ...props,
    handleSubmit,

  }
  return <BlogFormComponent {...newProps}>
    <Button type="primary" htmlType="submit">执行</Button>
  </BlogFormComponent>
}

export default Form.create()(ArticleAEdit)
