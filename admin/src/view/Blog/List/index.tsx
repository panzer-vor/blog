import * as React from 'react'
import { Table, Button, message } from 'antd';
import { IArticle, IArticleRecords } from './index.interface'
import http from '@tools/http'
import { useMappedState } from 'redux-react-hook'

const { useEffect, useState } = React
const mapState = (state: any) => ({
  user: state.user,
})
export default function UserList() {
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
      dataIndex: 'action',
      key: 'action',
      title: '操作',
    }
  ]
  const deleteUser = (id: number) => {
    return async () => {
      const res = await http.delete(`/users/${id}`)
      message.success(res)
      getArticleList()
    }
  }
  const action = (id: number) => {
    if (user.role === 1) {
      return [
        <Button type="primary" key="edit">编辑</Button>,
        <Button type="danger" onClick={deleteUser(id)} key="delete" style={{marginLeft: '10px'}}>删除</Button>,
      ]
    }
    return <Button type="primary" key="edit">编辑</Button>
  }
  const initDataSource = () => {
    return articleList
      .map((a: IArticle) => ({
        action: action(a.id),
        ...a,
        key: a.id,
      })
    )
  }
  const descRender = (record: IArticle) => {
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
