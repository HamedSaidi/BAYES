import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const browserHistory = createBrowserHistory()
const middleware = [thunk, routerMiddleware(browserHistory)]

export const history = browserHistory
export const store = createStore(
  combineReducers({ router: routerReducer, ...rootReducer }),
  compose(applyMiddleware(...middleware)),
)
