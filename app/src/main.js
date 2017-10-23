import React from 'react'
import App from './js/containers/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './js/reducers'
import ReactDOM from 'react-dom'

let store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,
    document.getElementById('abc')
);
