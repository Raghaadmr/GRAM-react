import productsReducer from "./products";
import ordersReducer from "./orders"
import { combineReducers } from "redux";
import errorsReducer from "./errors";
import userReducer from "./user";
import userAddress from "./address";
import countriesList from "./countries"


const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  errorMsg: errorsReducer,
  orders: ordersReducer,
  addresses: userAddress,
  countries: countriesList,

});


export default rootReducer;
