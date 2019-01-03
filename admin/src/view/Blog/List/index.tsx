import * as React from 'react'
import { Table, Button, message, Tag } from 'antd';
import { IArticle, IArticleRecords, IArticleFormat } from './index.interface'
import http from '@tools/http'
import { useMappedState } from 'redux-react-hook'
import { RouteComponentProps } from 'react-router'
// import { options } from '@config'

const { useEffect, useState } = React
const mapState = (state: any) => ({
  user: state.user,
})
export default function ArticleList(props: RouteComponentProps) {
  const { user } = useMappedState(mapState)
  const [articleList, setArticleList] = useState<IArticle[]>([])
  const [startPage, setStartPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [total, setTotal] = useState<number>(0)
  const getArticleList = async (page?: number) => {
    const res: IArticleRecords = await http.get(`/articles/${pageSize}/${page || startPage}`)
    const data: IArticle[] | never[] = res.data
    setArticleList(data)
    setStartPage(res.startPage)
    setPageSize(res.pageSize)
    setTotal(res.total)
  }
  useEffect(() => {
    getArticleList()
  }, [])
  const columns = [
    {
      dataIndex: 'id',
      key: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'title',
      key: 'title',
      title: '标题'
    },
    {
      dataIndex: 'accessCount',
      key: 'accessCount',
      title: '访问量',
    },
    {
      dataIndex: 'accessAuthority',
      key: 'accessAuthority',
      title: '访问权限',
    },
    {
      dataIndex: 'tags',
      key: 'tags',
      title: '标签',
    },
    {
      dataIndex: 'action',
      key: 'action',
      title: '操作',
    }
  ]
  const deleteArticle = (id: number) => {
    return async () => {
      const res = await http.delete(`/articles/${id}`)
      message.success(res)
      getArticleList()
    }
  }
  const linkToEdit = (id: number) => {
    return () => {
      props.history.push(`./edit/${id}`)
    }
  }
  const action = (id: number) => {
    const EditButton = <Button type="primary" key="edit" onClick={linkToEdit(id)}>编辑</Button>
    if (user.role === 1) {
      return [
        EditButton,
        <Button type="danger" onClick={deleteArticle(id)} key="delete" style={{marginLeft: '10px'}}>删除</Button>,
      ]
    }
    return EditButton
  }
  const initDataSource = () => {
    return articleList
      .map((a: IArticle) => ({
        action: action(a.id),
        ...a,
        key: a.id,
        tags: a.tags.map(tag => tag ? <Tag key={tag.code}>{tag.name}</Tag> : <Tag />)
      }))
  }
  const descRender = (record: IArticleFormat) => {
    return <p style={{ margin: 0 }}>简介: {record.desc}</p>
  }
  const pageChange = (page: number) => {
    getArticleList(page)
  }
  return <div>
    <Table 
      columns={columns}
      dataSource={initDataSource()} 
      expandedRowRender={descRender}
      pagination={{ 
        current: startPage,
        onChange: pageChange,
        pageSize,
        total,
      }}
    />
  </div>
}
