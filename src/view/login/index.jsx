import React, { useState } from 'react'
import { Input, Button, Row, Form, Icon } from 'antd'
import http from '@http'

const { Item } = Form
export default function Login(props) {
  const [name, setUsername] = useState('')
  const [pass, setPassword] = useState('')
  const [count, setCount] = useState(0);
  const userLogin = () => {
    http.patch('auth', {
      username: 'xyk',
      password: '123'
    }).then(res => {
      const { username, role, id, token } = res
      window.localStorage.setItem('admin_token', token);
      props.dispatch({
        type: "SAVE_USER",
        user: {
          username,
          role,
          id,
        },
      })
    }).then(() => {
      props.history.push('/')
    })
  }
  const handleSubmit = (val) => {
    console.log(username, password)
    return
  }
  const inputUsername = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value)
  }
  return (
    <div>
      <input type="text" value={name}  onChange={inputUsername} />
    </div>
  )
}