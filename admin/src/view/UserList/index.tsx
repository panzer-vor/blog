import * as React from 'react'
import { Link } from 'react-router-dom'
import http from '@tools/http'

const { useEffect } = React
export default function UserList() {
  useEffect(() => {
    http.get('/users')
  })
  return <div>
    UserList
    <Link to="/">TO HOME</Link>
  </div>
}