import * as React from 'react'
import { Table, Button, message } from 'antd';
import http from '@tools/http'
import { IUser } from './index.interface'
import { useMappedState } from 'redux-react-hook'
import { IState } from '../../../interface/state'

const { useEffect, useState } = React
const mapState = (state: IState) => ({
  user: state.user,
})
export default function UserList() {
  const [userList, setUserList] = useState([])
  const { user } = useMappedState(mapState)
  const getUserList = async () => {
    const res: any = await http.get('/users')
    setUserList(res)
  }

  useEffect(() => {
    getUserList()
  }, [])
  const columns = [{
    dataIndex: 'id',
    key: 'id',
    title: 'ID',
  }, {
    dataIndex: 'username',
    key: 'username',
    title: '用户名',
  }, {
    dataIndex: 'role',
    key: 'role',
    title: '角色',
  }, {
    dataIndex: 'action',
    key: 'action',
    title: '操作',
  }]
  const deleteUser = (id: number) => {
    return async () => {
      const res = await http.delete(`/users/${id}`)
      message.success(res)
      getUserList()
    }
  }
  const action = (role: number, id: number) => {
    if (role !== 1) {
      return <Button type="danger" onClick={deleteUser(id)}>删除</Button>
    }
    return null
  }
  const initDataSource = () => {
    return userList
      .filter((u: IUser) => u.id !== (user ? user.id : 0))
      .map((u: IUser) => ({
        action: action(u.role, u.id),
        ...u,
        key: u.id,
      })
    )
  }
  return <div>
    <Table columns={columns} dataSource={initDataSource()} />
  </div>
}