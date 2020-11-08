import productsReducer from "./products";
import ordersReducer from "./orders"
import { combineReducers } from "redux";
import errorsReducer from "./errors";
import userReducer from "./user";
import userAddress from "./address";
import countriesList from "./countries"
import userCart from "./cart"


const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  errorMsg: errorsReducer,
  orders: ordersReducer,
  addresses: userAddress,
  countries: countriesList,
  cart: userCart,

});


export default rootReducer;
