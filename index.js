import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import gameApp from './reducers'

let store = createStore(gameApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
