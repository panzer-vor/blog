import * as React from 'react'
import { Form, Button, message  } from 'antd';
import { IForm } from '@interface/common'
import http from '@tools/http'
import BlogFormComponent from '@components/BlogForm'
import { IArticle } from '@view/Blog/Add/index.interface'

function ArticleAdd(props: IForm) {
  const handleSubmitRequest = async (values: IArticle) => {
    const res: any = await http.post('/articles', values)
    message.success(res)
  }
  const newProps = {
    ...props,
    handleSubmitRequest,
  }
  return (
    <BlogFormComponent
      {...newProps}
    >
      <Button type="primary" htmlType="submit">添加</Button>
    </BlogFormComponent>
  )
}

export default Form.create()(ArticleAdd)