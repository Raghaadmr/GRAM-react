import productsReducer from "./products"
import ordersReducer from "./orders"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    products: productsReducer,
    orders: ordersReducer,
  
})

export default rootReducer;