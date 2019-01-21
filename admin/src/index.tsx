import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { StoreContext } from 'redux-react-hook'
import makeStore from './store/store'
import App from './App';

const store = makeStore();
store.subscribe(() =>
  console.log(store.getState())
)
ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById('root') as HTMLElement
);
