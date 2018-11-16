import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, Action, Store } from 'redux'

interface IAppState {
  root: any
}

const store: Store<IAppState> = createStore(combineReducers({
  root: (oldState: any = {}, action: Action) => oldState,
}))

render(
  <Provider store={store}>
    <div>Hello</div>
  </Provider>,
  document.getElementById('root')
)


