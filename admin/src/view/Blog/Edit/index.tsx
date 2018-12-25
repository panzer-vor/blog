import * as React from 'react'
import BlogFormComponent from '@components/BlogForm'
import { Form, Button, message } from 'antd';
import { IForm } from '@interface/common'
import http from '@tools/http'
import { ITag, IUpdateArticle } from './index.interface'

const { useEffect } = React
function ArticleAEdit(props: IForm) {
  const match: { params: any } = props.match
  const params: { id: number } = match.params
  const setInstanceFormField = async () => {
    const res: IUpdateArticle = await http.get(`/articles/${params.id}`)
    props.form.setFieldsValue({
      accessAuthority: res.accessAuthority,
      article: res.article,
      desc: res.desc,
      tagCodes: res.tags.map((v: ITag) => v.code),
      title: res.title,
    })
  }
  useEffect(() => {
    setInstanceFormField()
  }, [])
  const handleSubmitRequest = async (values: any) => {
    const res = await http.patch('/articles', {
      ...values,
      id: Number(params.id),
    })
    message.success(res)
  }
  const newProps = {
    ...props,
    handleSubmitRequest,
  }
  return <BlogFormComponent {...newProps}>
    <Button type="primary" htmlType="submit">执行</Button>
  </BlogFormComponent>
}

export default Form.create()(ArticleAEdit)
