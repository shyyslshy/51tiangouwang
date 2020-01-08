import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from './Reducers'
// reducer 来修改状态、函数写法、第一个参数接受老状态、第二个参数是要改的值，深复制老状态、要有retrun ，经过action返回新状态

const store = createStore(reducer, applyMiddleware(reduxPromise))

export default store