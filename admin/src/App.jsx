import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Routes from './router/routes'
import { StoreProvider } from 'redux-react-hook'
import makeStore from '@store/store'
import './App.css'

const store = makeStore()
function App() {
  return (
    <StoreProvider value={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default hot(module)(App)
