import * as React from 'react'
import { useDispatch } from 'redux-react-hook'
import { IRouter } from '@interface/common'

const { useState } = React;
export default function Login(props: IRouter) {
  const { history } = props;
  const dispatch = useDispatch();
  const [name, setUsername] = useState('')
  // const userLogin = () => {
    // http.patch('auth', {
    //   username: 'xyk',
    //   password: '123'
    // }).then(res => {
    //   const { username, role, id, token } = res
    //   window.localStorage.setItem('admin_token', token);
    //   props.dispatch({
    //     type: "SAVE_USER",
    //     user: {
    //       username,
    //       role,
    //       id,
    //     },
    //   })
    // }).then(() => {
    //   props.history.push('/')
    // })
  // }
  const con = () => {
    console.log(props)
    history.push('/') 
  }
  const inputUsername = (e: any) => {
    dispatch({
      type: 'SAVE_USER',
      user: e.target.value,
    })
    setUsername(e.target.value)
  }
  return (
    <div>
      <button onClick={con}>1111</button>
      <input type="text" value={name}  onChange={inputUsername} />
    </div>
  )
}