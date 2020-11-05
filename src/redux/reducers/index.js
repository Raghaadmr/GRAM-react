import productsReducer from "./products";
import ordersReducer from "./orders"
import { combineReducers } from "redux";
import errorsReducer from "./errors";
import userReducer from "./user";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  errorMsg: errorsReducer,
  orders: ordersReducer,

});


export default rootReducer;
