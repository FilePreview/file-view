import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Explorer } from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    Explorer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store