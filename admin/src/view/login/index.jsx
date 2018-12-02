import React, { useCallback } from 'react'
import { Input, Button, Row } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import http from '@http'

const mapState = state => ({
  user: state.user
})
export default function Login() {
  const user = useMappedState(mapState)

  const consoleData = () => {
    console.log(user)
  }
  const dispatch = useDispatch()
  const save = useCallback((res) => dispatch({type: 'SAVE_USER', res}), [
    user,
  ]);
  save({
    username: 111
  })
  // const userLogin = () => {
  //   http.patch('auth',{
  //     username: 'xyk',
  //     password: '123',
  //   }).then(res => {
  //     save(res)
  //   })
  // }
  // userLogin()
  return (
    <Row>
      <Input />
      <Input />
      <div>{user.username}</div>
      <Button onClick={consoleData}>登入</Button>
    </Row>
  )
}