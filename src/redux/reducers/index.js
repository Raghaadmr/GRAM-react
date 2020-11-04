import productsReducer from "./products";
import { combineReducers } from "redux";
import errorsReducer from "./errors";
import userReducer from "./user";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  errorMsg: errorsReducer,
});

export default rootReducer;
