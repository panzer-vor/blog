import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Routes from './router/routes'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default hot(module)(App)
