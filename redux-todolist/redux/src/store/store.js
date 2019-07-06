import { createStore } from 'redux'
import myReducer from './reducer'   // 引入数据 我理解为 数据

 const myStore = createStore(myReducer);

 export default myStore